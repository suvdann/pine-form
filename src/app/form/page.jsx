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

    birth: "",
    image: "",
  });
  console.log(form);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const passwordRegex=/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#;
  const numberRegex = /^\+?\d{8}$/;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const nextHandler = () => {
    const newErrors = {}; // end bvh aldaag tsugluulna

    if (step === 0) {
      if (!form.firstName.trim()) newErrors.firstName = "First name оруулна уу";
      if (!form.lastName.trim()) newErrors.lastName = "Last name оруулна уу";
      if (!form.userName.trim()) newErrors.userName = "User name оруулна уу";
    }

    if (step === 1) {
      if (!form.email.trim()) {
        newErrors.email = "Email оруулна уу";
      } else if (!emailRegex.test(form.email)) {
        newErrors.email = "Зөв email оруулна уу! ";
      }

      if (!form.number.trim()) {
        newErrors.number = "Number оруулна уу";
      } else if (!numberRegex.test(form.number)) {
        newErrors.number = "Зөв утасны дугаар оруулна уу";
      }

      if (!form.password.trim()) {
        newErrors.password = "Password оруулна уу";
      } else if (form.password.length < 6) {
        newErrors.password = "6 оронтой тоо оруулна уу";
      }
      if (!form.confirm.trim()) {
        newErrors.confirm = "Password дахин оруулна уу";
      } else if (form.confirm !== form.password) {
        newErrors.confirm = "Password дахин оруулна уу";
      }
    }

    if (step === 2) {
      if (form.birth.trim() === "")
        newErrors.birth = "төрсөн өдөрөө оруулна уу";
      if (!form.image.trim()) newErrors.image = "профайл зурагаа орууулна уу";
    }

    // error baiwal hadgalaad butsn
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep((prev) => prev + 1);
  };

  const backHandler = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center ">
      {/* <P>{JSON.stringify(form)}</P> */}
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
