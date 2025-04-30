import {ChevronLeft , ChevronRight} from "lucide-react"

export const Button=({text, type, bgColor, clickHandler})=>{
    return (<button
        onClick={clickHandler}
        className={`flex item-center text-base font-semibold rounded-[6px] p-2 cursor-pointer gap-2 ${bgColor}
    ${type==="next" ?"text-white":"text-black"}`}>
         {type==="prev"&&<ChevronLeft/>}
        {text}
        {type==="next"&&<ChevronRight/>}
        </button>
    )
}