const mongoose = require("mongoose");

const lawyerSchema = mongoose.Schema(
    {
        lawyerName:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
        experience:{
            type: String,
            default: 'Newly joined',
        },
        tags:{
            type: String,
            default: "Not mentioned"
        },
        state:{
            type: String,
            required: true,
        },
        city:{
            type: String,
            required: true,
        },
        number:{
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Lawyer', lawyerSchema);
