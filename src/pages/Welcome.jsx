import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/round");
  };
  return (
    <div className="background">
      <div className="welcome">
        <h1>Welcome to Ce spun romanii</h1>
        <button onClick={handleClick}>Start the Game</button>
      </div>
    </div>
  );
};

export default Welcome;
