// import express from "express";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

// const kaamyabjobportal = 'http://localhost:5173'

export const stripeSession = async () => {

    const { priceId } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    });
  
    res.json({ id: session.id });
//     try {
//         const prices = await stripe.prices.list({
//             lookup_keys: [req.body.lookup_keys],
//             expand: ['data.product']
//         });

//         const session = await stripe.checkout.sessions.create({
//             billing_address_collection: 'auto',
//             line_items: [
//                 {
//                     prices: prices.data[0].id,
//                     quantity: 1
//                 }
//             ],
//             mode: 'subscription',
//             success_url: `${kaamyabjobportal}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
//             cancel_url: `${kaamyabjobportal}?canceled=true`
//         });

//         res.redirect(3003, session.url);
//     } catch (error) {
//         console.log(error)
//     }
// } 

// export const portalSession = async (req, res) => {
//     try {
//         const { session_id } = req.body;
//         const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);
        
//         const returnUrl = kaamyabjobportal;

//         const portalSessions = await stripe.billingPortal.sessions.create({
//             customer: checkoutSession.customer,
//             return_url: returnUrl
//         });

//         res.redirect(303, portalSessions.url);

//     } catch (error) {
//         console.log(error)
//     }
// }

// export const webHook = (express.raw({ type: 'application/json' }), (request, response) => {
//     let event = request.body;

//     const endpointSecret = 'whsec_12345';

//     if(endpointSecret) {
//         const signature = request.headers['stripe-signature'];

//         try {
//             event = stripe.webhooks.constructEvent(
//                 request.body,
//                 signature,
//                 endpointSecret
//             );
//         } catch (err) {
//             console.log(`⚠️  Webhook signature verification failed.`, err.message)
//             return response.sendStatus(400);
//         }
//     }
//     let subscription;
//     let status;

//     switch(event.type) {
//         case 'customer.subscription.trial_will_end':
//             subscription = event.data.object;
//             console.log(`Subscription status is ${status}.`);
//             break;
//             case 'customer.subscription.deleted':
//                 subscription = event.data.object;
//                 status = subscription.status;
//                 console.log(`Subscription status is ${status}.`);
                
//                 break;
//             case 'customer.subscription.created':
//                 subscription = event.data.object;
//                 status = subscription.status;
//                 console.log(`Subscription status is ${status}.`);
                
//                 break;
//             case 'customer.subscription.updated':
//                 subscription = event.data.object;
//                 status = subscription.status;
//                 console.log(`Subscription status is ${status}.`);
                
//                 break;
//             default:

//             console.log(`Unhandled event type ${event.type}.`);    
//     }

//     response.send() 
}
