import { Cards } from "./Cards";
import { useContext } from "react";
import { QuestionContext } from "../Context/answersContext";
import axios from "axios";
var questions = {
  question: [],
};

const mockResponses = {
  "Explain how can I get into GDSC": `The specific resposibilities of a designer will vary greatly depending on several factors, including :
The type of designer: Graphic designers, web designers, UX/UI designers, fashion designers, industrial designers, interior designers, and many more specialized roles all exist. Each has its own unique focus and skillset.

The industry: Designers can work in diverse fields like tech, healthcare, marketing, education, manufacturing, and more.
The company size and structure: Startups, agencies, and large corporations have different design needs and approaches.

However, there are some core aspects that are generally common to most design roles:

1. Understanding the problem and user needs: This involves research, data analysis, and empathy to grasp the target audience and their challenges.2. Ideation and brainstorming: Generating creative solutions, experimenting, and iterating on ideas are crucial.3. Visual communication: Using design elements like layout, typography, color, and imagery to effectively communicate a message.4. Prototyping and testing: Creating 
1. Understanding the problem and user needs: This involves research, data analysis, and empathy to grasp the target audience and their challenges.2. Ideation and brainstorming: Generating creative solutions, experimenting, and iterating on ideas are crucial.3. Visual communication: Using design elements like layout, typography, color, and imagery to effectively communicate a message.4. Prototyping and testing: Creating 
The specific resposibilities of a designer will vary greatly depending on several factors, including :The type of designer: Graphic designers, web designers, UX/UI designers, fashion designers, industrial designers, interior designers, and many more specialized roles all exist. Each has its own unique focus and skillset.
The industry: Designers can work in diverse fields like tech, healthcare, marketing, education, manufacturing, and more.
The company size and structure: Startups, agencies, and large corporations have different design needs and approaches.
However, there are some core aspects that are generally common to most design roles:
1. Understanding the problem and user needs: This involves research, data analysis, and empathy to grasp the target audience and their challenges.2. Ideation and brainstorming: Generating creative solutions, experimenting, and iterating on ideas are crucial.3. Visual communication: Using design elements like layout, typography, color, and imagery to effectively communicate a message.4. Prototyping and testing: Creating 

1. Understanding the problem and user needs: This involves research, data analysis, and empathy to grasp the target audience and their challenges.2. Ideation and brainstorming: Generating creative solutions, experimenting, and iterating on ideas are crucial.3. Visual communication: Using design elements like layout, typography, color, and imagery to effectively communicate a message.4. Prototyping and testing: Creating `,



  "What is the role of Google within GDSC?": `The specific resposibilities of a designer will vary greatly depending on several factors, including :
The type of designer: Graphic designers, web designers, UX/UI designers, fashion designers, industrial designers, interior designers, and many more specialized roles all exist. Each has its own unique focus and skillset.

The industry: Designers can work in diverse fields like tech, healthcare, marketing, education, manufacturing, and more.
The company size and structure: Startups, agencies, and large corporations have different design needs and approaches.

However, there are some core aspects that are generally common to most design roles:`,

  "Tell me about the events that GDSC organize": `GDSC organizes various types of events throughout the academic year:

1. Technical Workshops:
- Coding sessions
- Cloud computing workshops
- Mobile development training

2. Speaker Sessions:
- Industry expert talks
- Technical deep dives
- Career guidance sessions

3. Hackathons and Projects:
- Solution Challenge
- Local hackathons
- Community projects

4. Networking Events:
- Meet and greet sessions
- Alumni interactions
- Inter-college collaborations`
};

const Display = (props) => {
  const { makeAnswers, setIsQuestion, setQuestion } = useContext(QuestionContext);
 

  const CardQuestion = (question) => {
 
    GetAns(question);
  };

  const GetAns = async (question) => {
    try {
      // const response = await axios.post(
      //   "https://jhvsq5i3ee.execute-api.us-east-1.amazonaws.com/prod/chat",  // Use full URL
      //   { question: question },
      //   {
      //     headers: {
      //      "Access-Control-Allow-Origin": "*",
      //       Authorization: "Bearer 2f74125481df4c363cce3fa358933fba",
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      await new Promise(resolve => setTimeout(resolve, 1000));

      props.hideDisplay();
      setIsQuestion(false);
      
      const newQues = {
        question: question,
        answer: mockResponses[question] || response.data[0].answer,
      };

      makeAnswers(newQues);
      questions = {
       ...questions,
      question: [...questions.question, newQues],
};
      setQuestion("");
    } catch (error) {
      console.error("Error details:", error
      //   {
        
      //   message: error.message,
      //   code: error.code,
      //   response: error.response
      // }
      );
    }
  };


  return (
    <>
     
      <div className="w-[100%] h-[100%] justify-center hidden md:flex py-10">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex flex-col justify-start gap-1">
            <div className="flex justify-center">
              <div>
                <h1 className="text-4xl w-[680px] h-[44px] pb-14 text-[#FFFFFF] font-sans font-bold">
                  What do you want to know?
                </h1>
              </div>
            </div>
          </div>

          <div className="flex gap-2 py-4">
            <Cards CardAns={CardQuestion} />
          </div>
        </div>
      </div>

      
      <div className="w-[100%] h-[100%] justify-center flex md:hidden py-10">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex flex-col justify-start gap-1 p-2 px-6 ">
            <div className="flex justify-center">
              <div>
                <h1 className="md:text-[44px] text-[23px] text-white font-[700]">
                  What do you want to know?
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 px-3 gap-2 py-4">
            <Cards CardAns={CardQuestion} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;




















