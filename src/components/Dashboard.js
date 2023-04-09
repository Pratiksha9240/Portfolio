import { Container, Button, Grid } from "@mui/material";
import "../styles/About.css";
import css from "../assets/css.jpg";
import html from "../assets/html.jpg";
import javascript from "../assets/javascript.jpg";
import react from "../assets/react.jpg";

const Dashboard = () => {
  return (
    <Container className="Div">
      <div className="container">
        <p style={{ width: "400px", marginRight: "200px" }}>
          Hello,I am <h1>Pratiksha Dhavale</h1>
          Software Engineer
          <br />
          Frontend developer
          <br />
          Based in Pune,Maharashtra
          <br />
          <br />
          <br />
          <a
            href="https://drive.google.com/file/d/1Y_9qSv1zHVmwyY1Tnah3cuoI99HM1j4C/view?usp=share_link"
            download="Pratiksha's Resume"
            target="_blank"
          >
            <Button variant="outlined">Download CV</Button>
          </a>
        </p>
        <div className="container">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Grid item xs={6}>
              <img src={react} alt="" className="Img" />
            </Grid>
            <Grid item xs={6}>
              <img src={javascript} alt="" className="Img" />
            </Grid>
            <Grid item xs={6}>
              <img src={html} alt="" className="Img" />
            </Grid>
            <Grid item xs={6}>
              <img src={css} alt="" className="Img" />
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
