import mongoose, {Schema} from "mongoose";

const subscriptionsSchema = new mongoose.Schema({
userId: {
    type: String
},
subId: {
    type: String
},
endDate: {
    type: String
}
},{timestamps: true})

const Subscriptions = mongoose.model("subscriptions", subscriptionsSchema);

export default Subscriptions;