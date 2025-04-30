"use client";

import { useState } from "react";
import { FormOne } from "./_components/Form1";
import { FormTwo } from "./_components/Form2";
import { FormThree } from "./_components/Form3";
import { Success } from "./_components/Success";

const FormPage = () => {
  //   const [text, setText] = useState("");
  //   const textHandler = (event) => {
  //     setText(event.target.value);
  //   };
  //   console.log(text);

  const components = [FormOne, FormTwo, FormThree, Success];
  const [step, setStep] = useState(0);

  const Stepper = components[step];
  const nextHandler = () => {
    setStep((prev) => prev + 1);
  };
  const backHandler = () => {
    setStep((prev) => prev - 1);
  };
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [userName, setUsername] = useState("");

  const changeHandler = (event) => {
    if (event.target.name === "firstName") {
      setFirstname(event.target.name);
    } else if (event.target.name === "lastName ") {
      setLastname(event.target.name);
    } else if (event.target.name === "userName") {
      setUsername(event.target.name);
    }
  };
  console.log(firstName, lastName, userName);
  return (
    <div className="flex w-screen h-screen justify-center items-center ">
      <Stepper
        nextHandler={nextHandler}
        backHandler={backHandler}
        changeHandler={changeHandler}
      />
    </div>
  );
};
export default FormPage;
