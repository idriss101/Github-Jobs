import React from "react";

export default function Header() {
  return (
    <div className="w-full pt-5 bg-red-300">
      <div className="flex w-full justify-around">
        <h1 className="text-white text-2xl">devjobs</h1>

        <div className="flex items-center justify-between ">
          <img
            src="/assets/desktop/icon-sun.svg"
            alt="sun icon"
            className="w-6 object-contain"
          />
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <img
            src="/assets/desktop/icon-moon.svg"
            alt="sun icon"
            className="w-4 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
