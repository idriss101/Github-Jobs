import React, { useState, createContext } from "react";

export const JobContext = createContext();

export default function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
}
