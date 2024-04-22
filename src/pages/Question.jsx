import { useState } from "react";
import { useGeneralContext } from "../context/Context";
import Team from "../components/Team";
import Game from "../components/Game";
import Controller from "../components/Controller";
import BigRed from "../components/BigRed";

const Question = () => {
  const {
    consecutiveQuestions,
    showQuestion,
    setShowQuestion,
    nameTeam1,
    nameTeam2,
    showBigRed,
  } = useGeneralContext();
  const handleShowQuestion = () => {
    setShowQuestion((prev) => !prev);
  };
  return (
    <div className="background">
      <div className="question">
        <header className="questionHeader">
          <button onClick={handleShowQuestion}>
            Question {consecutiveQuestions + 1}
          </button>
        </header>
        {showBigRed && <BigRed />}
        <div className="wholeGame">
          <Team nameOfTeam={nameTeam1} id={0} />
          {showQuestion && <Game />}
          <Team nameOfTeam={nameTeam2} id={1} />
        </div>
        <Controller />
      </div>
    </div>
  );
};

export default Question;
