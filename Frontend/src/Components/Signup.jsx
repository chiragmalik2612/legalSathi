import { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const[username, setUsername] = useState()
  const[email, setEmail] = useState()
  const[password, setPassword] = useState()
  const navigate = useNavigate()

  const signupButtonHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/users', {
      userName: username,
      email: email,
      password: password
    })
    .then(window.alert("Signup successfully!!"))
    navigate('/home')
    .catch(err => console.log(err))
  }
    return (
        <form className="signup">
    <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">SignUp</h1>

    <div className="form-floating">
      <input type="text" className="form-control mb-2" id="floatingInput1" placeholder="name" fdprocessedid="8q7ezn"
          onChange={(e) => setUsername(e.target.value)}/>
      <label htmlFor="floatingInput">Name</label>
    </div>
    <div className="form-floating">
      <input type="email" className="form-control mb-2" id="floatingInput2" placeholder="name@example.com" fdprocessedid="8q7ezn"
          onChange={(e) => setEmail(e.target.value)}/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control mb-2" id="floatingPassword" placeholder="Password" fdprocessedid="eo928u"
          onChange={(e) => setPassword(e.target.value)}/>
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <button className="btn btn-primary w-20 py-2" type="submit" fdprocessedid="xwu35f"
    onClick={signupButtonHandler}>
      Sign Up</button>
    </form>
    )
}

export default Signup;