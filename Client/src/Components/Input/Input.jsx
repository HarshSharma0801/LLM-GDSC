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
      <div className="w-[99vw] flex justify-center flex-col items-center mb-[50px] md:mb-[80px]">
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
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            )}
          </div>
          <p className="w-[90vw] md:w-[70vw] text-[10px] md:text-[14px] mt-[12px] max-w-[769px] text-center text-white px-3">
            Zephyr may display incorrect results regarding our club and it’s
            other details, so double check your responses with{" "}
            <a
              href="https://www.instagram.com/gdscjssaten/"
              className="text-[#444CE7]"
            >
              our team
            </a>
          </p>
        </form>
      </div>

      {/* <div className="flex md:hidden justify-center items-center py-5">
        <form onSubmit={handleSubmit}>
          <div className="md:hidden flex-[0.1] rounded-2xl md:max-w-[100%] max-w-[95%] bg-[#1E1F20] md:p-1 md:pr-5 px-3 justify-between flex items-center ">
            <input
              type="text"
              placeholder="type something .."
              className="md:flex-1 h-[68px] p-[24px] md:text-2xl text-white md:max-w-[100%] max-w-[80%] text-[16px] md:text-[1.3rem] md:p-2 outline-none bg-[#1E1F20]"
              onChange={handleChange}
              value={question}
            />
            {isQuestion ? (
              <Loader />
            ) : (
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            )}
          </div>
        </form>
      </div> */}
    </>
  );
};

export default Input;
