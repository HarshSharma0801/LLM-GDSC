import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Display from "../Display/Display";
import Input from "../Input/Input";
import AllAnswers from "../Answers/answers";
const Main = () => {
  const [showDisplay, setShowDisplay] = useState(true)

 const hide = ()=>{
  setShowDisplay(false)
 }

  return (
    <>
    <Header/>
    {showDisplay ? <Display hideDisplay={hide}/> : <AllAnswers/>}
    <Input hideDisplay={hide}/>
    </>
  );
};

export default Main;
