import React from "react";

export default function Job() {
  return (
    <div className="bg-white w-5/6 p-10 rounded-lg">
      <div className="flex flex-row">
        <p className="text-gray-300 font-lightbold mb-2">
          5h ago &nbsp; &#8226; &nbsp; Full Time
        </p>
      </div>
      <h2 className="font-bold text-xl mb-2">Senior Software Engineer</h2>
      <p className="text-gray-300 font-lightbold mb-2">Company Name</p>
      <p className="text-violet-200 font-bold">Location</p>
    </div>
  );
}
