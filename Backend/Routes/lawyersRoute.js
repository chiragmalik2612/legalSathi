const express = require( "express");
const { signupLawyer, loginLawyer, deleteLawyer, getLawyer, getLawyers, updateLawyer } = require( "../Controllers/lawyerControllers.js");

const router = express.Router();


//Signup lawyer
router.post('/', signupLawyer);

//Route for login lawyer
router.post('/login', loginLawyer)

//Route for Get all lawyers from database
router.get('/', getLawyers);

//Route for Get One Lawyer from database by Id
router.get('/:id', getLawyer);

//Route for Update a Lawyer
router.put('/:id', updateLawyer);

//Route to delete a Lawyer 
router.delete('/:id', deleteLawyer);



module.exports = router;
