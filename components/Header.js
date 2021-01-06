import React, { useState } from "react";

export default function Header() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="w-full py-4  bg-hero-pattern-mobile flex flex-col relative overflow-visible">
      <div className="flex w-full justify-around items-center mb-12 pt-4">
        {/* <h1 className="text-white text-3xl font-bold">devjobs</h1> */}
        <img src="/assets/desktop/logo.svg" alt="" />
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
      <div className="mx-auto bg-white w-5/6 flex p-4 rounded justify-between items-center absolute top-20 left-8 right-8">
        <input
          type="text"
          className="font-kumbh text-lg focus:outline-none"
          placeholder="Filter by title..."
          value={input}
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
      </div>
    </div>
  );
}
