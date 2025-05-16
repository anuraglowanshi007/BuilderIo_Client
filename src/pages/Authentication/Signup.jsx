import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import axiosInstance from "../../Api/AxiosInstance";

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    username: false,
    fullname: false,
    email: false,
    password: false,
  });

  // Validation functions
  const validateUsername = (username) =>
    /^[A-Za-z0-9_]+$/.test(username.trim());
  const validateFullname = (fullname) => /^[A-Za-z\s]*$/.test(fullname.trim());
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (pwd) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pwd);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    let error = "";
    if (name === "username" && !validateUsername(value)) {
      error = "Username can only contain letters, numbers, and underscores.";
    } else if (name === "fullname" && !validateFullname(value)) {
      error = "Allow only alphabetic characters and spaces.";
    } else if (name === "email" && !validateEmail(value)) {
      error = "Invalid email format.";
    } else if (name === "password" && !validatePassword(value)) {
      error = "Password must be 8+ characters with letters, numbers & symbols.";
    }

    setErrors({ ...errors, [name]: error });
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usernameError = !validateUsername(form.username)
      ? "Username can only contain letters, numbers, and underscores."
      : "";
    const fullnameError = !validateFullname(form.fullname)
      ? "Allow only alphabetic characters and spaces."
      : "";
    const emailError = !validateEmail(form.email)
      ? "Invalid email format."
      : "";
    const passwordError = !validatePassword(form.password)
      ? "Password must be 8+ characters with letters, numbers & symbols."
      : "";

    const newErrors = {
      username: usernameError,
      fullname: fullnameError,
      email: emailError,
      password: passwordError,
    };

    setErrors(newErrors);
    setTouched({
      username: true,
      fullname: true,
      email: true,
      password: true,
    });

    const isValid =
      !usernameError && !fullnameError && !emailError && !passwordError;

    if (!isValid) {
      return;
    }

    // try {
    //   const response = await axios.post(
    //     "https://buildio-server.onrender.com/api/auth/signup",

    //     {
    //       username: form.username,
    //       fullname: form.fullname,
    //       email: form.email,
    //       password: form.password,
    //     }
    //   );
try{
const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/auth/signup`,
  {
    username: form.username,
    fullname: form.fullname,
    email: form.email,
    password: form.password,
  }
);

      console.log("Signup successful:", response.data);
      alert("Signup successful!");

      setForm({ username: "", fullname: "", email: "", password: "" });
      setTouched({
        username: false,
        fullname: false,
        email: false,
        password: false,
      });
      setErrors({ username: "", fullname: "", email: "", password: "" });
    } catch (error) {
      console.error("Signup error:", error);

      // Extract message safely
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "An error occurred. Please try again.";

      alert("Signup failed: " + message);
    }
  };

  return (
    <div>
      <div className="logotop px-4 sm:px-10 mt-2">
        <Link to="#">
          <h1 className="text-[1.8rem] sm:text-[2.3rem] font-bold tracking-tight font-sans uppercase">
            Buildio
          </h1>
        </Link>
      </div>

      <div className="w-[80%] sm:w-[80%] md:w-[40%] xl:w-[30%] mx-auto">
        <div className="text-center my-15">
          <h1 className="text-[2rem] sm:text-[2.3rem] font-semibold tracking-tight">
            Create an account
          </h1>
          <h4 className="text-sm sm:text-base">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Username */}
            <div>
              <h4 className="text-base font-medium text-gray-500 mb-1">
                Username
              </h4>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                onBlur={() => setTouched({ ...touched, username: true })}
                placeholder="Enter your username"
                required
                className={`border p-2 w-full outline-none rounded-lg text-sm ${
                  errors.username && touched.username
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              />
              {errors.username && touched.username && (
                <p className="text-red-600 text-sm mt-1 font-medium">
                  {errors.username}
                </p>
              )}
            </div>

            {/* Full Name */}
            <div>
              <h4 className="text-base font-medium text-gray-500 mb-1">
                Full Name
              </h4>
              <input
                type="text"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                onBlur={() => setTouched({ ...touched, fullname: true })}
                placeholder="Enter your full name"
                required
                className={`border p-2 w-full outline-none rounded-lg text-sm ${
                  errors.fullname && touched.fullname
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              />
              {errors.fullname && touched.fullname && (
                <p className="text-red-600 text-sm mt-1 font-medium">
                  {errors.fullname}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <h4 className="text-base font-medium text-gray-500 mb-1">
                Email
              </h4>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={() => setTouched({ ...touched, email: true })}
                placeholder="Enter your email address"
                required
                className={`border p-2 w-full outline-none rounded-lg text-sm ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              />
              {errors.email && touched.email && (
                <p className="text-red-600 text-sm mt-1 font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <h4 className="text-base font-medium text-gray-500 mb-1">
                Password
              </h4>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                onBlur={() => setTouched({ ...touched, password: true })}
                placeholder="Enter your password"
                required
                className={`border p-2 w-full outline-none rounded-lg text-sm ${
                  errors.password && touched.password
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              />
              <h4
                className={`text-[12px] font-bold mt-1 ${
                  !errors.password && touched.password
                    ? "text-green-600"
                    : touched.password
                    ? "text-red-600"
                    : "text-gray-800"
                }`}
              >
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </h4>
              {touched.password &&
                (errors.password ? (
                  <p className="text-red-600 text-sm mt-1 font-medium">
                    {errors.password}
                  </p>
                ) : (
                  <p className="text-green-700 text-sm mt-1 font-medium">
                    Password is valid and ready to use
                  </p>
                ))}
            </div>

            <button
              type="submit"
              className="w-full bg-[#587EDE] text-white text-center py-2 rounded-lg font-semibold text-base hover:bg-[#476cc2] transition-colors cursor-pointer"
            >
              Create an Account
            </button>
            <p className="text-[0.75rem] font-medium">
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
        </form>
      </div>
    </div>
  );
}
