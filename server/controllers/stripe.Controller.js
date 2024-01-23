import Stripe from "stripe";
// import Users from "../models/userModel.js";
import Subscriptions from "../models/subscriptions.js"


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.WEBHOOK_SIGNING_SECRET;

export const stripeSession = async (req, res) => {

    // const { userId } = req.body;
    // const { email: userEmail } = await Users.findById(userId);
    const userEmail = "";

    let customer;
    const auth0UserId = userEmail;

    const existingCustomers = await stripe.customers.list({
      email: userEmail,
      limit: 1,
    });

    if(existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];

      const subscriptions = await stripe.subscriptions.list({
        customer: customer.id,
        status: "active",
        limit: 1
      })

      if(subscriptions.data.length > 0) {
        const stripeSession = await stripe.billingPortal.session.create({
          customer: customer.id,
          return_url: "https://www.kaamyabjobportal.com"
        })
        return res.status(409).json({ redirectUrl: stripeSession.url })
      }
    } else {
      customer = await stripe.customers.create({
        email: userEmail,
        metadata: {
          userId: auth0UserId,
        }
      });
    }

    const session = await stripe.checkout.sessions.create({
      success_url: "https://www.kaamyabjobportal.com/success",
      cancel_url: "https://www.kaamyabjobportal.com/cancel",
      payment_method_types: ["card"],
      mode:"subscription",
      billing_address_collection: "auto",
      line_items: [
        {
          price_data: {
            currency: "INR",
            product_data: {
              name: "Kaam Yab Job Portal",
              description: "first 25000 applicant's either get a guaranteed job or a cash prize of 1,00,000₹ if we aren't able to land you a job.",
            },
            unit_amount: 7500 * 100,
            recurring: {
              interval: "year",
            },
          },
          quantity: 1,
        }
      ],
      metadata: {
        userId: auth0UserId,
      },
      customer: customer.id,
    });
    res.json({ id: session.id });
};

export const webhook = async (req, res) => {
  const subscriptions = Subscriptions;

  const payload = req.body;
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (error) {
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if(event.type === "invoice.payment_succeeded") {
    const invoice = event.data.object;

    const subscription = await stripe.subscriptions.retrieve(
      event.data.object.subscription
    );

    const customer = await stripe.customers.retrieve(
      event.data.object.customer
    );

    if(invoice.billing_reason === "subscription_create"){
      const subscriptionDocument = {
        userId: customer?.metadata?.userId,
        usbId: event.data.object.subscription,
        endDate: subscription.current_period_end * 1000,
      };

      const result = await subscriptions.insertOne(subscriptionDocument);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
      console.log(`First subscription payment successfull for Invoice ID: ${customer.email} ${customer?.metadata?.userId}`);
    } else if(
      invoice.billing_reason === "subscription_cycle" ||
      invoice.billing_reason === "subscription_update"
    ) {
      const filter = { userId: customer?.metadata?.userId };

      const updateDoc = {
        $set: {
          endDate: subscription.current_period_end * 1000,
          recurringSuccessFul_test: true,
        },
      };

      const result = await subscriptions.updateOne(filter, updateDoc);

      if(result.matchedCount === 0) {
        console.log("Document matched but not updated (it may the same data)");
      } else {
        console.log(`Successfully updated the document`);
      }

      console.log(`Recurring subscription payment successfull for Invoce ID: ${invoice.id}`);
    }

    console.log(
      new Date(subscription.current_period_end * 1000),
      subscription.status,
      invoice.billing_reason
    );
  }

  if(event.type === "customer.subscription.updated") {
    const subscription = event.data.object;
    if(subscription.cancel_at_period_end) {
      console.log(`Subscription ${subscription.id} was canceled`);
    } else {
      console.log(`Subscription ${subscription.id} was restarted.`);
    }
  }
  res.status(200).end();
};
