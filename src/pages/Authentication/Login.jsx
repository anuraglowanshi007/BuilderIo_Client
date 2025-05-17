import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api"; // api.js import karein
import glogo from "../../images/googleicon.png";
import flogo from "../../images/facebook icon.png";
import gmlogo from "../../images/emailicon.png";

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/api/auth/login", { emailOrUsername, password });
      localStorage.setItem("accessToken", res.data.data.accessToken);
      alert("Login successful");
      navigate("/dashboard/sites"); // Dashboard ke sites route par redirect
    } catch (err) {
      console.error("Login failed", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://buildio-server.onrender.com/api/auth/google";
  };

  return (
    <>
      <div className="logotop flex justify-between items-center">
        <Link to="#">
          <h1 className="text-[1.8rem] sm:text-[2.3rem] mt-2 ml-4 sm:ml-10 font-bold tracking-tight font-sans uppercase">
            Buildio
          </h1>
        </Link>
        <Link to="/signup2" className="mr-9 hover:text-[#587EDE] hover:underline">
          Create an account
        </Link>
      </div>

      <div className="w-[80%] sm:w-[80%] md:w-[80%] xl:w-[63%] mx-auto">
        <div className="text-center my-15">
          <h1 className="hidden md:block text-[1.8rem] sm:text-[2.5rem] md:text-[3.4rem] font-medium tracking-tight">
            Login
          </h1>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="sectionA w-full md:w-[50%] px-4 md:px-6 py-6 md:py-10">
            <h1 className="text-center text-[1.5rem] md:text-[1.8rem] font-medium mb-4">
              Login
            </h1>
            <div>
              <form onSubmit={handleLogin}>
                <div className="my-2">
                  <h4 className="text-sm font-medium text-gray-500">Email or Username</h4>
                  <input
                    type="text"
                    required
                    value={emailOrUsername}
                    onChange={(e) => setEmailOrUsername(e.target.value)}
                    className="border p-2 w-full outline-none border-gray-400 rounded-lg"
                    disabled={loading}
                  />
                </div>
                <div className="my-3">
                  <h4 className="text-sm font-medium text-gray-500">Password</h4>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 w-full outline-none border-gray-400 rounded-lg"
                    disabled={loading}
                  />
                  <Link to="/forgot">
                    <h4 className="text-sm font-medium text-[#587EDE]">Forgot Password?</h4>
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full mt-2 bg-[#587EDE] text-white text-center py-2 rounded-full cursor-pointer disabled:bg-[#a0b8ff]"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
                {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
              </form>
            </div>
          </div>

          <div className="relative hidden md:flex items-center justify-center w-[1px] mx-4 bg-gray-300">
            <span className="absolute bg-white px-2 text-gray-500 text-sm">OR</span>
          </div>

          <div className="sectionB w-full md:w-[50%] my-auto px-3 md:px-8 py-6 md:py-10">
            <div className="text-center w-full md:w-[100%] mx-auto space-y-4">
              <div
                onClick={handleGoogleLogin}
                className="border rounded-full py-2 flex items-center justify-center gap-3 hover:bg-gray-100 cursor-pointer"
              >
                <img src={glogo} alt="Google Icon" className="w-6" />
                <h4 className="text-sm sm:text-base">Continue with Google</h4>
              </div>
              <div className="border rounded-full py-2 flex items-center justify-center gap-3 hover:bg-gray-100 cursor-pointer">
                <img src={flogo} alt="Facebook Icon" className="w-6" />
               Destino
                <h4 className="text-sm sm:text-base">Continue with Facebook</h4>
              </div>
              <div className="border rounded-full py-2 flex items-center justify-center gap-3 hover:bg-gray-100 cursor-pointer">
                <img src={gmlogo} alt="Email Icon" className="w-6" />
                <h4 className="text-sm sm:text-base">Sign up with email</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}