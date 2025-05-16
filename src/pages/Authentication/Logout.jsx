import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {

        // Call backend logout API with full URL from env
        await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {}, { withCredentials: true });

        // Clear frontend storage (token, user info, etc.)
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        sessionStorage.clear();

        // Redirect to login page
        navigate("/login");
      } catch (error) {
        console.error("Logout failed:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        sessionStorage.clear();
        navigate("/login");
      }
    };

    performLogout();
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
