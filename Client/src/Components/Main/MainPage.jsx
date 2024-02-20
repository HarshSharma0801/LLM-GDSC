import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Display from "../Display/Display";
import Input from "../Input/Input";
const Main = () => {
  const [showDisplay, setShowDisplay] = React.useState(false)

  const hideDisplay = () => {
    setShowDisplay(true);
  }

  return (
    <>
    <Header/>
    { showDisplay ? null : <Display />}
    <Input setShowDisplay={setShowDisplay}/>
    </>
  );
};

export default Main;
