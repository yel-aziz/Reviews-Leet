import React, { useState } from "react";
import Image from "next/image";

const Comment = ({ login, comment, avatar }: any) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  const words = comment.split(" ");
  const displayText = showFullText ? comment : "yassir";

  return (
    <div className="flex w-full justify-between   lg:h-auto mt-10">
      <div className="w-[50px] h-[50px] ">
        <Image
          src={avatar}
          alt=""
          width={5000}
          height={5000}
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="w-[80%] lg:w-[94%] md:w-[90%] h-full  rounded-xl bg-blend-darken">
        <p>{login} </p>
        <div className=" p-2 bg-[#4267B2] rounded-xl mt-2   h-auto ">
            <p style={{ overflowWrap: "break-word" }}>{displayText}</p>
            {words.length > 1 && (
              <button
                onClick={handleToggleText}
                className="text-blue-500 hover:underline focus:outline-none text-white"
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
