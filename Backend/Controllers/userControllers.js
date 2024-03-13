const User = require("../Models/userModel")
const jwt = require('jsonwebtoken')

const generateToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY, { expiresIn:'7d'})
}

//signup user
const signupUser = async (request, response) =>{
    const {userName, email, password} = request.body
    try{
        const user = await User.signup(userName, email, password);

        //creating Token
        const token = generateToken(user._id)
        
        return response.status(201).send(user);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

//login User
const loginUser = async (req,res) => {
    const{email, password} = req.body

    try{
        const user = await User.login(email, password)

        const token = generateToken(user._id)

        res.status(200).json({email, token})
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

//get all users
const getUsers = async (request, response) =>{
    try{
        const users = await User.find({});

        return response.status(200).json({
            allUsers: users
        });
    } catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

//Get One user from database by Id
const getUser = async (request, response) => {
    try{

        const {id} = request.params;

        const user = await User.findById(id);

        return response.status(200).json(user);
    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

//Update a user
const updateUser = async (request, response) =>{
    try{
        if(
            !request.body.userName ||
            !request.body.email ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }

        const {id} = request.params;

        const result = await User.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(400).json({message: 'User not found'});
        }
        return response.status(200).send({message:'User updated successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

//delete a User
const deleteUser = async (request, response) => {
    try{
        const {id} = request.params;

        const result = await User.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'User not found'});
        }
        return response.status(200).send({message: 'User deleted successfully'});
        
    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

module.exports = {
    signupUser,
    loginUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}
