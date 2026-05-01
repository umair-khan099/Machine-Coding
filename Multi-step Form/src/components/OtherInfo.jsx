import React from "react";

const OtherInfo = ({ formData, setformData }) => {
  return (
    <div className="flex flex-col gap-4">
      <input
        value={formData.nationality}
        type="text"
        placeholder="Nationality"
        onChange={(e) =>
          setformData({ ...formData, nationality: e.target.value })
        }
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        value={formData.other}
        type="text"
        placeholder="Other..."
        onChange={(e) => setformData({ ...formData, other: e.target.value })}
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>
  );
};

export default OtherInfo;
