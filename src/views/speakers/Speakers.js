import BigImage from "../../assets/Hombros de gigantes.jpg";
import DKnuth from "../../assets/Donald Knuth.jpg"
import VCerf from "../../assets/sdvg.jpg"
import Kleinrock from "../../assets/5c65b8535f583ad53b404ed7ea60c98e.png"

import "./Speakers.css"

const Speakers = () => {
  return (
    <div className="Speakers">
      <h1 className="Title">Speakers</h1>
      <img src={BigImage} alt='background' className='background'></img>
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
          <img src={DKnuth} alt='Knuth' className='Speaker1'></img>
          <p>Donald Knuth</p>
        </div>

        <div class="speaker-container">
          <img src={VCerf} alt='Cerf' className='Speaker2'></img>
          <p>Vint Cerf</p>
        </div>

        <div class="speaker-container">
          <img src={Kleinrock} alt='Kleinrock' className='Speaker3'></img>
          <p>Leonard Kleinrock</p>
        </div>
      </body>



    </div>
  );
};

export default Speakers;
