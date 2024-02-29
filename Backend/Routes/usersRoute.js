import express from "express";
import { User } from "../Models/userModel.js";

const router = express.Router();

//Route for Save a new User
router.post('/', async (request, response) =>{
    try{
        if(
            !request.body.userName ||
            !request.body.email ||
            !request.body.password
        ){
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }
        const newUser = {
            userName: request.body.userName,
            email: request.body.email,
            password: request.body.password
        };

        const user = await User.create(newUser);

        return response.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route for Get all users from database
router.get('/', async (request, response) =>{
    try{
        const users = await User.find({});

        return response.status(200).json({
            allUsers: users
        });
    } catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route for Get One user from database by Id
router.get('/:id', async (request, response) => {
    try{

        const {id} = request.params;

        const user = await User.findById(id);

        return response.status(200).json(user);
    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route for Update a user
router.put('/:id', async (request, response) =>{
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
});

//Route to delete a User 
router.delete('/:id', async (request, response) => {
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
});

export default router;
