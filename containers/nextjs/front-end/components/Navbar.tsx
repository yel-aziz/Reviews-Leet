"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Navbar() {
  const [login, setLogin] = useState("");
  const [avatar, setAvatar] = useState("");
  const [Logout, setLogout] = useState(false);
  const routeur = useRouter();

  useEffect(() => {
    async function getUser() {
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
      setAvatar(user.data.avatar);
    }
    getUser();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: any) => {
    const value = event.target.value;
    setSearchTerm(value);
    localStorage.setItem("searchTerm", value);

    // Trigger a custom event when the search term changes
    window.dispatchEvent(
      new CustomEvent("searchTermChange", { detail: value })
    );
  };

  function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
  }

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem("searchTerm");
    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
    }
  }, []);
  return (
    <div className="fixed top-0 z-10 bg-white min-w-[275px] w-full">
      <div className="flex items-center justify-center  h-14 min-h-10 min-w-[275px] max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between w-[90%]">
          <div
            className="flex flex-col items-center justify-between w-32 h-3w-32 cursor-pointer"
            onClick={() => {
              routeur.push("/");
              setLogout(false);
            }}
          >
            <Image
              src="/leet-reviews-logo.svg"
              alt="leet-reviews-logo"
              width={350}
              height={350}
              className="w-96 h-96"
            />
            {/* <p className="text-xs">Home</p> */}
          </div>
          <div className="w-72">
            <input
              type="search"
              placeholder="Company Name"
              onChange={handleSearchChange}
              className="bg-gray-400 border border-black w-[100%] rounded-full bg-transparent py-2 pl-3 outline-none"
            />
          </div>
          <div className="flex flex-col items-start justify-start h-[50px] p-1">
            <div className="flex flex-col w-full items-end justify-end">
              <div
                className={`flex items-center gap-2`}
                onClick={() => setLogout(!Logout)}
              >
                <div className="relative w-10 h-10">
                  <img src={avatar} alt="" className="rounded-full" />
                </div>
                <h1 className=" md:block hidden">{login}</h1>
              </div>
              <div
                className={`flex items-center justify-center rounded-md border-2 border-quaternary bg-white my-3 p-2 gap-2 ${
                  Logout ? "block" : "hidden"
                } text-primary font-bold cursor-pointer `}
                onClick={() => {
                  deleteAllCookies();
                  routeur.push("/login");
                }}
              >
                <Image
                  src="/logout.png"
                  alt="logout"
                  width={20}
                  height={20}
                  //   className="w-96 h-9w-96"
                />
                <div>Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
