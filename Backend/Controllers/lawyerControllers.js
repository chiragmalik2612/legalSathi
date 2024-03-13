const Lawyer = require("../Models/lawyerModel")
const jwt = require('jsonwebtoken')

const generateToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY, { expiresIn:'7d'})
}

//Signup lawyer
const signupLawyer = async (request, response) =>{
    const {lawyerName, email, password, experience, tags, state, city, number} = request.body
    try{
        const lawyer = await Lawyer.signup(lawyerName, email, password, experience, tags, state, city, number)

        //creating Token
        const token = generateToken(lawyer._id)
        console.log(token)
        return response.status(201).send(lawyer);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

//login lawyer
const loginLawyer = async (req,res) => {
    const{email, password} = req.body

    try{
        const lawyer = await Lawyer.login(email, password)

        const token = generateToken(lawyer._id)

        res.status(200).json({email, token})
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

//Get all lawyers
const getLawyers = async (request, response) =>{
    try{
        const lawyers = await Lawyer.find({});

        return response.status(200).json({
            allLawyers: lawyers
        });
    } catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

//Get One Lawyer from database by Id
 const getLawyer = async (request, response) => {
    try{

        const {id} = request.params;

        const lawyer = await Lawyer.findById(id);

        return response.status(200).json(lawyer);
    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

//Update a Lawyer
const updateLawyer = async (request, response) =>{
    try{
        if(
            !request.body.lawyerName ||
            !request.body.email ||
            !request.body.password ||
            !request.body.state ||
            !request.body.city ||
            !request.body.number
        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }

        const {id} = request.params;

        const result = await Lawyer.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(400).json({message: 'Lawyer not found'});
        }
        return response.status(200).send({message:'Lawyer updated successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

//delete a Lawyer
const deleteLawyer = async (request, response) => {
    try{
        const {id} = request.params;

        const result = await Lawyer.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'Lawyer not found'});
        }
        return response.status(200).send({message: 'Lawyer deleted successfully'});
        
    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

module.exports = {
    signupLawyer,
    loginLawyer,
    getLawyers,
    getLawyer,
    updateLawyer,
    deleteLawyer
}