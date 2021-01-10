import React from "react";
import moment from "moment";

export default function Job(props) {
  return (
    <div className="bg-white w-5/6 p-10 rounded-lg mb-10 relative overflow-visible cursor-pointer">
      <img
        src={props.company_logo}
        alt="Company Logo"
        className="object-contain w-12 absolute -top-5 rounded"
      />
      <div className="flex flex-row">
        <p className="text-gray-300 font-lightbold mb-3">
          {moment(props.created_at).fromNow()}&nbsp; &#8226; &nbsp; {props.type}
        </p>
      </div>
      <h2 className="font-bold text-xl mb-4">{props.title}</h2>
      <p className="text-gray-300 font-lightbold mb-4">{props.company}</p>
      <p className="text-violet-200 font-bold">{props.location}</p>
    </div>
  );
}
