import React from "react";

const SignUp = ({ formData, setformData }) => {
  return (
    <div className="flex flex-col gap-4">
      <input
        value={formData.email}
        onChange={(e) => setformData({ ...formData, email: e.target.value })}
        type="text"
        placeholder="Enter Your Email"
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        value={formData.password}
        onChange={(e) =>
          setformData({ ...formData, password: e.target.value })
        }
        type="password"
        placeholder="Enter A Strong Password"
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        value={formData.confirmPassword}
        onChange={(e) =>
          setformData({ ...formData, confirmPassword: e.target.value })
        }
        type="password"
        placeholder="Confirm Password"
        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>
  );
};

export default SignUp;
