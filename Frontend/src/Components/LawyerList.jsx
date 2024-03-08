import "./LawyerList.css";
import {useEffect, useState} from "react";
import axios from "axios";

import LawyerCard from "./LawyerCard";

const LawyerList = () => {
    const [lawyers, setLawyers] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/lawyers')
      .then(lawyers => setLawyers(lawyers.data.allLawyers))
      .catch(err => console.log(err))
    }, [])


    return(

        <div className="Lawyers">
        <h4 style={{margin: "2rem 4rem", backgroundColor: "skyblue", width:"190px", padding:"10px",borderRadius:"10px"}}>Talk to Lawyers</h4>
        <div className="lawyerList">
            {lawyers.map((allLawyers) => (
                <LawyerCard
                key ={allLawyers._id}
                lawyerName ={allLawyers.lawyerName}
                experience={allLawyers.experience}
                tags={allLawyers.tags}
                />
            ))}
        </div>
        </div>

    )
}

export default LawyerList;