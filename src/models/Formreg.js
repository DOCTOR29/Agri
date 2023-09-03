const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,

    },
    age: {
        type: Number,
        // required: true,
    }
})

const Register = new mongoose.model("Register", formSchema)

module.exports = Register;