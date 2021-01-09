import React from "react";
import moment from "moment";

export default function Job(props) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
  };
  const date1 = new Date();
  const date2 = moment(props.created_at).format();

  //   console.log(
  //     date1.toLocaleDateString("en-US", options),
  //     date2.toLocaleDateString("en-US", options)
  //   );
  return (
    <div className="bg-white w-5/6 p-10 rounded-lg mb-10">
      <div className="flex flex-row">
        <p className="text-gray-300 font-lightbold mb-2">
          5h ago &nbsp; &#8226; &nbsp; {props.type}
        </p>
      </div>
      <h2 className="font-bold text-xl mb-2">{props.title}</h2>
      <p className="text-gray-300 font-lightbold mb-2">{props.company}</p>
      <p className="text-violet-200 font-bold">{props.location}</p>
    </div>
  );
}
