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
          <div className="image-overlay">
            <img className="header-image" src={Banner} alt="Home Banner" />
          </div>
          <h1 className="header-title">Home</h1>
        </div>
      </header>

      <br />

      <body>
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
            ¡Una experiencia inolvidable y para recordar!
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

        <br />
        <hr />
        <br />

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
            ¡Registrate a nuestros proximos eventos!
          </Typography>
          <Button
            variant="contained"
            style={{ width: "20rem", backgroundColor: "#303033" }}
            href="/registration"
          >
            Registrar Ahora
          </Button>
        </Stack>

        <br />
        <br />

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
              SWIT es una iniciativa del Departamento de Ciencias de la
              Computación del Tecnológico de Monterrey para inspirar a
              estudiantes de ingeniería a través de charlas de expertos en TI
              sobre sus contribuciones históricas y casos de éxito.
            </Typography>
            <br />
            <Typography variant="h5">
              Anteriormente hemos dado la bienvenida a varias personalidades,
              como Vint Cerf, Robert Metcalfe, Robert Tibshirani, Steve Crocker
              y Jeffrey Ullman. Hasta la fecha, hemos tenido más de 300
              asistentes en todo el país.
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
