import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Enter Your Email"
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        type="password"
        placeholder="Enter A Strong Password"
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>
  );
};

export default SignUp;