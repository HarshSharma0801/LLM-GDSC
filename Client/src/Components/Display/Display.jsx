import { Cards } from "./Cards";
import { useContext } from "react";
import { QuestionContext } from "../Context/answersContext";
import axios from "axios";
var questions = {
  question: [],
};

const Display = (props) => {
  const { makeAnswers, setIsQuestion, setQuestion } =
    useContext(QuestionContext);

  const CardQuestion = (question) => {
    GetAns(question);
  };
  const GetAns = async (question) => {
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
      console.log(response.data);
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

  return (
    <>
      <div className="w-[100%] h-[100%] justify-center hidden md:flex py-10">
        <div className="justify-center  flex flex-col text-center">
          <div className="flex flex-col justify-start gap-1">
            <div className="flex justify-start">
              <div>
                <h1 className="md:text-[44px]  text-transparent font-[700] bg-clip-text bg-gradient-to-r from-[#A071C4] via-[#CB6885] to-[#D76471]">
                  Hello ,
                </h1>
              </div>
            </div>
            <div className="flex justify-start">
              <div>
                <h1 className="md:text-[44px] text-[#454746] font-[700]">
                  Let’s help you with GDSC
                </h1>
              </div>
            </div>
          </div>

          <div className="flex  gap-2 py-4">
            <Cards CardAns={CardQuestion} />
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[100%] justify-center flex  md:hidden py-10">
        <div className="justify-center  flex flex-col text-center">
          <div className="flex flex-col justify-start gap-1 p-2 px-6">
            <div className="flex justify-start">
              <div>
                <h1 className="md:text-[44px] text-[23px] text-transparent font-[700] bg-clip-text bg-gradient-to-r from-[#A071C4] via-[#CB6885] to-[#D76471]">
                  Hello ,
                </h1>
              </div>
            </div>
            <div className="flex justify-start">
              <div>
                <h1 className="md:text-[44px] text-[23px] text-[#454746] font-[700]">
                  Let’s help you with GDSC
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 px-3 gap-2 py-4">
            <Cards CardAns={CardQuestion} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
