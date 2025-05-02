"use client";

import { Header } from "./header";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Button } from "./Button";
export const FormTwo = ({
  nextHandler,
  backHandler,
  changeHandler,
  errors,
  form,
}) => {
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
            value={form.email}
            changeHandler={changeHandler}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <Input
            name={"number"}
            label={"Phone number "}
            placeholder={"Your phone number"}
            type="tel"
            value={form.number}
            changeHandler={changeHandler}
          />
          {errors.number && (
            <p className="text-red-500 text-sm">{errors.number}</p>
          )}

          <Input
            name={"password"}
            label={"Password "}
            placeholder={"Your password"}
            type="password"
            value={form.password}
            changeHandler={changeHandler}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <Input
            name={"confirm"}
            label={"Confirm Password "}
            placeholder={"Confirm password"}
            type="password"
            changeHandler={changeHandler}
            value={form.confirm}
          />
          {errors.confirm && (
            <p className="text-red-500 text-sm">{errors.confirm}</p>
          )}
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
