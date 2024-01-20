import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full bg-white">

    <div className="flex items-center justify-center w-screen  h-14 min-h-10 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between w-[90%]">
        <div>
          <input
            type="search"
            placeholder="Company Name"
            className="bg-gray-400 border border-black w-[80%]"
          />
        </div>
        <div className="flex items-center h-[50px]">
          <div className="relative w-10 h-10">
            <img
              src="/idimage.jpeg"
              alt=""
              className="rounded-full"
            />
          </div>
          <h1 className="m-2 md:block hidden">yel-aziz</h1>
        </div>
      </div>
    </div>
    </div>
  );
}
