import React, { useState } from "react";
import SignUp from "./SignUp";
import PresonalInfo from "./PresonalInfo";
import OtherInfo from "./OtherInfo";

const Form = () => {
  const [page, setPage] = useState(0);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    age: "",
    nationality: "",
    other: "",
  });

  const FORM_TITLES = ["Sign Up", "Personal Info", "Other Info"];

  const validateStep = () => {
    if (page === 0) {
      if (!formData.email.includes("@")) {
        return "Email is invalid";
      }
      if (formData.password.length < 6) {
        return "Password must be at least 6 characters";
      }
      if (formData.password !== formData.confirmPassword) {
        return "Passwords do not match";
      }
    }

    if (page === 1) {
      if (!formData.firstName || !formData.lastName) {
        return "Name is required";
      }
      if (!formData.age || formData.age < 1) {
        return "Enter valid age";
      }
    }

    if (page === 2) {
      if (!formData.nationality) {
        return "Nationality is required";
      }
    }

    return "";
  };

  const handleNext = () => {
    const validationError = validateStep();

    if (validationError) {
      setError(validationError);
      return; // stop here, no page change
    }

    setError("");
    setPage((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 border border-pink-200">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-pink-600 mb-6">
          {FORM_TITLES[page]}
        </h1>

        {/* Form Content */}
        <div className="mb-6">
          {page === 0 ? (
            <div>
              <SignUp formData={formData} setformData={setFormData} />
              {error && (
                <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
              )}
            </div>
          ) : page === 1 ? (
            <PresonalInfo formData={formData} setformData={setFormData} />
          ) : (
            <OtherInfo formData={formData} setformData={setFormData} />
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className={`px-4 py-2 rounded-lg font-medium transition 
              ${
                page === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-pink-200 text-pink-700 hover:bg-pink-300"
              }`}
          >
            Prev
          </button>

          <button
            onClick={() => {
              if (page === FORM_TITLES.length - 1) {
                console.log("form has subbmited");
              } else {
                handleNext();
              }
            }}
            className="px-4 py-2 rounded-lg font-medium transition bg-pink-500 text-white hover:bg-pink-600"
          >
            {page === FORM_TITLES.length - 1 ? "submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
