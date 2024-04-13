import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Login() {
  return (
    <div className="flex flex-col mb-0 min-h-screen">
      <div className="flex items-center mobile:my-5 mobile:mx-5 desktop:my-16 desktop:mx-56 justify-between">
        <Image
          width={200}
          height={200}
          src="/leet-reviews-logo.svg"
          alt="leet-reviews-logo"
          className="mobile:h-5 desktop:h-8"
        />
        <Link href={"http://localhost:8000/42/oauth"}>
          <div className="flex justify-center items-center bg-primary font-bold text-white gap-3 mobile:w-24 desktop:w-44 desktop:text-2xl p-2 rounded-xl shadow-lg hover:shadow-2xl border-2 border-primary hover:border-quaternary hover:bg-white hover:text-quaternary">
            Sign in
          </div>
        </Link>
      </div>
      <div className="m-10 self-center flex flex-col desktop:gap-24 mobile:gap-28">
        <div className="mobile:w-96 mobile:my-10 desktop:w-100 desktop:-ml-12">
          <div className="bg-quinary p-5 rounded-xl hover:shadow-2xl shadow-lg">
            <span className="text-primary font-semibold text-lg">
              Discover Real Insights:
            </span>
            <div className="text-quaternary text-base">
              Gain firsthand knowledge from your peers about their internship
              experiences, providing invaluable insights into various companies
              and industries.
            </div>
          </div>
          <Image
            width={50}
            height={50}
            src="/check-mark.svg"
            alt="check-mark"
            className="desktop:h-12 desktop:-my-5 desktop:-mx-5 desktop:-mt-36 mobile:h-10 mobile:-my-5 mobile:-mx-5 mobile:-mt-44"
          />
        </div>
        <div className="mobile:w-96 mobile:my-10 desktop:w-100">
          <div className="bg-quinary p-5 rounded-xl hover:shadow-2xl shadow-lg">
            <span className="text-primary font-semibold text-lg">
              Empower Informed Decisions:
            </span>
            <div className="text-quaternary text-base">
              Make informed decisions about your future internships by accessing
              candid reviews and detailed accounts directly from students who
              have been there.
            </div>
          </div>
          <Image
            width={50}
            height={50}
            src="/check-mark.svg"
            alt="check-mark"
            className="desktop:h-12 desktop:-my-5 desktop:-mx-5 desktop:-mt-36 mobile:h-10 mobile:-my-5 mobile:-mx-5 mobile:-mt-44"
          />
        </div>
        <div className="mobile:w-96 mobile:my-10 desktop:w-100 desktop:ml-12">
          <div className="bg-quinary p-5 rounded-xl hover:shadow-2xl shadow-lg">
            <span className="text-primary font-semibold text-lg">
              Community-Driven Resource:
            </span>
            <div className="text-quaternary text-base">
              Join a supportive community where students share their
              experiences, fostering transparency and helping you navigate the
              internship landscape with confidence.
            </div>
          </div>
          <Image
            width={50}
            height={50}
            src="/check-mark.svg"
            alt="check-mark"
            className="desktop:h-12 desktop:-my-5 desktop:-mx-5 desktop:-mt-36 mobile:h-10 mobile:-my-5 mobile:-mx-5 mobile:-mt-44"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center shadow-2xl rounded-lg mobile:w-96 desktop:w-30 p-6 self-center mt-52 gap-5">
        <div className="flex flex-col items-center text-quaternary">
          <div className="font-bold mobile:text-xl desktop:text-2xl ">
            Share With Us Your Experience.
          </div>
          <div className="font-bold mobile:text-xl desktop:text-2xl ">
            Join NOW!
          </div>
        </div>
        <Link href={"http://localhost:8000/42/oauth"}>
          <div className="flex justify-center items-center bg-primary font-bold text-white gap-3 w-64 p-2 rounded-xl hover:shadow-2xl hover:bg-quaternary">
            <Image
              width={50}
              height={50}
              src="/42-logo.svg"
              alt="42-logo"
              className="h-7"
            />
            <span>Sign in with Intra42</span>
          </div>
        </Link>
      </div>
      <div className="flex text-white bg-quaternary justify-between items-center mt-auto font-semibold mobile:text-sm p-5 desktop:px-16 mobile:px-5">
        <div className="mobile:w-16 desktop:w-28">
          <a href="https://www.linkedin.com/in/yassir-el-azizi-1ba527216/">
            by Yassir El azizi
          </a>
        </div>
        <span>LeetReviews 2024</span>
        <a href="https://github.com/yel-aziz/Reviews-Leet" target="_blank">
          <Image
            width={50}
            height={50}
            src="/github-logo.svg"
            alt="github-logo"
            className="mobile:h-5 desktop:h-10"
          />
        </a>
      </div>
    </div>
  );
}
