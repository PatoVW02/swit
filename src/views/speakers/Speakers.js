import { useState, useEffect } from "react";
import BigImage from "../../assets/Hombros de gigantes.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";

import "./Speakers.css";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      const speakersCollection = await db.collection("speakers").get();
      setSpeakers(
        speakersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchSpeakers();
  }, []);

  return (
    <div className="Speakers">
      <header>
        <div className="header-container-speakers">
          <div className="image-overlay-speakers">
            <img
              className="header-image-speakers"
              src={BigImage}
              alt="Speakers Banner"
            />
          </div>
          <h1 className="header-title-speakers">Speakers</h1>
        </div>
      </header>

      <br />
      <br />

      <h2 className="Descripcion">
        Aquí encontramos individuos pioneros en las ciencias computacionales y
        líderes cuyas contribuciones colectivamente, han formado el mundo actual
        y la era digital en la que vivimos.
      </h2>
      <p></p>

      <Typography
        variant="h6"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "3rem",
          paddingRight: "3rem",
        }}
      ></Typography>

      {speakers.length > 0 && (
        <div className="axe">
          {speakers.map((speaker) => {
            return (
              <Card sx={{ maxWidth: 345 }} style={{ marginTop: "2rem" }}>
                <CardMedia
                  sx={{ height: 260 }}
                  image={speaker.photoUrl}
                  title={speaker.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {speaker.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {speaker.description}
                  </Typography>
                  <br />
                  <Typography variant="caption" color="text.secondary">
                    <b>Conference Date: </b>
                    {speaker.dateTalk.toDate().toDateString()}
                  </Typography>
                </CardContent>
                <CardActions
                  disableSpacing
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <Link to={speaker.conferenceLink} target="_blank">
                    <Button
                      variant="contained"
                      size="large"
                      style={{
                        backgroundColor: "white",
                        borderRadius: 100,
                        color: "black",
                        fontWeight: 600,
                        border: "1px solid black", // Add this line for the black border
                      }}
                    >
                      Watch conference
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            );
          })}
        </div>
      )}

      <br />
      <br />
    </div>
  );
};

export default Speakers;
