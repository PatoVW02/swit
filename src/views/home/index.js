import Banner from "../../assets/home-banner.jpg";
import ComputerScience from "../../assets/Computer-Science.jpg";
import Cybersecurity from "../../assets/Cybersecurity.jpg";
import DataScience from "../../assets/Data-Science.jpg";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <header>
        <div className="header-container">
          <img
            className="header-container"
            style={{ width: "100%", height: "55vh" }}
            src={Banner}
            alt="Hombres de Gigantes"
          />
          <h1 className="header-title">Home</h1>
        </div>
      </header>

      <br />

      <body>
        <Stack
          spacing={2}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" component="h4">
            Register to Our Upcoming Talks!
          </Typography>
          <Button
            variant="contained"
            style={{ width: "20rem", backgroundColor: "#303033" }}
            href="/registration"
          >
            Register Now!
          </Button>
        </Stack>

        <br />
        <hr />
        <br />

        <div>
          <Typography
            variant="h4"
            component="h4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            An awesome experience!
          </Typography>

          <Grid container spacing={2} style={{ padding: "3rem" }}>
            <Grid item xs={12} sm={6} md={4}>
              <Container>
                <img
                  src={ComputerScience}
                  alt="Computer Science"
                  style={{ maxWidth: "100%" }}
                  className="experience-image"
                />
                <Typography
                  variant="h5"
                  style={{
                    alignContent: "center",
                    textAlign: "center",
                    paddingTop: "1rem",
                  }}
                >
                  Computer Science
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Container>
                <img
                  src={Cybersecurity}
                  alt="Cybersecurity"
                  style={{ maxWidth: "100%" }}
                  className="experience-image"
                />
                <Typography
                  variant="h5"
                  style={{
                    alignContent: "center",
                    textAlign: "center",
                    paddingTop: "1rem",
                  }}
                >
                  Cybersecurity
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Container>
                <img
                  src={DataScience}
                  alt="Data Science"
                  style={{ maxWidth: "100%" }}
                  className="experience-image"
                />
                <Typography
                  variant="h5"
                  style={{
                    alignContent: "center",
                    textAlign: "center",
                    paddingTop: "1rem",
                  }}
                >
                  Data Science
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </div>

        <Paper
          style={{
            backgroundColor: "#303033",
            padding: "2rem",
          }}
        >
          <div
            style={{
              paddingLeft: "7rem",
              paddingRight: "7rem",
              color: "white",
            }}
          >
            <Typography variant="h5">
              SWIT is an initiative hosted by the Department of Computer Science
              at Tecnológico de Monterrey to inspire engineering students
              through talks by IT experts on their historical contributions and
              success stories.
            </Typography>
            <br />
            <Typography variant="h5">
              We have previously welcomed several personalities, such as Vint
              Cerf, Robert Metcalfe, Robert Tibshirani, Steve Crocker, and
              Jeffrey Ullman. To date, we have had over 300 attendees
              nationwide.
            </Typography>
          </div>
        </Paper>

        <br />
        <br />
      </body>
    </div>
  );
};

export default Home;
