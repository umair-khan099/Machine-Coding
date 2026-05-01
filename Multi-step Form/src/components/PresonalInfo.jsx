import React from "react";

const PresonalInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="First Name"
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        type="number"
        placeholder="Age"
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>
  );
};

export default PresonalInfo;