import React, { useState } from "react";
import { Bars4Icon } from "@heroicons/react/24/solid";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col items-start gap-y-[20px] px-5 sm:flex-row sm:justify-around sm:items-center my-3">
      <div className="font-bold text-2xl  font-mono">
        JOB<span className="text-sky-400">station</span>
      </div>
      <div
        className="menubar absolute w-8 text-purple-800 right-2 transition-all md:hidden"
        onClick={() => setToggle(!toggle)}
      >
        <Bars4Icon />
      </div>
      <ul
        className={`transition-all duration-500 ease-in w-full px-2 py-2 ${
          toggle ? "flex-col" : "hidden"
        } bg-sky-500 sm:top-0  text-white sm:flex  sm:flex-row md:flex-2 justify-between sm:w-2/12 sm:bg-transparent sm:text-gray-600 font-sans font-semibold`}
        style={{ transition: "all 0.5s ease" }}
      >
        <li className="mb-4 px-2 py-3 rounded transition hover:bg-blue-950 sm:hover:bg-transparent md:hover:text-green-500">
          Statistics
        </li>
        <li className="mb-4 px-2 py-3 rounded transition hover:bg-blue-950 sm:hover:bg-transparent md:hover:text-green-500">
          Applied Job
        </li>
        <li className="mb-4 px-2 py-3 rounded transition hover:bg-blue-950 sm:hover:bg-transparent md:hover:text-green-500">
          Blog
        </li>
      </ul>
      <div className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-[194px] h-[64px] text-white flex justify-center items-center rounded-md font-bold">
        Start Applying
      </div>
    </div>
  );
}

export default Navbar;
