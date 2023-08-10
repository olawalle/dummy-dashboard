import React from "react";

function LinkItem({ link }) {
  return (
    <>
      <div className="flex">
        <img src={link.image} alt="" className="w-6" />{" "}
        <span className="ml-3">{link.text}</span>
      </div>
      {link.hasTag && (
        <div className="bg-gray-100 py-1 px-3 rounded-2xl">10</div>
      )}
    </>
  );
}

export default LinkItem;
