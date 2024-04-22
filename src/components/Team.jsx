import image from "../assets/Red_X.svg.png";
import { useGeneralContext } from "../context/Context";

const Team = ({ nameOfTeam, id }) => {
  const { numberOfRed } = useGeneralContext();
  const numberOfRedImages = new Array(numberOfRed[id]).fill(0);
  return (
    <div className="team">
      <header className="teamHeader">
        <h2>Team {id + 1}:</h2>
        <p>{nameOfTeam}</p>
      </header>
      <div className="images">
        {numberOfRedImages.map((_, index)=> (
          <img src={image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Team;
