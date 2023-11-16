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
          <p className="Bio">Creator of the TeX computer typesetting system, the related METAFONT font definition language and rendering system, and the Computer Modern family of typefaces.</p>

          <div class="center-bottom-box">
            <a href="https://youtu.be/k2r-7cLIaDQ">Watch conference</a>
          </div>

        </div>

        <div class="speaker-container">
          <img src={Kleinrock} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Leonard Kleinrock</p>
          <p className="Bio">Creator of the TeX computer typesetting system, the related METAFONT font definition language and rendering system, and the Computer Modern family of typefaces.</p>
          <div class="center-bottom-box">
            <a href="https://youtu.be/eUFBpY2qqj8">Watch conference</a>
          </div>

        </div>

        <div class="speaker-container">
          <img src={Gamal} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Taher ElGamal</p>

          <p className="Bio">Creator of the TeX computer typesetting system, the related METAFONT font definition language and rendering system, and the Computer Modern family of typefaces.</p>
          

          <div class="center-bottom-box">
            <a href="https://youtu.be/NVwm_8HAF3s">Watch conference</a>
          </div>
        </div>

        

        <div class="speaker-container">
          <img src={Metcalfe} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Robert Metcalfe</p>

          <p className="Bio">Creator of the TeX computer typesetting system, the related METAFONT font definition language and rendering system, and the Computer Modern family of typefaces.</p>


          <div class="center-bottom-box">
            <a href="https://youtu.be/J8SJqStADVY">Watch conference</a>
          </div>
        </div>

        <div class="speaker-container">
          <img src={Ullman} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Jeffrey Ullman</p>

          <p className="Bio">Creator of the TeX computer typesetting system, the related METAFONT font definition language and rendering system, and the Computer Modern family of typefaces.</p>


          <div class="center-bottom-box">
            <a href="https://youtu.be/dBkj09zdZ3s">Watch conference</a>
          </div>

          
        </div>

        <div class="speaker-container">
          <img src={Crocker} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Steve Crocker</p>

          <p className="Bio">Creator of the TeX computer typesetting system, the related METAFONT font definition language and rendering system, and the Computer Modern family of typefaces.</p>


          <div class="center-bottom-box">
            <a href="https://youtu.be/BW__Wx8diiE">Watch conference</a>
          </div>
        </div>

        <div class="speaker-container">
          <img src={Tibs} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Robert Tibshirani</p>

          <p className="Bio">Creator of the TeX computer typesetting system, the related METAFONT font definition language and rendering system, and the Computer Modern family of typefaces.</p>


          <div class="center-bottom-box">
            <a href="https://youtu.be/OCzcjrxQVZY">Watch conference</a>
          </div>
        </div>

        <div class="speaker-container">
          <img src={Lamp} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Leslie Lamport</p>

          <p className="Bio">Creator of the TeX computer typesetting system, the related METAFONT font definition language and rendering system, and the Computer Modern family of typefaces.</p>


          <div class="center-bottom-box">
            <a href="https://youtu.be/_AwBi9MzwHI">Watch conference</a>
          </div>
        </div>

        <div class="speaker-container">
          <img src={Spinolla} alt='Kleinrock' className='Speaker'></img>
          <p  className="Name">Adrian Espinola</p>

          <p className="Bio">Creator of the TeX computer typesetting system, the related METAFONT font definition language and rendering system, and the Computer Modern family of typefaces.</p>


          <div class="center-bottom-box">
            <a href="https://youtu.be/fow5h2U4ApY">Watch conference</a>
          </div>
        </div>






      </body>









    </div>
  );
};

export default Speakers;
