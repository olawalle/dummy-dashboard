import React, { useState } from "react";

function PrefixedInput({ image, otherClasses }) {
  return (
    <div className="w-full relative my-2 flex items-center">
      <img src={image} alt="" className="absolute left-3" />
      <input
        type="text"
        className={`asbolute left-0 top-0 border-gray-300 text-purple-500 focus:ring-purple-200 rounded-md h-12 w-full pl-10 outline-none !max-w-full ${otherClasses}`}
      />
    </div>
  );
}

export default PrefixedInput;
