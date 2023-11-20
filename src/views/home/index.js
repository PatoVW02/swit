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
  const imageStyle = {
    maxWidth: "100%",
    borderRadius: "20px", // Adjust the border radius as desired
  };

  return (
    <div className="Home">
      <header>
        <div className="header-container-home">
          <div className="image-overlay-home">
            <img className="header-image-home" src={Banner} alt="Home Banner" />
          </div>
          <h1 className="header-title-home">
            Explora el Futuro de la Tecnología
          </h1>
        </div>
      </header>

      <body>
        <div>
          <Typography
            variant="h5"
            component="h5"
            style={{
              paddingLeft: "4rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#023047",
              margin: "0rem 0rem 0rem 0rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              color: "white",
            }}
          >
            Una experiencia enriquecedora en el mundo de la tecnología y la
            innovación.
          </Typography>

          <Grid container spacing={2} style={{ padding: "3rem" }}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                style={{
                  padding: "1rem",
                  borderRadius: "15px",
                  background: "#023047",
                }}
              >
                <Container>
                  <img
                    src={ComputerScience}
                    alt="Computer Science"
                    style={imageStyle}
                    className="experience-image"
                  />
                  <Typography
                    variant="h5"
                    style={{
                      alignContent: "center",
                      textAlign: "center",
                      paddingTop: "1rem",
                      color: "white",
                    }}
                  >
                    Únete a nuestra exploración de Ciencias de la Computación
                    para descubrir cómo la innovación tecnológica está forjando
                    el camino hacia el futuro. Aprende sobre desarrollos
                    pioneros en inteligencia artificial, computación en la nube
                    y software avanzado.
                  </Typography>
                </Container>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                style={{
                  padding: "1rem",
                  borderRadius: "15px",
                  background: "#023047",
                }}
              >
                <Container>
                  <img
                    src={Cybersecurity}
                    alt="Cybersecurity"
                    style={imageStyle}
                    className="experience-image"
                  />
                  <Typography
                    variant="h5"
                    style={{
                      alignContent: "center",
                      textAlign: "center",
                      paddingTop: "1rem",
                      color: "white",
                    }}
                  >
                    Adéntrate en el campo de la ciberseguridad, donde expertos
                    te enseñarán a proteger infraestructuras críticas y datos
                    valiosos contra amenazas digitales. Aprende sobre las
                    últimas estrategias defensivas y cómo la seguridad
                    cibernética es esencial en el mundo conectado de hoy.
                  </Typography>
                </Container>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                style={{
                  padding: "1rem",
                  borderRadius: "15px",
                  background: "#023047",
                }}
              >
                <Container>
                  <img
                    src={DataScience}
                    alt="Data Science"
                    style={imageStyle}
                    className="experience-image"
                  />
                  <Typography
                    variant="h5"
                    style={{
                      alignContent: "center",
                      textAlign: "center",
                      paddingTop: "1rem",
                      color: "white",
                    }}
                  >
                    Explora el mundo del análisis de datos en nuestra sección de
                    Data Science. Descubre cómo los científicos de datos
                    transforman grandes volúmenes de información en insights
                    accionables y conducen la toma de decisiones basada en datos
                    en todas las industrias.
                  </Typography>
                </Container>
              </Paper>
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
            Únete a los líderes de la industria en nuestro próximo evento.
          </Typography>
          <Button
            variant="contained"
            style={{ width: "20rem", backgroundColor: "#303033" }}
            href="/registration"
          >
            Únete Ahora
          </Button>
        </Stack>

        <br />
        <br />

        <Paper
          style={{
            backgroundColor: "#023047",
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
              SWITE es una iniciativa del Departamento de Ciencias de la
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
      </body>
    </div>
  );
};

export default Home;
