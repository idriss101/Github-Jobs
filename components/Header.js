import React, { useContext, useEffect } from "react";
import { InputContext } from "../context/InputProvider";
import { JobContext } from "../pages/index";

import useSWR from "swr";

export default function Header() {
  const input = useContext(InputContext);
  const [setJobs] = useContext(JobContext);
  const handleChange = (e) => {
    input.setInput(e.target.value);
  };
  // const url = "https://jobs.github.com/positions.json?page=1&search=web";
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  // const { data, error } = useSWR(url, fetcher);

  return (
    <div className="w-full py-4  bg-hero-pattern-mobile flex flex-col relative overflow-visible">
      <div className="flex w-full justify-around items-center mb-12 pt-4 ">
        <img src="/assets/desktop/logo.svg" alt="website logo" />
        <div className="flex items-center justify-between w-1/3">
          <img
            src="/assets/desktop/icon-sun.svg"
            alt="sun icon"
            className="w-6 object-contain"
          />
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <img
            src="/assets/desktop/icon-moon.svg"
            alt="sun icon"
            className="w-4 object-contain"
          />
        </div>
      </div>
      <form
        className="mx-auto bg-white w-5/6 flex p-4 rounded-lg justify-between items-center absolute top-20 left-8 right-8"
        // onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="font-kumbh text-lg focus:outline-none"
          placeholder="Filter by title..."
          value={input.input}
          onChange={handleChange}
        />
        <div className="flex items-center">
          <img
            src="/assets/mobile/icon-filter.svg"
            alt="filter icon"
            className="object-contain "
          />
          <div className="p-3 bg-violet-200 rounded ml-5">
            <img
              src="/assets/desktop/icon-search.svg"
              alt="search icon"
              className="object-contain h-5"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
