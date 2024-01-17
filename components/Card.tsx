import Image from "next/image";
import Badge from "./Badge";
import Link from "next/link";

export default function Card() {
  return (
    <div className="flex  items-center justify-center rounded-md bg-white mt-10  w-[100%] md:w-[90%] lg:w-[900px]  h-[400px] md:h-[220px] shadow-lg hover:shadow-2xl">
      <div className="flex flex-col justify-between w-[95%] h-[90%]">
        <div className=" flex flex-col lg:flex-row  justify-between  w-[100%]  md:h-[60%]  h-auto ">
          <div className="flex flex-col md:flex-row  md:justify-between gap-3 h-[80%]   lg:w-[80%]  font-bold ">
            <div className=" h-16 w-16">
              <Image
                src="/idimage.jpeg"
                alt=""
                width={500}
                height={500}
                className="w-full h-full rounded-full "
              />
            </div>
            <div className="flex justify-between flex-col  h-[100px] md:h-full   md:w-[90%]  overflow-hidden">
              <h1 className="font-bold"> guichet.com</h1>
              <h3>Full stack devlloper</h3>
              <div className="flex gap-5">
                <div className=" flex text-xs gap-2">
                  <p> By: </p>
                  <div className="w-5 h-3">
                    <Image src="/42.png" alt="" width={50} height={50} />
                  </div>
                </div>
                <h1 className="text-xs"> Dicord: yel-aziz</h1>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-wrap md:h-[100px]  w-full lg:w-[60%]  lg:mt-0 mt-auto items-end overflow-x-scroll lg:overflow-hidden">
            <div className="flex lg:flex-wrap gap-5 h-auto ">
              <Badge
                level="/job.png"
                mission="internship"
                color="bg-teal-300"
              />
              <Badge level="/job.png" mission="Remote" color="bg-blue-500" />
              <Badge
                level="/location.png"
                mission="Casablanca"
                color="bg-orange-200"
              />
              <Badge level="/job.png" mission="finished" color="bg-red-600" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs">Posted On: 2024-01-01</p>
          <div className="flex gap-2">
            <p>Linkding company : </p>
            <div className="w-7 h-7">
              <Image
                src="/link.png"
                alt=""
                width={50}
                height={50}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between  w-full relative">
          <div className="flex">
            <div className="flex ">
              <Image
                src="/idimage.jpeg"
                alt=""
                width={30}
                height={30}
                className=" absolute rounded-full  "
              />
              <Image
                src="/idimage.jpeg"
                alt=""
                width={30}
                height={30}
                className=" absolute left-3 rounded-full "
              />
              <Image
                src="/idimage.jpeg"
                alt=""
                width={30}
                height={30}
                className=" absolute left-6 rounded-full"
              />
              <Image
                src="/idimage.jpeg"
                alt=""
                width={30}
                height={30}
                className=" absolute left-9 rounded-full"
              />
              <Image
                src="/idimage.jpeg"
                alt=""
                width={30}
                height={30}
                className=" absolute left-12 rounded-full"
              />
            </div>
          </div>

          <Link
            href={`/Engagement  `}
            className="bg-sky-800 w-20 rounded-full items-center flex justify-center text-white cursor-pointer "
          >
            <p className="">Engage</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
