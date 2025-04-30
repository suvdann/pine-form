import Image from "next/image"
export const Success=()=>{
    return  <div
        className="flex flex-col gap-4 flex flex-col gap-8 rounded-md bg-white p-8  ">
                  <Image src="/icon.png" alt="icon" width={60} height={60} />
                <p className="font-bold text-26px">You're All Set 🔥</p>
                <p className="text-[#8E8E8E]">
                We have received your submission. Thank you!
                </p>
        </div>
}