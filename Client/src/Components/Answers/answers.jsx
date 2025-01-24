import { QuestionContext } from "../Context/answersContext";
import { useContext, useRef } from "react";
import parse from "html-react-parser";

import profile from "../../assets/profile.svg";
const AllAnswers = () => {
  const { Answers } = useContext(QuestionContext);
  const parseAnswer = (answer) => {
    const finalAnswer = answer.replace(/\n/g, "<br/>");
    return <div dangerouslySetInnerHTML={{ __html: finalAnswer }} />;
  };

  return (
    <div className="w-full overflow-x-hidden">
    <div className="relative flex flex-col h-[calc(100vh-250px)] font-sans">
      
      <div className="flex-1  overflow-y-auto scrollbar-none ">
        <div className="max-w-[680px] mx-auto px-4 py-10">
          {Answers.question.map((elem, i) => (
            <div key={i} className="mb-6">
              
              <div className="flex justify-end mb-4 ">
                <div className="bg-[#1C1C1C] rounded-[32px] py-3 px-4 max-w-[262px]">
                  <div className="text-[#BDC1C5] text-base text-center font-sans font-normal leading-7">
                    {elem.question}
                  </div>
                </div>
              </div>

              <div className="flex gap-5 ">
                <div className="relative w-[40px] h-[40px] flex-shrink-0 flex items-center justify-center rounded-[32px] border-2 border-[#3D3F40] opacity-70">
                <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[16px] h-[16px]"
                  >
                    <rect width="14.1314" height="4.35902" rx="2.17951" transform="matrix(1 8.71296e-09 -9.82673e-09 -1 0.851562 15.1963)" fill="#DB4437"/>
                    <rect width="13.523" height="4.5614" rx="2.2807" transform="matrix(0.529424 -0.848357 -0.874959 -0.484197 3.99219 16)" fill="#4285F4"/>
                    <rect width="14.1314" height="4.35902" rx="2.17951" transform="matrix(-1 -8.71349e-09 9.82613e-09 1 15.1445 0.803711)" fill="#F4B400"/>
                    <rect width="13.523" height="4.56141" rx="2.2807" transform="matrix(-0.529448 0.848343 0.874971 0.484175 12.0078 0)" fill="#0F9D58"/>
                  </svg>
                </div>
                <div className="text-[#BDC1C5] flex-1 font-sans text-base font-normal leading-7 max-w-[620px]">
                  {elem.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default AllAnswers;
