import BigImage from "../../assets/Hombros de gigantes.jpg";
import DKnuth from "../../assets/Donald Knuth.jpg"
import VCerf from "../../assets/sdvg.jpg"
import Kleinrock from "../../assets/5c65b8535f583ad53b404ed7ea60c98e.png"
import Gamal from "../../assets/ElGamal.jpg"
import Metcalfe from "../../assets/metcalfe_3968158.jpeg"
import Ullman from "../../assets/1054360.jpg"
import Crocker from "../../assets/Crocker.png"
import Tibs from "../../assets/Tibshirani.jpg"
import Lamp from "../../assets/Lamport1.jpeg"
import Spinolla from "../../assets/Spinolla.png"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

import "./Speakers.css"

const Speakers = () => {
  return (
    <div className="Speakers">
      <h1 className="Title">Speakers</h1>
      <img src={BigImage} alt='background' className='BigPic'></img>
      <p>

      </p>

      <h2 className="Descripcion">
        Aquí encontramos individuos pioneros en las ciencias computacionales y líderes cuyas
        contribuciones colectivamente, han formado el mundo actual y la era digital en la que vivimos.
      </h2>
      <p>

      </p>

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



      <body className="axe">
        <div class="speaker-container">
          <Card sx={{ maxWidth: 345}} style={{ marginTop: '2rem' }}>
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
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '1.5rem' }}>
              <Link to="https://youtube.com/live/wXHkMGsZQYw">
                <Button
      variant="contained"
      size="large"
      style={{
        backgroundColor: "white",
        borderRadius: 100,
        color: "black",
        fontWeight: 600,
        border: '1px solid black',  // Add this line for the black border
      }}
    >
      Watch conference
    </Button>
              </Link>
            </CardActions>

          </Card>



        </div>

        <div class="speaker-container">
          <Card sx={{ maxWidth: 345 }} style={{ marginTop: '2rem' }}>
            <CardMedia
              sx={{ height: 260 }}
              image={VCerf}
              title="Vint Cerf"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Vint Cerf
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Widely known as one of the “Fathers of the Internet,” Cerf is the co-designer of the TCP/IP protocols and the architecture of the Internet.
              </Typography>

            </CardContent>
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '1.5rem' }}>
         
              <Link to="https://youtu.be/k2r-7cLIaDQ">
                <Button
      variant="contained"
      size="large"
      style={{
        backgroundColor: "white",
        borderRadius: 100,
        color: "black",
        fontWeight: 600,
        border: '1px solid black',  // Add this line for the black border
      }}
    >
      Watch conference
    </Button>
              </Link>
            </CardActions>


          </Card>

          

        </div>

        <div class="speaker-container">
          <Card sx={{ maxWidth: 345 }} style={{ marginTop: '2rem' }}>
            <CardMedia
              sx={{ height: 260 }}
              image={Kleinrock}
              title="Leonard Kleinrock"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Leonard Kleinrock
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pioneered the mathematical theory of packet networks, the technology underpinning the Internet. For this he was honored with the Charles Stark Draper Award as one of the fathers of the Internet.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '1.5rem' }}>
  <Link to="https://youtu.be/eUFBpY2qqj8">
    <Button
      variant="contained"
      size="large"
      style={{
        backgroundColor: "white",
        borderRadius: 100,
        color: "black",
        fontWeight: 600,
        border: '1px solid black',  // Add this line for the black border
      }}
    >
      Watch conference
    </Button>
  </Link>
