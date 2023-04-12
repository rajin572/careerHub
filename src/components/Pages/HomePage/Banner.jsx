import React from "react";
import ManImage from "../../../assets/img/man.png";
import Button from "../../Button";

function Banner() {
  return (
    <div>
      <div className="container md:grid  md:grid-cols-2 px-5 md:px-40">
        <div className="text-content ">
          <h1 className="text-[60px] lg:text-[80px] text-[#1A1919] font-bold">
            One Step <br />
            Closer To Your <br />
            <span className="text-[#9873FF]">Dream Job</span>
          </h1>
          <p className="text-[18px]">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Button classname={'mt-5'}>Start</Button>
        </div>
        <div className="">
          <img src={ManImage} className=" object-cover max-w-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
