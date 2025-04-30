"use client";

import { Header } from "./header";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Button } from "./Button";
export const FormThree = ({ nextHandler, backHandler }) => {
  return (
    <motion.div>
      <div className="flex flex-col gap-8 rounded-md bg-white p-8 w-[480px] h-[655px] justify-between">
        <div className="flex flex-col ">
          <Header />

          <div className="flex flex-col gap-8 ">
            <Input label={"Date of birth"} placeholder={""} type="date" />
            <Input label={"Profile Image "} placeholder={""} type="file" />
          </div>
          <div className="flex gap-8 justify-center items-center">
            <div className="flex flex-2/3">
              <Button
                text={"Back"}
                type={"prev"}
                bgColor="border"
                clickHandler={backHandler}
              />
            </div>
            <div className=" flex flex-2/3 ">
              <Button
                text={"Continue "}
                type={"next"}
                bgColor={"bg-black"}
                clickHandler={nextHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