</CardActions>

          </Card>

         

        </div>

        <div class="speaker-container">
          <Card sx={{ maxWidth: 345 }} style={{ marginTop: '2rem' }}>
            <CardMedia
              sx={{ height: 260 }}
              image={Gamal}
              title="Taher ElGamal"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Taher ElGamal
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Invented several industry and government standards in data security and digital signatures for areas including the DSS government standard for digital signatures. He is recognized in the industry as the “father” of SSL.              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '1.5rem' }}>
         
              <Link to="https://youtu.be/NVwm_8HAF3s">
                <Button
      variant="contained"
      size="large"
      style={{
        backgroundColor: "white",
        borderRadius: 100,
        color: "black",
        fontWeight: 600,
        border: '1px solid black',  // Add this line for the black border
      }}
    >
      Watch conference
    </Button>
              </Link>
            </CardActions>
            

          </Card>


        
        </div>



        <div class="speaker-container">
          <Card sx={{ maxWidth: 345 }} style={{ marginTop: '2rem' }}>
            <CardMedia
              sx={{ height: 260 }}
              image={Metcalfe}
              title="Robert Metcalfe"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Robert Metcalfe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Helped pioneer the Internet. In 1973, at the Xerox Palo Alto Research Center, he invented Ethernet, the local-area networking (LAN) standard — Internet plumbing — on which he shares four patents.              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '1.5rem' }}>
         
              <Link to="https://youtu.be/J8SJqStADVY">
                <Button
      variant="contained"
      size="large"
      style={{
        backgroundColor: "white",
        borderRadius: 100,
        color: "black",
        fontWeight: 600,
        border: '1px solid black',  // Add this line for the black border
      }}
    >
      Watch conference
    </Button>
              </Link>
            </CardActions>
            

          </Card>


        
        </div>

        <div class="speaker-container">
          <Card sx={{ maxWidth: 345 }} style={{ marginTop: '2rem' }}>
            <CardMedia
              sx={{ height: 260 }}
              image={Ullman}
              title="Jeffrey Ullman"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Jeffrey Ullman
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Co-author of the influential textbook "Introduction to Algorithms." and "Database Systems: The Complete Book." As a Stanford University professor, Ullman has profoundly influenced algorithmic design, database theory, and computer science education.              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '1.5rem' }}>
         
              <Link to="https://youtu.be/dBkj09zdZ3s">
                <Button
      variant="contained"
      size="large"
      style={{
        backgroundColor: "white",
        borderRadius: 100,
        color: "black",
        fontWeight: 600,
        border: '1px solid black',  // Add this line for the black border
      }}
    >
      Watch conference
    </Button>
              </Link>
            </CardActions>

          </Card>


      


        </div>

        <div class="speaker-container">
          <Card sx={{ maxWidth: 345 }} style={{ marginTop: '2rem' }}>
            <CardMedia
              sx={{ height: 260 }}
              image={Crocker}
              title="Steve Crocker"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Steve Crocker
              </Typography>
              <Typography variant="body2" color="text.secondary">
                He was part of the team that developed the protocols for the ARPANET and laid the foundation for today's Internet and initiated the Request for Comment (RFC) series of notes through which protocol designs are documented and shared.              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '1.5rem' }}>
         
              <Link to="https://youtu.be/BW__Wx8diiE">
                <Button
      variant="contained"
      size="large"
      style={{
        backgroundColor: "white",
        borderRadius: 100,
        color: "black",
        fontWeight: 600,
        border: '1px solid black',  // Add this line for the black border
      }}
    >
      Watch conference
    </Button>
              </Link>
            </CardActions>

          </Card>


          
        </div>

        <div class="speaker-container">
          <Card sx={{ maxWidth: 345 }} style={{ marginTop: '2rem' }}>
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
                Made important contributions to the statistical analysis of complex datasets. Some of his most well-known contributions are the lasso, which uses L1 penalization in regression and related problems, generalized additive models and Significance Analysis of Microarrays (SAM).              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '1.5rem' }}>
         
              <Link to="https://youtu.be/OCzcjrxQVZY">
                <Button
      variant="contained"
      size="large"
      style={{
        backgroundColor: "white",
        borderRadius: 100,
        color: "black",
        fontWeight: 600,
        border: '1px solid black',  // Add this line for the black border
      }}
    >
      Watch conference
    </Button>
              </Link>
            </CardActions>

          </Card>


          
        </div>

        <div class="speaker-container">
          <Card sx={{ maxWidth: 345 }} style={{ marginTop: '2rem' }}>
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
                Best known for creating LaTeX and developing the Paxos algorithm, Lamport's contributions have left an indelible mark on the field. As a Turing Award recipient, he continues to inspire students and professionals alike with his profound insights and innovative approaches to computer science challenges.              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '1.5rem' }}>
         
              <Link to="https://youtu.be/_AwBi9MzwHI">
                <Button
      variant="contained"
      size="large"
      style={{
        backgroundColor: "white",
        borderRadius: 100,
        color: "black",
        fontWeight: 600,
        border: '1px solid black',  // Add this line for the black border
      }}
    >
      Watch conference
    </Button>
              </Link>
            </CardActions>

          </Card>


          
        </div>

        <div class="speaker-container">
          <Card sx={{ maxWidth: 345 }} style={{ marginTop: '2rem' }}>
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
                Entrepeneur and original creator of the cybersecurity group at Tec de Monterrey.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '1.5rem' }}>
         
              <Link to="https://youtu.be/fow5h2U4ApY">
                <Button
      variant="contained"
      size="large"
      style={{
        backgroundColor: "white",
        borderRadius: 100,
        color: "black",
        fontWeight: 600,
        border: '1px solid black',  // Add this line for the black border
      }}
    >
      Watch conference
    </Button>
              </Link>
            </CardActions>

          </Card>


          
        </div>






      </body>









    </div>
  );
};

export default Speakers;
