import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Email is required.");
      console.log("Email is required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    try {
      const response = await axios.post(" https://test.ezworks.ai/api", {
        email,
      });
      if (response.status === 200) {
        console.log(response.data);
        setMessage("Form Submitted");
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setError("Emails ending with @ez.works are not allowed.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" p-6 rounded-lg w-full max-w-lg">
      <input
        type="email"
        placeholder="Email Address"
        className="px-4 py-3 mr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300 w-[275px] h-[37px]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="px-6 py-1 bg-[#EA7B2C] hover:bg-orange-600 text-white rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95  shadow-md hover:shadow-lg h-[37px]">
        Contact Me
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}{" "}
      {/* Display error message */}
      {message && <p className="text-green-500 mt-2">{message}</p>}{" "}
      {/* Display success message */}
    </form>
  );
};

export default Form;
// Compare this snippet from ezworksfrontend/src/components/Card.jsx:
