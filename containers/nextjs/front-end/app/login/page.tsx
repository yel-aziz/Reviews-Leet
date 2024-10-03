import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Login() {

    const cards = [
      {
        title: "Discover Real Insights",
        subTitle:
          "Gain firsthand knowledge from your peers about their internship experiences, providing invaluable insights into various companies and industries.",
      },
      {
        title: "Empower Informed Decisions",
        subTitle:
          "Make informed decisions about your future internships by accessing candid reviews and detailed accounts directly from students who have been there.",
      },
      {
        title: "Community-Driven Resource",
        subTitle:
          "Join a supportive community where students share their experiences, fostering transparency and helping you navigate the internship landscape with confidence.",
      },
    ];
    return (
      <div className="flex flex-col justify-between items-center w-full h-screen">
        <div className="flex items-center justify-between w-full p-[25px]">
          <img
            src="/leet-reviews-logo.svg"
            alt="leet-reviews-logo"
            className="h-5"
          />
          <Link href={"http://localhost:8000/42/oauth"}>
            <div className="flex justify-center items-center bg-primary font-bold text-white gap-3   p-2 rounded-xl shadow-lg hover:shadow-2xl border-2 border-primary hover:border-quaternary hover:bg-white hover:text-quaternary">
              Sign in
            </div>
          </Link>
        </div>
        <div className="self-center flex flex-col items-center gap-10 max-md:gap-3 my-[70px] max-md:my-[0px] mx-[25px]">
          {cards.map((card, index) => {
            return (
              <div className="w-full max-w-[600px] transform transition-transform duration-300 hover:scale-105 flex flex-col">
                <div
                  key={index}
                  //   className={`rounded-xl hover:shadow-2xl bg-quinary bg-[green] shadow-lg h-max max-w-[500px]
                  // `}
                  // index === 0 ? "ml-[-50px]" : index === 1 ? "" : "ml-[50px]"
                >
                  <img
                    src="/check-mark.svg"
                    alt="check-mark"
                    className="h-10 w-10 relative z-10"
                  />
                  <div className="p-5 rounded-xl hover:shadow-2xl bg-quinary shadow-lg mt-[-20px] w-[95%] mx-auto">
                    <span className="text-primary font-semibold text-lg max-md:text-base">
                      {card.title}
                    </span>
                    <p className="text-quaternary text-base max-md:text-xs">
                      {card.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-start w-[50%]">
          {/* <img
            src="/PointingHandEmoji.png"
            alt="PointingHandEmoji.png"
            className="w-[30px] rotate-[135deg] mt-[20px]"
        /> */}
          <div className="flex flex-col justify-center items-center shadow-2xl rounded-lg p-6 self-center my-10 max-md:my-3 gap-5">
            <div className="flex flex-col items-center text-quaternary font-bold text-3xl max-md:text-base max-lg:text-xl">
              <p>Share With Us Your Experience.</p>
              <p>Join NOW!</p>
            </div>
            <Link href={"http://localhost:8000/42/oauth"}>
              <div className="flex justify-center items-center bg-primary font-bold text-white gap-3 w-64 p-2 rounded-xl hover:shadow-2xl hover:bg-quaternary">
                <img src="/42-logo.svg" alt="42-logo" className="h-7" />
                <span>Sign in with Intra42</span>
              </div>
            </Link>
          </div>
          {/* <img
            src="/PointingHandEmoji.png"
            alt="PointingHandEmoji.png"
            className="w-[30px] rotate-[225deg] mt-[20px] transform scale-x-[-1] ml-[-50px]"
        /> */}
        </div>
        <div className="flex text-white bg-quaternary justify-between items-center font-semibold py-3 px-10 max-md:px-[25px] w-full mt-auto">
          <a href="https://www.linkedin.com/in/yassir-el-azizi-1ba527216/">
            by Yassir El azizi
          </a>
          {/* <span>LeetReviews 2024</span> */}
          <a href="https://github.com/yel-aziz/Reviews-Leet" target="_blank">
            <img src="/github-logo.svg" alt="github-logo" className="w-10 max-md:w-5" />
          </a>
        </div>
      </div>
    );
}
