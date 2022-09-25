const mongoose = require("mongoose")

const userSchema = new mongoose.schema(
    {
        name: {
            type: String,
            required: [true, "please enter a name"]
        },
        email:{
            type: String,
            required: [true, "please enter an email"]
        },
        password: {
            type: Number,
            required: [true, "please enter a password"]
        }
    }
)

module.exports = new mongoose.model("user", userSchema)