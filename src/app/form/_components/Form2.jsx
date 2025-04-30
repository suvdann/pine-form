"use client"

import { Header } from "./header"
import { motion } from "framer-motion"
import { Input } from "./Input"
import { Button } from "./Button"
export const FormTwo=({nextHandler, backHandler})=>{
    return(
        <div className="flex flex-col gap-8 rounded-md bg-white p-8 w-[480px] h-[655px]">
            <motion.div>
            <Header/>
            <div className="flex flex-col gap-1 ">
            <Input label={"Email"} placeholder={"Your email"}  type="text"/>
            <Input label={"Phone number "} placeholder={"Your phone number"}  type="numberd"/>
            <Input label={"Password "} placeholder={"Your password"}  type="password"/>
            <Input label={"Confirm Password "} placeholder={"Confirm password"} type="password"/>
           
            </div>

           <div className="flex gap-2 justify-center items-center">
            <div className="flex flex-1/3">
            <Button text={"Back"} type={"prev"} 
            bgColor="border"
            clickHandler={backHandler}
            />
            </div>
            <div className=" flex flex-2/3 ">
           <Button text={"Continue 1/3"}
            type={"next"}
             bgColor={"bg-black"}
             clickHandler={nextHandler}
             />
             
           </div>
           </div>
            
            </motion.div>
           
        </div>
    )}

