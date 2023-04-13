import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="w-[95%] lg:w-[85%] mx-auto bg-white my-16">
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <p className="my-3">
            <span className="font-bold">Job Description:</span>{" "}
            <span className="text-gray-700">
              A UI/UX (User Interface/User Experience) designer is responsible
              for designing and creating engaging and effective interfaces for
              software and web applications. This includes designing the layout,
              visual design, and interactivity of the user interface.
            </span>
          </p>
          <p className="my-3">
            <span className="font-bold">Job Responsibility: </span>
            <span className="text-gray-700">
              Collaborating with cross-functional teams: UI/UX designers often
              work closely with other teams, including product management,
              engineering, and marketing, to ensure that the user interface is
              aligned with business and technical requirements. You will need to
              be able to effectively communicate your design ideas and gather
              feedback from other team members.
            </span>
          </p>
          <p className="font-bold my-3">Educational Requirements:</p>
          <p className="my-3  text-gray-700">
            Bachelor degree to complete any reputational university.
          </p>
          <p className="font-bold my-3">Experiences:</p>
          <p className="my-3 text-gray-700">2-3 Years in this field.</p>
        </div>
        <div>
          <div className="bg-[#9873FF1A] p-5 rounded">
            <h3 className="border-b-2 py-2 mb-2 border-slate-400 font-bold">
              Job Details
            </h3>
            <p className="my-2">
              Salary: <span className=" text-gray-700">100k - 150k</span>
            </p>
            <p className="my-2">
              Job title:{" "}
              <span className=" text-gray-700">Frontend Developer</span>
            </p>
            <h3 className="border-b-2 py-2 mb-2 border-slate-400 font-bold">
              Contact Information
            </h3>
            <p className="my-2">
              Phone: <span className=" text-gray-700">+8801647742754</span>
            </p>
            <p className="my-2">
              Email:<span className=" text-gray-700">info@gmail.com</span>
            </p>
            <p className="my-2">
              Address: <span className=" text-gray-700">Dhanmondi, Dhaka</span>
            </p>
          </div>
          <button className="w-full py-3 mt-5 bg-[#7E90FE] cursor-pointer text-white font-bold rounded">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
