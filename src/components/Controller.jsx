import { useNavigate } from "react-router-dom";
import { useGeneralContext } from "../context/Context";

const Controller = () => {
  const {
    setCurrentQuestion,
    setShowQuestion,
    consecutiveQuestions,
    setConsecutiveQuestions,
    setRound,
    numberOfRed,
    setNumberOfRed,
    setShowBigRed,
    setNameTeam1,
    setNameTeam2,
  } = useGeneralContext();
  const navigate = useNavigate();
  const handleNextQuestionClick = () => {
    setCurrentQuestion((prev) => prev + 1);
    setShowQuestion(false);
    setNumberOfRed([0, 0]);
    if (consecutiveQuestions < 2) {
      setConsecutiveQuestions((prev) => prev + 1);
    } else {
      setConsecutiveQuestions(0);
      setRound((prev) => prev + 1);
      setNameTeam1("");
      setNameTeam2("");
      navigate("/round");
    }
  };
  const handleNumberOfRedOfTeam1Click = () => {
    var newArray = [...numberOfRed];
    newArray[0]++;
    setNumberOfRed(newArray);
  };
  const handleNumberOfRedOfTeam2Click = () => {
    var newArray = [...numberOfRed];
    newArray[1]++;
    setNumberOfRed(newArray);
  };
  const handleBigRedClick = () => {
    setShowBigRed((prev) => !prev);
  };
  return (
    <div className="controller">
      <button onClick={handleNumberOfRedOfTeam1Click}>Team1</button>
      <button onClick={handleBigRedClick}>Red</button>
      <button onClick={handleNextQuestionClick}>Next Question</button>
      <button onClick={handleNumberOfRedOfTeam2Click}>Team2</button>
    </div>
  );
};

export default Controller;
