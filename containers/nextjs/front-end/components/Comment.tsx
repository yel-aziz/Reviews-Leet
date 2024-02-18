import React, { useState } from "react";
import Image from "next/image";

const Comment = ({ login, comment, avatar='/goodEx.png' }: any) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  const words = comment.split(" ");
  const displayText = showFullText ? comment : words.slice(0, 20).join(" "); // Display first 20 words

  return (
    <div className="flex w-full  gap-2  lg:h-auto mt-10">
      <div className="w-[50px] h-[50px] ">
        <Image
          src={avatar}
          alt=""
          width={5000}
          height={5000}
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="w-[100%] lg:w-[93%] md:w-[83%] h-full  rounded-xl bg-blend-darken">
        <p>{login} </p>
        <div className=" p-2 bg-[#4267B2] rounded-xl mt-2   h-auto ">
            <p style={{ overflowWrap: "break-word" }}>{displayText}</p>
            {words.length > 20 && (
              <button
                onClick={handleToggleText}
                className="hover:underline focus:outline-none text-white"
              >
                {showFullText ? "Read Less" : "Read More"}
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
