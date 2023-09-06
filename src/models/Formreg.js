const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    Name: {
        type: String,
        // required: true,

    },
    Age: {
        type: Number,
        // required: true,
    },
    
})

const Register = new mongoose.model("Register", formSchema)

module.exports = Register;