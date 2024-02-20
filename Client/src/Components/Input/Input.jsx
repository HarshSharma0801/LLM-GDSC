import React, { useState , useContext } from 'react';
import axios from 'axios'
import { QuestionContext } from '../Context/answersContext';
import Loader from '../LoaderComp';
var questions = {
  "question" : []
}



const Input = (props) => {
const {makeAnswers} = useContext(QuestionContext)
  const [data, setData] = useState(null);
  const [question, setQuestion] = useState('');
  const [isQuestion , setIsQuestion ] = useState(false)
  const handleChange = (event) => {
    console.log("jij")
    setQuestion(event.target.value);
  };



  const handleSubmit = (event) => {
    setIsQuestion(true)
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://ec2-44-201-124-80.compute-1.amazonaws.com:8000/chat');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('Authorization', 'Bearer 2f74125481df4c363cce3fa358933fba');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        props.hideDisplay()
        setIsQuestion(false)
        setData(JSON.parse(xhr.responseText));
        var newQues = {
          "question": question,
          "answer" : JSON.parse(xhr.responseText)[0].answer
        }
        makeAnswers(newQues)
        questions = {
          ...questions,
            "question" : [
              ...questions.question,
            newQues
            ]
        }
      }
    };
    
    xhr.send(JSON.stringify({"question": question}));
  }

  return (
    <>
     <div className="w-screen flex justify-center items-center">
    <form onSubmit={handleSubmit}>
     <div className="w-[840px] rounded-[158px] bg-[#1E1F20] md:p-1 md:pr-5 justify-start md:justify-between flex items-center ">
        <input
          type="text"
          placeholder="Ask your questions regarding gdsc here..."
          className="md:flex-1  md:text-[16px] text-white p-[10px] md:max-w-[100%] max-w-[80%] text-[20px]  md:p-2 outline-none rounded-[158px] bg-[#1E1F20]"
          onChange={handleChange}
          value={question}
        />
       {isQuestion ? <Loader/> :  <button 
          type="submit"
        >
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
        </button>}
      </div>
      </form>
     </div>

  
     
     
    </>
  );
};

export default Input;
