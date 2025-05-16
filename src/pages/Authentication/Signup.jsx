import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../images/signup.png";
import glogo from "../../images/googleicon.png";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const alertTimeoutRef = useRef(null);

  const handleSignup = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (alertTimeoutRef.current) clearTimeout(alertTimeoutRef.current);
    setEmailError("");
    setShowAlert(false);

    if (!email.trim()) {
      setEmailError("Please enter your email address.");
      return;
    }

    if (!emailPattern.test(email)) {
      setAlertMessage("Please enter a valid email address.");
      setShowAlert(true);
      alertTimeoutRef.current = setTimeout(() => setShowAlert(false), 2000);
      return;
    }

    // Success flow
    setAlertMessage("Email added successfully.");
    setShowAlert(true);
    alertTimeoutRef.current = setTimeout(() => {
      setShowAlert(false);
      navigate("/s2");
    }, 1000);
  };

  return (
    <>
      {showAlert && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-md z-50 max-w-[90%] sm:max-w-md text-center flex items-center justify-center gap-2 ${
            alertMessage === "Email added successfully."
              ? "bg-green-100 border border-green-300 text-green-700"
              : "bg-red-100 border border-red-300 text-red-700"
          }`}
        >
          {alertMessage === "Email added successfully." ? (
            <FaCheckCircle className="text-green-600 text-xl" />
          ) : (
            <FaTimesCircle className="text-red-600 text-xl" />
          )}
          <span>{alertMessage}</span>
        </div>
      )}
      <div className="logotop mt-5">
        <Link to="#">
          <h1 className="text-[1.8rem] sm:text-[2.3rem] mt-2 ml-4 sm:ml-10 font-bold tracking-tight font-sans uppercase">
            Buildio
          </h1>
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-[87%] sm:w-[80%] lg:w-[70%] xl:w-[63%] mx-auto">
        <div className="text-center my-15">
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.4rem] font-semibold tracking-tight">
            Sign Up
          </h1>
          <h4 className="text-sm sm:text-base">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </h4>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          <div className="w-full lg:w-[44%]">
            <h1 className="text-[1.4rem] sm:text-[1.7rem] leading-8 font-bold">
              Design with us to unlock your creativity
            </h1>
            <h3 className="text-[0.95rem] sm:text-[1rem] leading-[1.4] mt-3 mb-4 text-gray-400 font-medium">
              Access to thousands of design resources and templates.
            </h3>
            <div className="text-center">
              <div className="border rounded-3xl p-2 flex items-center justify-center gap-3 hover:bg-gray-100 cursor-pointer">
                <img src={glogo} alt="Google Icon" className="w-6" />
                <h4 className="text-sm sm:text-base">
                  Sign up with your Google account
                </h4>
              </div>
            </div>
            <div className="relative mt-5 mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-b mt-1 border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-400 text-[15px]">
                  OR
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (e.target.value.trim()) setEmailError("");
                  }}
                  className={`border-[1.4px] ${
                    emailError ? "border-red-500" : "border-gray-500"
                  } px-3 py-2 outline-none w-full rounded-sm`}
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>

              <button
                onClick={handleSignup}
                className="w-full sm:w-[40%] bg-[#587EDE] text-white text-center py-2 rounded-sm cursor-pointer"
              >
                Sign Up
              </button>
            </div>

            {/* Terms */}
            <p className="text-[0.75rem] font-medium mt-3">
              By signing up, you agree to the{" "}
              <Link to="/termuse" className="underline text-[#587EDE]">
                Terms of use
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="underline text-[#587EDE]">
                Privacy Policy.
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-[57%] flex justify-center h-[99%]">
            <img src={img} alt="Signup Visual" className="max-w-full h-[90%]" />
          </div>
        </div>
      </div>
    </>
  );
}
