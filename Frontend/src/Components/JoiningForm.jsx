import './JoiningForm.css';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const JoiningForm = () =>{

    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const[experience, setExperience] = useState()
    const[city, setCity] = useState()
    const[state, setState] = useState()
    const[number, setNumber] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/lawyers', {
            lawyerName: name,
            password: password,
            email: email,
            experience: experience,
            state: state,
            city: city,
            number: number
        })
        .then(result => console.log(result))
        navigate('/home')
        .catch(err => console.log(err))
    }

    return(
        <>
        <p className='instruction'>All fields are mandatory</p>
        <form className="row g-3 form">
  <div className="col-md-6">
    <label htmlFor="inputName4" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputName4"
    onChange={(e) => setName(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"
        onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"
        onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Experience</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="any previous experience (if NO , leave empty)"
        onChange={(e) => setExperience(e.target.value)}/>
  </div>
  <div className="col-md-5">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"
        onChange={(e) => setCity(e.target.value)}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <input type="text" className="form-control" id="inputState"
        onChange={(e) => setState(e.target.value)}/>
  </div>
  <div className="col-md-3">
    <label htmlFor="inputNumber" className="form-label">Mobile no.</label>
    <input type="number" className="form-control" id="inputNumber"
        onChange={(e) => setNumber(e.target.value)}/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>      
      <label className="form-check-label" htmlFor="gridCheck">
        I'm willing to join as a lawyer
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary"
    onClick={handleSubmit}>Submit</button>
  </div>
</form>
</>
    )
}

export default JoiningForm;