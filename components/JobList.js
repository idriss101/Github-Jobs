import React, { useContext } from "react";
import Job from "./Job";
import { JobContext } from "../pages/index";

export default function JobList() {
  const [jobs, setJobs] = useContext(JobContext);
  return (
    <div className="bg-gray-100 w-full  mx-auto pt-20 flex flex-col items-center ">
      {jobs.map((job) => (
        <Job {...job} key={job.id} />
      ))}
    </div>
  );
}
