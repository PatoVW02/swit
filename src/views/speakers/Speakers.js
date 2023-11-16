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
      <body className="axe">
        <div class="speaker-container">
          <img src={DKnuth} alt='Knuth' className='Speaker'></img>
          <p  className="Name">Donald Knuth</p>
          <p className="Bio">Creator of the TeX computer typesetting system, the related METAFONT font definition language and rendering system, and the Computer Modern family of typefaces.</p>

          <div class="center-bottom-box">
            <a href="https://youtube.com/live/wXHkMGsZQYw">Watch conference</a>
          </div>

        </div>

        <div class="speaker-container">
          <img src={VCerf} alt='Cerf' className='Speaker'></img>
          <p  className="Name">Vint Cerf</p>
          <p className="Bio">Widely known as one of the “Fathers of the Internet,” Cerf is the co-designer of the TCP/IP protocols and the architecture of the Internet. </p>

          <div class="center-bottom-box">
            <a href="https://youtu.be/k2r-7cLIaDQ">Watch conference</a>
          </div>

        </div>

        <div class="speaker-container">
          <img src={Kleinrock} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Leonard Kleinrock</p>
          <p className="Bio">Pioneered the mathematical theory of packet networks, the technology underpinning the Internet. For this he was honored with the Charles Stark Draper Award as one of the fathers of the Internet.</p>
          <div class="center-bottom-box">
            <a href="https://youtu.be/eUFBpY2qqj8">Watch conference</a>
          </div>

        </div>

        <div class="speaker-container">
          <img src={Gamal} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Taher ElGamal</p>

          <p className="Bio">Invented several industry and government standards in data security and digital signatures for areas including the DSS government standard for digital signatures. He is recognized in the industry as the “father” of SSL.</p>
          

          <div class="center-bottom-box">
            <a href="https://youtu.be/NVwm_8HAF3s">Watch conference</a>
          </div>
        </div>

        

        <div class="speaker-container">
          <img src={Metcalfe} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Robert Metcalfe</p>

          <p className="Bio"> Helped pioneer the Internet. In 1973, at the Xerox Palo Alto Research Center, he invented Ethernet, the local-area networking (LAN) standard — Internet plumbing — on which he shares four patents.</p>


          <div class="center-bottom-box">
            <a href="https://youtu.be/J8SJqStADVY">Watch conference</a>
          </div>
        </div>

        <div class="speaker-container">
          <img src={Ullman} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Jeffrey Ullman</p>

          <p className="Bio">Co-author of the influential textbook "Introduction to Algorithms." and "Database Systems: The Complete Book." As a Stanford University professor, Ullman has profoundly influenced algorithmic design, database theory, and computer science education.</p>


          <div class="center-bottom-box">
            <a href="https://youtu.be/dBkj09zdZ3s">Watch conference</a>
          </div>

          
        </div>

        <div class="speaker-container">
          <img src={Crocker} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Steve Crocker</p>

          <p className="Bio">He was part of the team that developed the protocols for the ARPANET and laid the foundation for today's Internet and initiated the Request for Comment (RFC) series of notes through which protocol designs are documented and shared.</p>


          <div class="center-bottom-box">
            <a href="https://youtu.be/BW__Wx8diiE">Watch conference</a>
          </div>
        </div>

        <div class="speaker-container">
          <img src={Tibs} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Robert Tibshirani</p>

          <p className="Bio">Made important contributions to the statistical analysis of complex datasets. Some of his most well-known contributions are the lasso, which uses L1 penalization in regression and related problems, generalized additive models and Significance Analysis of Microarrays (SAM). </p>


          <div class="center-bottom-box">
            <a href="https://youtu.be/OCzcjrxQVZY">Watch conference</a>
          </div>
        </div>

        <div class="speaker-container">
          <img src={Lamp} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Leslie Lamport</p>

          <p className="Bio"> Best known for creating LaTeX and developing the Paxos algorithm, Lamport's contributions have left an indelible mark on the field. As a Turing Award recipient, he continues to inspire students and professionals alike with his profound insights and innovative approaches to computer science challenges.</p>


          <div class="center-bottom-box">
            <a href="https://youtu.be/_AwBi9MzwHI">Watch conference</a>
          </div>
        </div>

        <div class="speaker-container">
          <img src={Spinolla} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Adrian Espinola</p>

          <p className="Bio">Entrepeneur and original creator of the cybersecurity group at Tec de Monterrey.</p>


          <div class="center-bottom-box">
            <a href="https://youtu.be/fow5h2U4ApY">Watch conference</a>
          </div>
        </div>






      </body>









    </div>
  );
};

export default Speakers;
