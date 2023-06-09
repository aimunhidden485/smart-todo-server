import mongoose from "mongoose";

const userSchema = mongoose.Schema(
        {
                firstName: {
                        type: String,
                        required: true,
                },
                lastName: {
                        type: String,
                        required: true,
                },
                email: {
                        type: String,
                        unique: true,
                        required: true,
                },
                password: {
                        type: String,
                        min: 6,
                        required: true,
                },
              
              
        },
        { timeStamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;