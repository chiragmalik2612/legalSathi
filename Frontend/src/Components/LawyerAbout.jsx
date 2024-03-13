import { useParams } from "react-router-dom";

const LawyerAbout = () =>{
    const {lname} = useParams()
    return(
        <h1>{lname}'s page</h1>
    )
}

export default LawyerAbout;