"use client"
import Card from "@/components/Card";
import Comment from "@/components/Comment";
import Image from "next/image";
import { useState } from "react";

export default function Engagment() {

    const [feedback,setComment] = useState('Null')
    const HandleComment = (event:any) =>{
        setComment(event.target.value)
    }
  return (
    <div className="flex flex-col items-center   min-w-[280px] bg-[#F1F3F5] md:h-screen   w-full">
      <div className="flex flex-col w-[90%] border justify-between items-center   ">
        <Card />
        <div className=" w-[100%] lg:w-[900px]   h-[90px] mt-5 ">
          <div className="flex w-full h-full">
            <div>
              <Image
                src="/idimage.jpeg"
                alt=""
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="overflow-y-auto w-full h-full">
              <textarea
                name="comment"
                id=""
                placeholder="Type your Feedback Here..."
                className="h-full w-full rounded-2xl p-2"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end items-end mt-5">
            <button className="bg-orange-500 rounded-full w-24 h-7">
              Publish
            </button>
          </div>
        </div>
      </div>
      <div className=" lg:w-[900px] w-[90%] h-full  border-black mt-16  ">
        <div className="flex justify-between">
          <p>Total : 10</p>
          <div className="flex">
            <Image src={"/reload.png"} width={25} height={30} alt="" />
            <button>Refresh</button>
          </div>
        </div>
        <div className="w-[100%] ">


        <Comment avatar='/idimage.jpeg' comment='lorhhhhhhhhhhhhhhhhv hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        rrrrrrrrregegegegegegegegegjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
        kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkegeg' login='yel-aziz' />
       
        </div>
      </div>
    </div>
  );
}
