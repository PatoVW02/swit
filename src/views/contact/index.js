import Banner from "../../assets/contact-banner.jpg";
import PanoramaITESM from "../../assets/Panorama_ITESM.jpg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./Contact.css";

const Home = () => {
  const mapStyles = {
    height: "100%",
    width: "100%",
    minHeight: "300px",
  };

  const defaultCenter = {
    lat: 25.6511,
    lng: -100.289811,
  };

  return (
    <div className="Contact">
      <header>
        <div className="header-container-contact">
          <div className="image-overlay-contact">
            <img
              className="header-image-contact"
              src={Banner}
              alt="Contact Us Banner"
            />
          </div>
          <h1 className="header-title-contact">Contáctanos</h1>
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
          <Typography variant="h5" component="h5">
            Si tienes sugerencias o retroalimentación, no dudes en contactarnos.
          </Typography>
          <Button
            variant="contained"
            style={{ width: "20rem", backgroundColor: "#303033" }}
          >
            Enviar Correo
          </Button>
        </Stack>

        <br />
        <hr />
        <br />

        <div className="content-container">
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
            Instituto Tecnológico y de Estudios Superiores de Monterrey
          </Typography>

          <Grid container spacing={2} style={{ padding: "3rem" }}>
            <Grid item xs={12} sm={5} md={5} order={{ xs: 1, sm: 1 }}>
              <div>
                <img
                  src={PanoramaITESM}
                  alt="Panorama ITESM"
                  className="panorama-image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={7} md={7} order={{ xs: 2, sm: 2 }}>
              <LoadScript googleMapsApiKey="your_google_maps_api_key_here">
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={14}
                  center={defaultCenter}
                >
                  <Marker position={defaultCenter} />
                </GoogleMap>
              </LoadScript>
            </Grid>
          </Grid>
        </div>

        <br />
        <br />
      </body>
    </div>
  );
};

export default Home;
