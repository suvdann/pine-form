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
  
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [userName, setUsername] = useState("");

  const [error, setError]=useState("");//aldaa hadgalna

  // const changeHandler = (event) => {
  //   if (event.target.name === "firstName") {
  //     setFirstname(event.target.value);
  //   } else if (event.target.name === "lastName") {
  //     setLastname(event.target.value);
  //   } else if (event.target.name === "userName") {
  //     setUsername(event.target.value);
  //   }
  // };
 
  // console.log(firstName, "firstname");
  // console.log(lastName, "lastname:");
  // console.log(userName, "username");


  const nextHandler=()=>{
    if (step===0){
      if(firstName===""){
        alert ("neree oruulna u")
        return;
      }else if(lastName===""){
        alert (" oruulna u")
        return;
      }else if(userName===""){
        alert ("neree oruulna u")
       
      }
    }

    setStep((prev) => prev + 1);
  };

  const backHandler = () => {
    setStep((prev) => prev - 1);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "firstName") {
      setFirstname(value);
    } else if (name === "lastName") {
      setLastname(value);
    } else if (name === "userName") {
      setUsername(value);

    }
  }
  return (
    <div className="flex w-screen h-screen justify-center items-center ">
      <Stepper
        nextHandler={nextHandler}
        backHandler={backHandler}
        changeHandler={changeHandler}
        firstName={firstName}
        lastName={lastName}
        userName={userName}
      />
    </div>
  );
};

export default FormPage;
