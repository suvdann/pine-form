"use client";

import { Header } from "./header";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";
export const FormThree = ({
  nextHandler,
  backHandler,
  errors,
  form,
  changeHandler,
}) => {
  // const [selectedImage, setSelectedImage] = useState("");

  return (
    <motion.div>
      <div className="flex flex-col gap-8 rounded-md bg-white p-8 w-[480px] h-[655px] justify-between">
        <div className="flex flex-col ">
          <Header />

          <div className="flex flex-col gap-8 ">
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

            <label htmlFor="input-file" className="cursor-pointer">
              Profile Image
            </label>
            <div className="border-none bg-gray-100 w-[416px] h-[180px] border-solid rounded-md cursor-pointer">
              <Input
                name={"image"}
                placeholder={""}
                type="file"
                value={form.image}
                accept="image/*"
                changeHandler={changeHandler}
              />
            </div>
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
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

{
  /* <div className="border bg-grey-400  flex justify-center items-center rounded-[8px] h-[180px] w-[full]">
            {!files.length && (
              <div className="relative z-5">
                <label htmlFor="input-file" className="cursor-pointer">
                  Add image
                </label>
                <Input
                  id="input-file"
                  type="file"
                  //   accept="image/png"
                  display="hidden"
                  changeHandler={fileHandler}
                  name="image"
                />
                {errors.image && <p className="text-red-500">{errors.image}</p>}
              </div>
            )}
            {files &&
              Array.from(files).map((file, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center h-full w-full relative"
                  >
                    <Image
                      fill
                      objectFit="cover"
                      src={URL.createObjectURL(file)}
                      alt="Uplaoded file"
                    />
                  </div>
                );
              })}
          </div> */
}
