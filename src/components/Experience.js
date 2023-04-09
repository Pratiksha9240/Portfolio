import { Container, Divider, Card,CardHeader,Avatar,IconButton,CardMedia,CardContent,Typography,Grid } from "@mui/material";
import Infosys from '../assets/infosys.jpg'
import Assetrak from '../assets/assetrak.jpg'

import "../styles/About.css";

const Experience = () => {
  return (
    <Container className="Div">
      <Divider>Experience</Divider>
      <br></br>
      <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Grid item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <img src={Infosys}/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title="Systems Engineer"
        subheader="Sept 06, 2021 - Dec 01,2022"
      />
      <CardMedia
        component="img"
        height="194"
        image={Infosys}
        alt="Infosys"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      </Card>
            </Grid>
            <Grid item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <img src={Assetrak}/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title="Web Developer Trainee"
        subheader="March 2021 - Jun 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image={Assetrak}
        alt="Assetrak"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      </Card>
                </Grid>

            </Grid>
      
    </Container>
  );
};

export default Experience;
