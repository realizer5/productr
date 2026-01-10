import { verify } from "argon2";
import { model, Schema } from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            sparse: true,
        },
        phone: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            sparse: true,
        },
        name: {
            type: String,
            required: [true, "Name is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        refreshToken: { type: String },
    },
    { timestamps: true },
);

userSchema.pre("validate", function (next) {
    if (!this.email && !this.phone) {
        next(new Error("Either email or phone number is required"));
    } else {
        next();
    }
});

export const User = model("User", userSchema);
