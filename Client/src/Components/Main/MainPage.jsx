import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Display from "../Display/Display";
import Input from "../Input/Input";
import AllAnswers from "../Answers/answers";
const Main = () => {
  const [showDisplay, setShowDisplay] = useState(true);

  const hide = () => {
    setShowDisplay(false);
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <Header />
        {showDisplay ? <Display hideDisplay={hide} /> : <AllAnswers />}
      </div>
      <div>
        <Input hideDisplay={hide} />
      </div>
    </div>
  );
};

export default Main;
