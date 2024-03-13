const express = require( "express");

const {signupUser, loginUser, getUsers, getUser, deleteUser, updateUser} = require("../Controllers/userControllers.js");
const router = express.Router();

//Route for SignUp a new User
router.post('/', signupUser);

//Route for login user
router.post('/login', loginUser)

//Route for Get all users from database
router.get('/', getUsers);

//Route for Get One user from database by Id
router.get('/:id', getUser);

//Route for Update a user
router.put('/:id', updateUser);

//Route to delete a User 
router.delete('/:id', deleteUser);

module.exports = router;
