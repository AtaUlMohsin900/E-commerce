"use client";
import React, { useState } from "react";

const Quantity = () => {
  const [num, setNum] = useState(1);

  return (
    <div className="flex gap-x-2 items-center">
      {/* - */}
      <button
        className="center border  h-7 w-7"
        onClick={() => {
          setNum(num <= 1 ? 1 : num - 1);
        }}
      >
        -
      </button>
      {/* Numbers */}
      <span>{num}</span>
      {/* + */}

      <button
        className="center border  h-7 w-7"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;

// export const plusMinasButton = () => {
//   return <div className="center border  h-7 w-7">-</div>;
// };
