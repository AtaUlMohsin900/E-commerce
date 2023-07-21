import React from "react";

const Quantity = () => {
  return (
    <div className="flex gap-x-2 items-center">
      {/* - */}
      <div className="center border  h-7 w-7 rounded-full">-</div>
      {/* Numbers */}
      <span>2</span>
      {/* + */}
      <div className="center border  h-7 w-7 rounded-full">+</div>
    </div>
  );
};

export default Quantity;
