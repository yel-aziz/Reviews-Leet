"use client";

import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="h-screen w-screen bg-neutral-900 grid place-content-center overflow-x-hidden bg-dark text-white">
      <div className="text-center space-y-7">
        <div>
          <Image
            src="/42.png"
            width={100}
            height={30}
            alt="/"
            className="m-auto"
            style={{ width: 100 }}
          />
        </div>
        <div className="text-center space-y-7">
          <h5 className="font-semibold text-3xl ">Log in</h5>
          <p className="text-lg capitalize antialiased max-w-sm">
            Join us now and Share With Us your Experience
          </p>
          <Link
            href={`/`}
            className="flex outline-0 items-center hover:shadow-xl hover:bg-[#BE4FC2] px-5 sm:px-10 m-auto bg-[#8196c3] h-[60px]  rounded-[60px] text-dark font-blod w-fit"
          >
            <Image
              src="/42.png"
              width={30}
              height={30}
              alt="42 logo"
              className=""
              style={{ width: 30 }}
              blurDataURL="42.png"
            />
            <span className="ml-2 font-semibold">sign in with 42</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
