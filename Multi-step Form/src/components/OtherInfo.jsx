import React from "react";

const OtherInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Nationality"
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        type="text"
        placeholder="Other..."
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>
  );
};

export default OtherInfo;
