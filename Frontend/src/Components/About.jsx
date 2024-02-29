import "./About.css";
import AboutCard from "./AboutCard";

const About = () => {
    return (
        <div className="about">
        <div className="about-text">
            <h1>About Us</h1>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo doloremque maxime totam error. Magnam, minima repellat distinctio eos maxime quaerat, mollitia laudantium dolorum iste accusantium fuga velit labore fugit ducimus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus asperiores ipsam obcaecati ratione facilis recusandae sapiente voluptatum odit deleniti sequi in reiciendis rem adipisci, ducimus dolores, est libero! Illo!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos veritatis esse unde eligendi aspernatur vel, alias ipsam veniam assumenda excepturi, quibusdam provident non labore recusandae, accusantium voluptatum illo voluptatibus aperiam!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit molestias saepe corrupti id exercitationem, suscipit animi! Doloremque reiciendis dolore debitis minus sit adipisci ab? Cumque incidunt eveniet autem aspernatur?
            </h4>
        </div>
        <div className="aboutCards">
            <AboutCard/>
            <AboutCard/>
            <AboutCard/>
            <AboutCard/>
        </div>
        </div>
    )
}

export default About;