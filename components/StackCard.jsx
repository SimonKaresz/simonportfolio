import React from "react";

const StackCard = ({ stack }) => {
  return (
    <div className="w-full flex justify-center items-center border border-cyan-800 p-4 bg-cyan-500/20 shadow-md shadow-cyan-800/50">
      <span className="text-sm font-bold italic drop-shadow-2xl">{stack}</span>
    </div>
  );
};

export default StackCard;
