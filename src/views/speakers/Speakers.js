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
          <h1 className="header-title-speakers">Conferencistas</h1>
        </div>
      </header>

      <Typography
        variant="h5"
        component="h5"
        style={{
          paddingLeft: "4rem",
          backgroundColor: "#023047",
          margin: "0rem 0rem 0rem 0rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          color: "white",
        }}
      >
        Aquí encontramos individuos pioneros en las ciencias computacionales y
        líderes cuyas contribuciones colectivamente, han formado el mundo actual
        y la era digital en la que vivimos.
      </Typography>

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
            let content;

            if (speaker.dateTalk) {
              const dateTalk = speaker.dateTalk.toDate();
              const formattedDate = dateTalk.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              content = formattedDate;
            } else {
              content = "N/A";
            }

            return (
              <div class="speaker-container">
                <Card
                  className="card-hover-effect"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 345,
                    marginTop: "2rem",
                    transition: "transform 0.3s ease-in-out", // Ensure smooth transition for the transform
                  }}
                >
                  <CardMedia
                    sx={{ height: 260 }}
                    image={speaker.photoUrl}
                    title={speaker.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {speaker.name}
                    </Typography>
                    <Typography variant="body2">
                      {speaker.description}
                    </Typography>
                    <br />
                    <Typography variant="caption">
                      <b>Conference Date: </b>
                      {content}
                    </Typography>
                  </CardContent>
                  <CardActions
                    disableSpacing
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: "1.5rem",
                      marginTop: "auto", // This ensures it sticks to the bottom
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
                          border: "1px solid black",
                        }}
                      >
                        <Typography variant="button">
                          <b>Watch conference</b>
                        </Typography>
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </div>
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
