import mongoose from "mongoose";

const verifyEmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  verificationToken: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "1h",
  },
});

const VerifyEmail = mongoose.model("Verify-Email", verifyEmailSchema);
export default VerifyEmail;
