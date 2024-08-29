import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate a form submission
    try {
      // Replace with actual API call
      const response = await fakeApiCall(formData);

      if (response.success) {
        setIsSubmitted(true);
        setError("");
      } else {
        setError("Account not created. Please try again.");
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
    <>
    <div className="max-w-4xl mx-auto px-4 py-8">
    <Breadcrumbs title="Sign In" prevLocation="/" />

    <div className="mt-8 md:w-2/3 lg:w-1/2 mx-auto">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold mb-6">Sign In</h1>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
            <p>{error}</p>
          </div>
        )}

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
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          type="submit"
        >
          Sign In
        </button>

        <p className="mt-4 text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  </div></>
    
  );
};

export default SignIn;
