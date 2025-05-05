"use client";

import { Header } from "./header";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";
import { Image } from "lucide-react";

export const FormThree = ({
  nextHandler,
  backHandler,
  errors,
  form,
  changeHandler,
}) => {
  const [files, setFiles] = useState([]);
  const fileHandler = (e) => {
    const files = e.target.files;
    setFiles(files);
  };

  // const deleteHandler = () => {
  //   setFiles((prev) => prev.filter((el) => !el.));
  // };

  return (
    <motion.div>
      <div className="flex flex-col gap-8 rounded-md bg-[white] p-8 w-[480px] h-[655px] justify-between">
        <div className="flex flex-col ">
          <Header />

          <div className="flex flex-col gap-8 ">
            <div>
              <Input
                name={"birth"}
                label={"Date of birth"}
                placeholder={""}
                type="date"
                value={form.birth}
                changeHandler={changeHandler}
              />
              {errors.birth && (
                <p className="text-red-500 text-sm">{errors.birth}</p>
              )}
            </div>

            <div className="relative  border-none bg-gray-100 w-[416px] h-[180px]  rounded-md cursor-pointer">
              {!files.length && (
                <div className=" ">
                  <div className="flex flex-col mt-[64px] items-center ">
                    <div className=" flex items-center   border-none  bg-[red] rounded-full w-[30px] h-[30px]">
                      <Image />
                    </div>
                    <label htmlFor="input-file" className="cursor-pointer">
                      Add image
                    </label>
                  </div>

                  <Input
                    name={"image"}
                    placeholder={""}
                    type="file"
                    value={form.image}
                    accept="image/*"
                    changeHandler={fileHandler}
                    classname="absolute top-0 left-0  opacity-0"
                  />

                  {errors.image && (
                    <p className="text-red-500">{errors.image}</p>
                  )}
                </div>
              )}
              {files &&
                Array.from(files).map((file, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center h-full w-full relative"
                    >
                      <button></button>
                      <img
                        src={URL.createObjectURL(file)}
                        alt="Uplaoded file"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center bg-[red]">
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
