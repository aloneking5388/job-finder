import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

//schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is Required!"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is Required!"],
    },
    email: {
      type: String,
      required: [true, " Email is Required!"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "Password is Required!"],
      minlength: [6, "Password length should be greater than 6 character"],
      select: true,
    },
    stripeCustomer: {
      type: String,
      default: null
  },
    accountType: { type: String, default: "seeker" },
    contact: { type: String },
    location: { type: String },
    profileUrl: { type: String },
    cvUrl: { type: String },
    jobTitle: { type: String },
    about: { type: String },
    jobApply: [{ type: Schema.Types.ObjectId, ref: "Jobs" }]
  },
  { timestamps: true }
);

// middelwares
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next()
});

//compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//JSON WEBTOKEN
userSchema.methods.createJWT = function () {
  return JWT.sign({ userId: this._id, email: this.email }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });
};

const Users = mongoose.model("Users", userSchema);

export default Users;
