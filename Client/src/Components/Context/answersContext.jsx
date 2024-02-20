import React, { useContext, useState } from "react";

export const QuestionContext = React.createContext({
  Answers: {},
  makeAnswers: (data) => {},
});

export const QuestionContextProvider = ({ children }) => {
  const [Answers, setAnswers] = useState({
    "question" : []
  });

  const makeAnswers = (data) => {
    console.log(data)
    setAnswers((questions) => {
      return (questions = {
        ...questions,
        question: [...questions.question, data],
      });
    });
  };

  return (
    <QuestionContext.Provider value={{Answers, makeAnswers}}>
      {children}
    </QuestionContext.Provider>
  );
};
