import { useGeneralContext } from "../context/Context";
import { data } from "../data";
import Answer from "./Answer";

const Game = () => {
  const { currentQuestion } = useGeneralContext();
  return (
    <div className="game">
      <h1 className="displayQuestion">{data[currentQuestion].question}</h1>
      <div className="answers">
        {data[currentQuestion].answers.map((answer, index) => (
          <Answer answer={answer.answer} points={answer.points} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Game;
