import React, { useState, useContext } from "react";
import { QuestionContext } from "../Context/answersContext";
import axios from "axios";
import Loader from "../LoaderComp";
var questions = {
  question: [],
};

const Input = (props) => {
  const { makeAnswers, question, setQuestion, isQuestion, setIsQuestion } =
    useContext(QuestionContext);
  const [data, setData] = useState(null);
  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const GetAns = async () => {
    try {
      const response = await axios.post(
        "https://jhvsq5i3ee.execute-api.us-east-1.amazonaws.com/prod/chat",
        { question: question },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer 2f74125481df4c363cce3fa358933fba",
            "Content-Type": "application/json",
          },
        }
      );

      props.hideDisplay();
      setIsQuestion(false);
      setData(response.data);

      const newQues = {
        question: question,
        answer: response.data[0].answer,
      };

      makeAnswers(newQues);

      questions = {
        ...questions,
        question: [...questions.question, newQues],
      };

      setQuestion("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (event) => {
    setIsQuestion(true);
    event.preventDefault();
    console.log("hkk");
    GetAns();
  };

  return (
    <>
      <div className="w-[98vw] flex justify-center flex-col items-center mb-[50px] md:mb-[80px] fixed bottom-0 z-10">
        <form onSubmit={handleSubmit}>
          <div className="w-[90vw] md:w-[70vw] max-w-[769px] rounded-[158px] bg-[#1E1F20] pr-5 justify-start md:justify-between flex items-center ">
            <input
              type="text"
              placeholder="Ask your questions regarding gdsc here..."
              className="flex-1 h-[68px] p-[24px] text-[16px] text-white md:text-[20px] outline-none rounded-[158px] bg-[#1E1F20]"
              onChange={handleChange}
              value={question}
            />
            {isQuestion ? (
              <Loader />
            ) : (
              <button type="submit" 
              className={`relative flex items-center justify-center ${question.trim().length > 0 ? 'opacity-100 cursor-pointer' : 'opacity-20 '}`}
              >
                <div className="w-[44px] h-[44px] relative">
                  <div className="absolute inset-0 rounded-full bg-white"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3D87FF] to-[#D0C3FF] opacity-0.7"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.08594 12.6L11.9926 5.69336L18.8992 12.6" stroke="#191A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 19.5066V5.69336" stroke="#191A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                
              </button>
            )}
          </div>
          <p className="w-[90vw] md:w-[70vw] text-[10px] md:text-[14px] mt-[12px] max-w-[769px] text-center text-[#BDC1C5] px-3">
          Zephyr may show incorrect details: confirm with{" "}
            <a
              href="https://www.instagram.com/gdscjssaten/"
              className="text-[#444CE7]"
            >
              our team
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Input;
