import { useNavigate } from "react-router-dom";
import { useGeneralContext } from "../context/Context";

const Round = () => {
  const { round, setNameTeam1, setNameTeam2 } = useGeneralContext();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/question");
  };
  const setNameOfTeam1 = (e) => {
    setNameTeam1(e.target.value);
  };
  const setNameOfTeam2 = (e) => {
    setNameTeam2(e.target.value);
  };
  return (
    <div className="background">
      <div className="round">
        <h1>Round {round}</h1>
        <div className="teams">
          <div className="numberTeam">
            <h2>Team 1</h2>
            <input type="text" onChange={setNameOfTeam1} />
          </div>
          <div className="numberTeam">
            <h2>Team 2</h2>
            <input type="text" onChange={setNameOfTeam2} />
          </div>
        </div>
        <button onClick={handleClick}>Start round {round}</button>
      </div>
    </div>
  );
};

export default Round;
