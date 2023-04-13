import React, { useEffect, useState } from "react";

function Categories() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("Category.json")
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

  return (
    <div>
      <div className="text-center my-32">
        <h1 className="text-[48px] font-bold">Job Category List</h1>
      </div>
      <div className="gap-5 sm:flex sm:justify-around sm:items-center">
        {state.map((data, i) => (
          <div
            key={i}
            className="flex-col items-center justify-center sm:border bg-purple-200 p-5 rounded-[20px] my-5"
          >
            <div className="mb-5">
              <img src={data.logo} alt="" />
            </div>
            <div className="text-gray-800 font-semibold">{data.name}</div>
            <div>Jobs available {data.jobs_available}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
