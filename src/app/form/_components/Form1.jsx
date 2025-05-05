"use client";

import { Header } from "./header";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Button } from "./Button";

export const FormOne = ({ nextHandler, changeHandler, errors, form }) => {
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
            value={form.firstName}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
          <Input
            name={"lastName"}
            label={"Last name"}
            placeholder={"Your last name"}
            type="text"
            changeHandler={changeHandler}
            value={form.lastName}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
          <Input
            name={"userName"}
            label={"User name"}
            placeholder={"Your username"}
            type="text"
            changeHandler={changeHandler}
            value={form.userName}
          />
          {errors.userName && (
            <p className="text-red-500 text-sm">{errors.userName}</p>
          )}
          <div className="bg-[red] ">
            <Button
              text={"Continue "}
              type={"next"}
              bgColor={"bg-black"}
              clickHandler={nextHandler}
              className="w-[416px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
