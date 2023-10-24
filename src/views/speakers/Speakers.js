import BigImage from "../../assets/Hombros de gigantes.jpg";
import "./Speakers.css"

const Speakers = () => {
  return (
    <div className="Speakers">
      <h1 className="Title">Speakers</h1>
      <img src={BigImage} alt='background' className='background'></img>
    </div>
  );
};

export default Speakers;
