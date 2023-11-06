import BigImage from "../../assets/Hombros de gigantes.jpg";
import DKnuth from "../../assets/Donald Knuth.jpg";
import VCerf from "../../assets/sdvg.jpg";
import Kleinrock from "../../assets/5c65b8535f583ad53b404ed7ea60c98e.png";
import Gamal from "../../assets/ElGamal.jpg";
import Metcalfe from "../../assets/metcalfe_3968158.jpeg";
import Ullman from "../../assets/1054360.jpg";
import Crocker from "../../assets/Crocker.png";
import Tibs from "../../assets/Tibshirani.jpg";
import Lamp from "../../assets/Lamport1.jpeg";
import Spinolla from "../../assets/Spinolla.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./Speakers.css";

const Speakers = () => {
  return (
    <div className="Speakers">
      <header>
        <div className="header-container">
          <div className="image-overlay">
            <img
              className="header-image"
              src={BigImage}
              alt="Speakers Banner"
            />
          </div>
          <h1 className="header-title">Speakers</h1>
        </div>
      </header>

      <br />
      <br />

      <div>
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
        >
          Individuos pioneros en las ciencias computacionales y
          líderes cuyas contribuciones, han formado el mundo
          actual y la era digital en la que vivimos.
        </Typography>

        <br />

        <div className="axe">
          <Card sx={{ maxWidth: 345 }} style={{marginTop: '2rem'}}>
            <CardMedia
              sx={{ height: 260 }}
              image={DKnuth}
              title="Donald Knuth"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Donald Knuth
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Creator of the TeX computer typesetting system, the related
                METAFONT font definition language and rendering system, and the
                Computer Modern family of typefaces.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{marginLeft: '5.5vw', paddingBottom: '1.5rem'}}>
              <Button variant="contained" size="small" style={{ backgroundColor: "#303033" }}>Watch conference</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} style={{marginTop: '2rem'}}>
            <CardMedia sx={{ height: 260 }} image={VCerf} title="Vint Cerf" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Vint Cerf
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Creator of the TeX computer typesetting system, the related
                METAFONT font definition language and rendering system, and the
                Computer Modern family of typefaces.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{marginLeft: '5.5vw', paddingBottom: '1.5rem'}}>
              <Button variant="contained" size="small" style={{ backgroundColor: "#303033" }}>Watch conference</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} style={{marginTop: '2rem'}}>
            <CardMedia
              sx={{ height: 260 }}
              image={Kleinrock}
              title="Kleinrock"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Leonard Kleinrock
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Creator of the TeX computer typesetting system, the related
                METAFONT font definition language and rendering system, and the
                Computer Modern family of typefaces.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{marginLeft: '5.5vw', paddingBottom: '1.5rem'}}>
              <Button variant="contained" size="small" style={{ backgroundColor: "#303033" }}>Watch conference</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} style={{marginTop: '2rem'}}>
            <CardMedia sx={{ height: 260 }} image={Gamal} title="Gamal" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gamal
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Creator of the TeX computer typesetting system, the related
                METAFONT font definition language and rendering system, and the
                Computer Modern family of typefaces.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{marginLeft: '5.5vw', paddingBottom: '1.5rem'}}>
              <Button variant="contained" size="small" style={{ backgroundColor: "#303033" }}>Watch conference</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} style={{marginTop: '2rem'}}>
            <CardMedia sx={{ height: 260 }} image={Metcalfe} title="Metcalfe" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Metcalfe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Creator of the TeX computer typesetting system, the related
                METAFONT font definition language and rendering system, and the
                Computer Modern family of typefaces.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{marginLeft: '5.5vw', paddingBottom: '1.5rem'}}>
              <Button variant="contained" size="small" style={{ backgroundColor: "#303033" }}>Watch conference</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} style={{marginTop: '2rem'}}>
            <CardMedia sx={{ height: 260 }} image={Ullman} title="Ullman" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ullman
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Creator of the TeX computer typesetting system, the related
                METAFONT font definition language and rendering system, and the
                Computer Modern family of typefaces.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{marginLeft: '5.5vw', paddingBottom: '1.5rem'}}>
              <Button variant="contained" size="small" style={{ backgroundColor: "#303033" }}>Watch conference</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} style={{marginTop: '2rem'}}>
            <CardMedia sx={{ height: 260 }} image={Crocker} title="Crocker" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Crocker
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Creator of the TeX computer typesetting system, the related
                METAFONT font definition language and rendering system, and the
                Computer Modern family of typefaces.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{marginLeft: '5.5vw', paddingBottom: '1.5rem'}}>
              <Button variant="contained" size="small" style={{ backgroundColor: "#303033" }}>Watch conference</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} style={{marginTop: '2rem'}}>
            <CardMedia
              sx={{ height: 260 }}
              image={Tibs}
              title="Robert Tibshirani"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Robert Tibshirani
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Creator of the TeX computer typesetting system, the related
                METAFONT font definition language and rendering system, and the
                Computer Modern family of typefaces.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{marginLeft: '5.5vw', paddingBottom: '1.5rem'}}>
              <Button variant="contained" size="small" style={{ backgroundColor: "#303033" }}>Watch conference</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} style={{marginTop: '2rem'}}>
            <CardMedia
              sx={{ height: 260 }}
              image={Lamp}
              title="Leslie Lamport"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Leslie Lamport
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Creator of the TeX computer typesetting system, the related
                METAFONT font definition language and rendering system, and the
                Computer Modern family of typefaces.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{marginLeft: '5.5vw', paddingBottom: '1.5rem'}}>
              <Button variant="contained" size="small" style={{ backgroundColor: "#303033" }}>Watch conference</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} style={{marginTop: '2rem'}}>
            <CardMedia
              sx={{ height: 260 }}
              image={Spinolla}
              title="Adrian Espinola"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Adrian Espinola
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Creator of the TeX computer typesetting system, the related
                METAFONT font definition language and rendering system, and the
                Computer Modern family of typefaces.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{marginLeft: '5.5vw', paddingBottom: '1.5rem'}}>
              <Button variant="contained" size="small" style={{ backgroundColor: "#303033" }}>Watch conference</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
