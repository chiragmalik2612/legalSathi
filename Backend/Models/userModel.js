const mongoose = require( "mongoose");
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = mongoose.Schema(
    {
        userName:{
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
        }
    },
    {
        timestamps: true,
    }
);

//static signup method
userSchema.statics.signup = async function(userName,email, password){

// validation
  if (!userName||
    !email ||
    !password) {
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
        throw Error('Email already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({userName, email, password: hash})

    return user
}


//static login method
userSchema.statics.login = async function(email, password){

  if(!email || !password) {
    throw Error('fill all required fields')
  }

  const user = await this.findOne({email})
  if(!user) {
    throw Error('Email not registered')
  }

  const match = await bcrypt.compare(password, user.password)
  if(!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema);
