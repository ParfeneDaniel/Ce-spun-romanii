import { useState } from "react";

const Answer = ({ answer, points }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleShowAnswerClick = () => {
    setShowAnswer(true);
  };
  return (
    <div className="answer" onClick={handleShowAnswerClick}>
      <p className={showAnswer ? "answerData" : null}>{answer}</p>
      <p className={showAnswer ? "pointsData" : null}>{points}</p>
    </div>
  );
};

export default Answer;
