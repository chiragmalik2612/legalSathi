import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Login from "./Components/Login";
import LawyerList from "./Components/LawyerList";
import Pricing from "./Components/Pricing";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import JoiningForm from "./Components/JoiningForm";
import LawyerAbout from "./Components/LawyerAbout";


function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Routes>
     <Route path="/" element = {<Home/>}/>
      <Route path="/home" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/lawyers" element = {<LawyerList/>}/>
      <Route path="/lawyers/:lname" element = {<LawyerAbout/>}/>
      <Route path="/pricing" element = {<Pricing/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/signup" element = {<Signup/>}/>
      <Route path="/join" element = {<JoiningForm/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
