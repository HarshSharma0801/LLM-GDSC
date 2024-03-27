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
        'https://jhvsq5i3ee.execute-api.us-east-1.amazonaws.com/prod/chat',
        { question: question },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer 2f74125481df4c363cce3fa358933fba',
            'Content-Type': 'application/json'
          }
        }
      );
      
      props.hideDisplay();
      setIsQuestion(false);
      setData(response.data);
      
      const newQues = {
        question: question,
        answer: response.data[0].answer
      };
      
      makeAnswers(newQues);
      
      questions = {
        ...questions,
        question: [...questions.question, newQues]
      };
      
      setQuestion('');
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleSubmit = (event) => {
    setIsQuestion(true);
    event.preventDefault();
    console.log("hkk")
    GetAns();
  };

  return (
    <>
      <div className="hidden  w-screen md:flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="w-[840px] rounded-[158px] bg-[#1E1F20] md:p-1 md:pr-5 justify-start md:justify-between flex items-center ">
            <input
              type="text"
              placeholder="Ask your questions regarding gdsc here..."
              className="md:flex-1  md:text-[16px] text-white p-[10px] md:max-w-[100%] max-w-[80%] text-[20px]  md:p-2 outline-none rounded-[158px] bg-[#1E1F20]"
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
      </div>

      <div className="flex md:hidden justify-center items-center py-5">
        <form onSubmit={handleSubmit}>
          <div className="md:hidden flex-[0.1] rounded-2xl md:max-w-[100%] max-w-[95%] bg-[#1E1F20] md:p-1 md:pr-5 px-3 justify-between flex items-center ">
            <input
              type="text"
              placeholder="type something .."
              className="md:flex-1  md:text-2xl  text-white p-[10px] md:max-w-[100%] max-w-[80%] text-[16px] md:text-[1.3rem] md:p-2 outline-none bg-[#1E1F20]"
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
      </div>
    </>
  );
};

export default Input;
