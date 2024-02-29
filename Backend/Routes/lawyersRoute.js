import express from "express";
import { Lawyer } from "../Models/lawyerModel.js";

const router = express.Router();


//Route for Save a new Lawyer
router.post('/', async (request, response) =>{
    try{
        if(
            !request.body.lawyerName ||
            !request.body.email ||
            !request.body.password ||
            !request.body.state ||
            !request.body.city ||
            !request.body.number
        ){
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }
        const newLawyer = {
            lawyerName: request.body.lawyerName,
            email: request.body.email,
            password: request.body.password,
            city: request.body.city,
            state: request.body.state,
            number: request.body.number,
            experience: request.body.experience,
        };

        const lawyer = await Lawyer.create(newLawyer);

        return response.status(201).send(lawyer);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route for Get all lawyers from database
router.get('/', async (request, response) =>{
    try{
        const lawyers = await Lawyer.find({});

        return response.status(200).json({
            allLawyers: lawyers
        });
    } catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route for Get One Lawyer from database by Id
router.get('/:id', async (request, response) => {
    try{

        const {id} = request.params;

        const lawyer = await Lawyer.findById(id);

        return response.status(200).json(lawyer);
    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route for Update a Lawyer
router.put('/:id', async (request, response) =>{
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
});

//Route to delete a Lawyer 
router.delete('/:id', async (request, response) => {
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
});



export default router;
