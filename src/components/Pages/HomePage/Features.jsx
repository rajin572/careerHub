import React, { useEffect, useState } from "react";
import Button from "./../../Button";
import Featuresjob from "./Featuresjob";

function Features() {
  const [job, setJob] = useState([]);
  const [see, SetSee] = useState(false);
  useEffect(() => {
    fetch("Jobs.json")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

console.log(see)
    

  return (
    <div className="px-40">
      <div className="text-center my-32 ">
        <h1 className="text-[48px] font-bold">Features JOB</h1>
        <p className="text-gray-500 text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      {see ? (
        <div className="grid sm:grid-cols-2 grid-row-3 justify-center gap-5">
          {job.map((data) => (
            <Featuresjob data={data} key={data.id} />
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 grid-row-3 justify-center gap-5">
          {job.slice(0,4).map((data) => (
            <Featuresjob data={data} key={data.id} />
          ))}
        </div>
      )}
      <div className="flex justify-center my-10">
        <Button classname={"text-center cursor-pointer"} onClick={()=>SetSee(!see)}>
          {see ? "see less" :"see more"}
        </Button>
      </div>
    </div>
  );
}

export default Features;
