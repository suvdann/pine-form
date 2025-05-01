"use client";

import { Header } from "./header";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Button } from "./Button";
export const FormTwo = ({ nextHandler, backHandler }) => {
  return (
    <div className="flex flex-col gap-8 rounded-md bg-white p-8 w-[480px] h-[655px]">
      <motion.div>
        <Header />
        <div className="flex flex-col gap-1 ">
          <Input
            name={"email"}
            label={"Email"}
            placeholder={"Your email"}
            type="text"
          />

          <Input
            name={"number"}
            label={"Phone number "}
            placeholder={"Your phone number"}
            type="number"
          />

          <Input
            name={"password"}
            label={"Password "}
            placeholder={"Your password"}
            type="password"
          />
          <Input
            name={"confrim"}
            label={"Confirm Password "}
            placeholder={"Confirm password"}
            type="password"
          />
        </div>

        <div className="flex gap-10 justify-center items-center">
          <div className="flex flex-2/3">
            <Button
              text={"Back"}
              type={"prev"}
              bgColor="border"
              clickHandler={backHandler}
            />
          </div>
          <div className=" flex items-center flex-2/3 ">
            <Button
              text={"Continue "}
              type={"next"}
              bgColor={"bg-black"}
              clickHandler={nextHandler}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
