import { createContext, useContext, useState } from "react";

export const GeneralContext = createContext();

export const useGeneralContext = () => {
  return useContext(GeneralContext);
};

export const GeneralContextProvider = ({ children }) => {
  const [round, setRound] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [nameTeam1, setNameTeam1] = useState("");
  const [nameTeam2, setNameTeam2] = useState("");
  const [consecutiveQuestions, setConsecutiveQuestions] = useState(0);
  const [numberOfRed, setNumberOfRed] = useState([0, 0]);
  const [showBigRed, setShowBigRed] = useState(false);
  const value = {
    round,
    setRound,
    currentQuestion,
    setCurrentQuestion,
    showQuestion,
    setShowQuestion,
    nameTeam1,
    setNameTeam1,
    nameTeam2,
    setNameTeam2,
    consecutiveQuestions,
    setConsecutiveQuestions,
    numberOfRed,
    setNumberOfRed,
    showBigRed,
    setShowBigRed,
  };
  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
};
