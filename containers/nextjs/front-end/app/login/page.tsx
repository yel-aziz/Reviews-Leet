import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Login() {
  return (
    <div className="flex flex-col mb-0 min-h-screen">
      <div className="flex my-16 mx-56 justify-between">
        <img
          src="/leet-reviews-logo.svg"
          alt="leet-reviews-logo"
          className="h-8 self-start"
        />
        <Link href={"http://localhost:8000/42/oauth"}>
          <div className="flex justify-center items-center bg-primary font-bold text-white gap-3 w-36 p-2 rounded-xl shadow-lg hover:shadow-2xl border-2 border-primary hover:border-quaternary hover:bg-white hover:text-quaternary">
            Sign in
          </div>
        </Link>
      </div>
      <div className="m-10 self-center flex flex-col gap-36">
        <div className="w-100 -ml-12">
          <p className="bg-quinary p-5 rounded-xl hover:shadow-2xl shadow-lg">
            <span className="text-primary font-semibold text-lg">
              Discover Real Insights:
            </span>
            <p className="text-quaternary text-base">
              Gain firsthand knowledge from your peers about their internship
              experiences, providing invaluable insights into various companies
              and industries.
            </p>
          </p>
          <img
            src="/check-mark.svg"
            alt="check-mark"
            className="h-12 -my-14 -mx-6 -mt-32"
          />
        </div>
        <div className="w-100">
          <p className="bg-quinary p-5 rounded-xl hover:shadow-2xl shadow-lg">
            <span className="text-primary font-semibold text-lg">
              Empower Informed Decisions:
            </span>
            <p className="text-quaternary text-base">
              Make informed decisions about your future internships by accessing
              candid reviews and detailed accounts directly from students who
              have been there.
            </p>
          </p>
          <img
            src="/check-mark.svg"
            alt="check-mark"
            className="h-12 -my-14 -mx-6 -mt-32"
          />
        </div>
        <div className="w-100 ml-12">
          <p className="bg-quinary p-5 rounded-xl hover:shadow-2xl shadow-lg">
            <span className="text-primary font-semibold text-lg">
              Community-Driven Resource:
            </span>
            <p className="text-quaternary text-base">
              Join a supportive community where students share their
              experiences, fostering transparency and helping you navigate the
              internship landscape with confidence.
            </p>
          </p>
          <img
            src="/check-mark.svg"
            alt="check-mark"
            className="h-12 -my-14 -mx-6 -mt-32"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center shadow-2xl rounded-lg w-30 p-6 self-center mt-52 gap-5">
        <div className="flex flex-col items-center text-quaternary">
          <p className="font-bold text-2xl ">Share With Us Your Experience.</p>
          <p className="font-bold text-2xl ">Join NOW!</p>
        </div>
        <Link href={"http://localhost:8000/42/oauth"}>
          <div className="flex justify-center items-center bg-primary font-bold text-white gap-3 w-64 p-2 rounded-xl hover:shadow-2xl hover:bg-quaternary">
            <img src="/42-logo.svg" alt="42-logo" className="h-7" />
            <span>Sign in with Intra42</span>
          </div>
        </Link>
      </div>
      <div className="flex text-white bg-quaternary justify-between items-center mt-auto font-semibold p-5 px-16">
        <div>
          <a href="https://www.linkedin.com/in/yassir-el-azizi-1ba527216/">
            by Yassir El azizi
          </a>
        </div>
        <span>LeetReviews 2024</span>
        <a href="https://github.com/yel-aziz/Reviews-Leet" target="_blank">
          <img src="/github-logo.svg" alt="github-logo" className="h-10" />
        </a>
      </div>
    </div>
  );
}
