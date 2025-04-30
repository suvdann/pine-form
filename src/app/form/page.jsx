"use client";

import { useState } from "react";
import { FormOne } from "./_components/Form1";
import { FormTwo } from "./_components/Form2";
import { FormThree } from "./_components/Form3";
import { Success } from "./_components/Success";

const FormPage=()=>{
    const components=[FormOne, FormTwo, FormThree, Success];
    const [step, setStep]=useState(0);
     
    const Stepper =components[step]
    const nextHandler = ()=>{
         setStep(prev=>prev+1)
    }
    const backHandler=()=>{
        setStep(prev=>prev-1)
    }
    return (<div className="flex w-screen h-screen justify-center items-center ">

<Stepper nextHandler={nextHandler} backHandler={backHandler}/>


    </div>
    )
}
export default FormPage