import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [error, setError] = useState(""); // State to track error messages
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.agreeTerms) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    // Simulate a form submission
    try {
      // Replace with actual API call
      const response = await fakeApiCall(formData);

      if (response.success) {
        setIsSubmitted(true);
        setError(""); // Clear any existing errors
      } else {
        setError("Failed to create account. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  // Fake API call function for demonstration
  const fakeApiCall = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success or failure
        Math.random() > 0.5
          ? resolve({ success: true })
          : reject(new Error("Failed to create account"));
      }, 1000);
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs title="Sign Up" prevLocation="/" />

      <div className="md:w-2/3 lg:w-1/2 mx-auto mb-10">
        <form onSubmit={handleFormSubmit}>
          <h1 className="text-3xl font-semibold mb-6">
            Sign Up for DigiPrint LLC
          </h1>

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
              <p>{error}</p>
            </div>
          )}

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Re-enter Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter Your Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
              />
              <span className="text-sm">
                I agree to DigiPrint LLC's{" "}
                <Link to="/terms" className="text-blue-500 hover:underline">
                  Terms and Conditions
                </Link>
              </span>
            </label>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            type="submit"
          >
            Sign Up
          </button>

          <p className="mt-4 text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
