"use client";
import Image from "next/image";
import Badge from "./Badge";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import axios from "axios";

export default function Card({
  name = "loading...",
  status = "full stack develloper",
  city = "Maroc",
  contractType = "CDI",
  mission = "Casablanca",
  position,
  id = 0,
  creationDate = 2024,
  avatar = "/goodEx.png",
  linkding = "https://www.linkedin.com/school/1337-coding-school/",
  emoji = "/goodEx.png",
  creatorid = 0,
}: any) {
  const handleClickCard = (key: any) => {};

  const [user, setLogin] = useState("");
  const [avatarcomeent, setAvatarcomment] = useState<any>([]);
  const [logincreator, setCreatorlogin] = useState("");

  useEffect(() => {
    async function getUser() {
      try {
        const token = Cookies.get("token");

        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          // other headers...
        };
        const user = await axios.get("http://localhost:8000/42/me", {
          headers,
        });
        setLogin(user.data.login);
        const creatorlogin = await axios.get(
          `http://localhost:8000/42/user/?id=${creatorid}`
        );
        setCreatorlogin(creatorlogin.data.login);

        const usercommented = await axios.get(
          `http://localhost:8000/42/getComments/?id=${id}`
        );

        setAvatarcomment(usercommented.data.comments);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    getUser();
  }, []); 
  const uniqueUserIds = new Set();

  // Filter the array to keep only unique users
  const uniqueData = avatarcomeent?.filter((item: any) => {
    if (!uniqueUserIds.has(item.userId)) {
      uniqueUserIds.add(item.userId);
      return true;
    }
    return false;
  });

  const router = useRouter();

  const path = usePathname();
  const proceder = "/Engagement";
  const desire = proceder === path;

  return (
    <div
      onClick={() => handleClickCard(id)}
      className="flex  items-center justify-center rounded-md bg-white mt-10  w-[100%] md:w-[100%] lg:w-[900px]  h-[400px] md:h-[230px] shadow-lg hover:shadow-2xl"
    >
      <div className="flex flex-col justify-between w-[95%] h-[90%] ">
        <div className=" flex flex-col lg:flex-row  justify-between  w-[100%]  md:h-[60%] lg:h-[50%]  h-auto ">
          <div className="flex flex-col md:flex-row  md:justify-between gap-3 h-[80%]   lg:w-[80%]  font-bold ">
            <div className=" h-16 w-16">
              <Image
                src={avatar}
                alt=""
                width={500}
                height={500}
                className="w-full h-full rounded-full "
              />
            </div>
            <div className="flex justify-between flex-col  h-[100px] md:h-full   md:w-[90%]  overflow-hidden">
              <h1 className="font-bold"> {name}</h1>
              <h3>{status}</h3>
              <div className="flex gap-5">
                <div
                  className=" flex text-xs gap-2 cursor-pointer"
                  onClick={() => {
                    router.push(
                      `https://profile.intra.42.fr/users/${logincreator}`
                    );
                  }}
                >
                  <p> By: </p>
                  <div className="w-5 h-3">
                    <Image src="/42.png" alt="" width={50} height={50} />
                  </div>
                </div>
                <div
                  className="flex gap-2 w-7 h-5 cursor-pointer"
                  onClick={() =>
                    router.push(
                      "https://discord.com/channels/788078738905628682"
                    )
                  }
                >
                  <h1 className="text-xs"> Dicord:</h1>
                  <Image
                    src={"/discord.png"}
                    alt=""
                    height={1000}
                    width={1000}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-wrap md:h-[100px]   w-full lg:w-[60%]  lg:mt-0 mt-auto  lg:items-start items-end overflow-x-scroll lg:overflow-hidden">
            <div className="flex lg:flex-wrap gap-5 h-auto justify-end">
              <Badge level="/job.png" mission={position} color="bg-teal-300" />
              <Badge
                level="/contract.png"
                mission={contractType}
                color="bg-blue-500"
              />
              <Badge
                level="/location.png"
                mission={city}
                color="bg-orange-200"
              />
              <Badge
                level="/clock.png"
                mission={mission}
                color="bg-green-300"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <p className="text-xs">Posted On: {creationDate}</p>

            <div
              className="flex gap-2 text-xs md:text-base cursor-pointer"
              onClick={() => router.push(`${linkding}`)}
            >
              <p>linkedin company : </p>
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
          <div className="flex  items-center justify-end mb-2">
            <div className="flex  flex-col items-center">
              <img src={emoji} alt="" width={30} height={50} />
              <p className="text-xs ">Experience Rate </p>
            </div>
          </div>
        </div>

        <div className="flex  justify-between  w-full relative border ">
          {uniqueData?.length > 0 && (
            <>
              <div className="w-7 h-7 rounded-full">
                <Image
                  src={uniqueData[0]?.user.avatar}
                  alt=""
                  width={300}
                  height={1000}
                  className="  rounded-full w-full h-full "
                />
              </div>

              {uniqueData?.length > 1 && (
                <div className="w-7 h-7  absolute">
                  <Image
                    src={uniqueData[1]?.user.avatar}
                    alt=""
                    width={300}
                    height={300}
                    className=" w-full h-full relative left-[15px]  rounded-full"
                  />
                </div>
              )}
              {uniqueData?.length > 2 && (
                <div className="w-7 h-7  absolute">
                  <Image
                    src={uniqueData[2]?.user.avatar}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full h-full  left-[30px] rounded-full relative"
                  />
                </div>
              )}

              {uniqueData?.length > 3 && (
                 <div className="w-7 h-7  absolute">
                 <Image
                   src={uniqueData[3]?.user.avatar}
                   alt=""
                   width={300}
                   height={300}
                   className="w-full h-full  left-[45px] rounded-full relative"
                 />
               </div>
              )}
              {uniqueData?.length > 4 && (
                <div className="w-7 h-7  absolute">
                <Image
                  src={uniqueData[4]?.user.avatar}
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-full  left-[60px] rounded-full relative"
                />
              </div>
              )}
              {uniqueData?.length > 5 && (
                <div className="w-7 h-7  absolute">
                <Image
                  src={uniqueData[5]?.user.avatar}
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-full  left-20 rounded-full relative"
                />
              </div>
              )}
            </>
          )}

          <div
            className={`bg-sky-800 w-20 rounded-full items-center flex justify-center hover:bg-blue-300 ml-auto ${
              desire ? "block" : "block"
            } text-white cursor-pointer `}
          >
            <p
              className="hover:shadow-2xl"
              onClick={() => {
                router.push(`/Engagement?id=${id}`);
              }}
            >
              Engage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
