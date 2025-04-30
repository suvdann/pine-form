import Image from "next/image"
export const Header=()=>{
    return(
    <div
    className="flex flex-col gap-4 ">
              <Image src="/icon.png" alt="icon" width={60} height={60} />
            <p className="font-bold text-26px">Join Us!😎</p>
            <p className="text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
    </div>
   
    )
}