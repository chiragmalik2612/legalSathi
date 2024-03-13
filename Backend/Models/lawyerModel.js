const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const validator = require('validator')

const lawyerSchema = mongoose.Schema(
    {
        lawyerName:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true
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
)

//static signup method
lawyerSchema.statics.signup = async function(lawyerName, email, password, experience, tags, state, city, number){

// validation
  if (!lawyerName||
    !email ||
    !password ||
    !state ||
    !city ||
    !number) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const lawyer = await this.create({lawyerName, email, password: hash, experience, tags, state, city, number})

    return lawyer
}


//static login method
lawyerSchema.statics.login = async function(email, password){

    if(!email || !password) {
      throw Error('fill all required fields')
    }
  
    const lawyer = await this.findOne({email})
    if(!lawyer) {
      throw Error('Email not registered')
    }
  
    const match = await bcrypt.compare(password, lawyer.password)
    if(!match) {
      throw Error('Incorrect password')
    }
  
    return lawyer
  }


module.exports = mongoose.model('Lawyer', lawyerSchema);
