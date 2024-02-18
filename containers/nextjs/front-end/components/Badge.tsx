import Image from "next/image";

export default function Badge({color,mission,level}:any){
    return(
        <div className={`flex justify-between items-center ${color}  w-[160px]  h-7 rounded-xl  overflow-hidden`} >
        <div className="w-6 h-6">
          <Image
            src={level}
            width={200}
            height={200}
            alt=""
            className=" w-full h-full"
          />
        </div>
        <div className="w-[70%]   overflow-hidden">
          <p className="">{mission}</p>
        </div>
      </div>
    )
}