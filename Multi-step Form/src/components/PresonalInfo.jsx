import React from "react";

const PresonalInfo = ({ formData, setformData }) => {
  return (
    <div className="flex flex-col gap-4">
      <input
        value={formData.firstName}
        type="text"
        placeholder="First Name"
        onChange={(e) =>
          setformData({ ...formData, firstName: e.target.value })
        }
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        value={formData.lastName}
        type="text"
        placeholder="Last Name"
        onChange={(e) => setformData({ ...formData, lastName: e.target.value })}
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        value={formData.age}
        type="text"
        placeholder="Age"
        onChange={(e) => setformData({ ...formData, age: e.target.value })}
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>
  );
};

export default PresonalInfo;
