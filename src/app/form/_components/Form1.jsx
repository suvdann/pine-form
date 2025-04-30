"use client";

import { Header } from "./header";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Button } from "./Button";

// import { useState } from "react";
export const FormOne = ({ nextHandler, changeHandler }) => {
  return (
    <div className=" flex flex-col gap-6 rounded-md bg-white p-8 w-[480px] h-[655px]">
      <motion.div>
        <Header />
        <div className="flex flex-col gap-2  ">
          <Input
            name={"firstName"}
            label={"First Name"}
            placeholder={"Your first name"}
            type="text"
            changeHandler={changeHandler}
          />
          <Input
            name={"lastName "}
            label={"Last name "}
            placeholder={"Your last name"}
            type="text"
            changeHandler={changeHandler}
          />
          <Input
            name={"userName"}
            label={"User name "}
            placeholder={"Your username"}
            type="text"
            changeHandler={changeHandler}
          />

          <Button
            text={"Continue "}
            type={"next"}
            bgColor={"bg-black"}
            clickHandler={nextHandler}
            className="w-[416px]"
          />
        </div>
      </motion.div>
    </div>
  );
};
