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
  // const [error, setError] = useState(""); //aldaa hadgalna

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    number: "",
    password: "",
    confirm: "",
  });
  console.log(form);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const nextHandler = () => {
    const errorMsg = {};

    if (step === 0 && form.firstName === "") {
      errorMsg.firstName("firstname  оруулна уу");
    } else if (step === 0 && form.lastName === "") {
      alert("lastname оруулна уу");
    } else if (step === 0 && form.userName === "") {
      alert("username оруулна уу");
    } else if (step === 1 && form.email === "") {
      alert("email оруулна уу");
    } else if (step === 1 && form.number === "") {
      alert("number oruulna uu");
    } else if (step === 1 && form.password === "") {
      alert("password oruulna uu");
    } else if (step === 1 && form.confirm === "") {
      alert(" password oo dawtan oruulna uu");
    }
    if (errorMsg.length === 0) setStep((prev) => prev + 1);
  };
  const backHandler = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center ">
      <Stepper
        nextHandler={nextHandler}
        backHandler={backHandler}
        changeHandler={changeHandler}
        form={form}
      />
    </div>
  );
};

export default FormPage;
