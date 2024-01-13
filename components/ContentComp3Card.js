import React from "react";
import { TbZoomQuestion } from "react-icons/tb";

function ContentComp3Card({ item, logo }) {
  return (
    <div className="flex flex-col lg:items-start lg:w-10/12 sm:flex-row  rounded-lg border-b-2 border-action-900 shadow-lg shadow-action-300 p-7 lg:p-4 py-9 sm:items-center items-start justify-center">
      <div className="w-1/12">{logo}</div>
      <div className="w-11/12 flex flex-col">
        <h2 className="font-semibold uppercase">{item.question}</h2>
        <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
      </div>
    </div>
  );
}

export default ContentComp3Card;
