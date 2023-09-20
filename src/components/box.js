import React, { useState } from "react";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export const Box = (props) => {
  const { title, body } = props;
  const [Arrow, setArrow] = useState(false); // Corrected destructuring

  return (
    <div>
    <div className="flex items-center justify-between mb-4">
      <div className="hover:text-indigo-600" onClick={() => setArrow(!Arrow)}>
        <p className="font-bold text-lg">{title}</p>
      </div>
      <div
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        onClick={() => setArrow(!Arrow)}
      >
        {Arrow ? (
          <IoIosArrowUp className="fill-blue-500" />
        ) : (
          <IoIosArrowDown className="fill-blue-500" />
        )}
      </div>
      
    </div>
    <div className={`${Arrow ? "block" : "hidden"}`}>
      <div className="my-4">
       {body}
      </div>
        
      </div>
    </div>
  );
};
