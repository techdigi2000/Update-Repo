import React, { useState } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    address: "",
    street: "",
    pin: "",
    name: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    email: "",
    country: "",
    state: "",
    flat: "",
    paymentMethod: "",
    cashOnDelivery: false,
    comments: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate backend call
      await new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Backend error")), 2000)
      );
      setIsSubmitted(true);
    } catch (error) {
      setErrorMessage(
        "There was a problem with the backend. Please try again later."
      );
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-6">Order Now</h1>

      {errorMessage && (
        <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
          <p className="text-red-700 font-bold">{errorMessage}</p>
        </div>
      )}

      {isSubmitted ? (
        <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
          <p className="text-green-700 font-bold">
            Your order has been successful. It will be delivered soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-600"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-600"
              >
                Contact Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="flatno"
                className="block text-sm font-medium text-gray-600"
              >
                Flat Number
              </label>
              <input
                type="text"
                id="flatno"
                name="flatno"
                value={formData.flatno}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Payment Method
            </label>
            <div className="mt-2 flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="debit"
                  onChange={handleChange}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Debit</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  onChange={handleChange}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Credit</span>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormPage;
