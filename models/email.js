import { Schema, model, models } from "mongoose";

const EmailSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required!"],
    },
    name: {
      type: String,
      required: [true, "Name is required!"],
    },
    subject: {
      type: String,
      required: [true, "Subject is required!"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Email = models.Email || model("Email", EmailSchema);

export default Email;
