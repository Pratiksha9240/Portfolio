import { Container, Divider } from "@mui/material";
import "../styles/About.css";
import MyImage from "../assets/MyImage.jpg";

const About = () => {
  return (
    <Container className="Div">
      <Divider> About </Divider>
      <div className="container">
      <p style={{content:'Justify'}}>
        Hello,I am Pratiksha Dhavale.I am a Software Engineer graduated in 2021.
        <br />
        I have worked in Infosys as a Systems Engineer. 
        <br />
        Now looking for
        opportunity to work as a frontend developer where I can utilize my
        skills. 
        <br />
        I am open work on below technologies:
        <ul>
          <li>React JS</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Redux</li>
        </ul>
      </p>
      <img style={{borderRadius: '50%'}} src={MyImage} alt="" />
      </div>
    </Container>
  );
};

export default About;
