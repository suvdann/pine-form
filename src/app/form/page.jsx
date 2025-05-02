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
  const [errors, setErrors] = useState({}); //aldaa hadgalna

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
    const newErrors = {}; // энд бүх алдааг цуглуулна
  
    if (step === 0) {
      if (!form.firstName.trim()) newErrors.firstName = "First name оруулна уу";
      if (!form.lastName.trim()) newErrors.lastName = "Last name оруулна уу";
      if (!form.userName.trim()) newErrors.userName = "User name оруулна уу";
    }
  
    if (step === 1) {
      if (!form.email.trim()) newErrors.email = "Email оруулна уу";
      if (!form.number.trim()) newErrors.number = "Number оруулна уу";
      if (!form.password.trim()) newErrors.password = "Password оруулна уу";
      if (!form.confirm.trim()) newErrors.confirm = "Password дахин оруулна уу";
    }
  
    // Хэрэв ямар нэг алдаа байгаа бол errors-д хадгалаад буцна
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    // Алдаа байхгүй бол дараагийн алхам руу шилжинэ
    setErrors({});
    setStep((prev) => prev + 1);
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
  errors={errors}
/>
    </div>
  );
};

export default FormPage;
