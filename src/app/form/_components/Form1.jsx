"use client"

import { Header } from "./header"
import { motion } from "framer-motion"
import { Input } from "./Input"
import { Button } from "./Button"
export const FormOne=({nextHandler})=>{
    return(
        <div className="flex flex-col gap-6 rounded-md bg-white p-8 w-[480px] h-[655px]">
            <motion.div>
            <Header/>
            <div className="flex flex-col gap-2 ">
            <Input label={"first Name"} placeholder={"Your first name"} type="text"/>
            <Input label={"Last name "} placeholder={"Your last name"} type="text"/>
            <Input label={"Username *"} placeholder={"Your username"} type="text"/>
            <Button text={"Continue 1/3"} type={"next"} bgColor={"bg-black"} clickHandler={nextHandler} />
            </div>
           
            
            </motion.div>
           
        </div>
    )}

