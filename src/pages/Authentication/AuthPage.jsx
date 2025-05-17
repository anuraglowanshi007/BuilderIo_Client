import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Container,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import api from "../../api/api"; // api.js import karein

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [touched, setTouched] = useState({
    username: false,
    fullname: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    if (name === "username" && value && !validateUsername(value)) {
      error = "Username can only contain letters, numbers, and underscores.";
    } else if (name === "fullname" && value && !validateFullname(value)) {
      error = "Allow only alphabetic characters and spaces.";
    } else if (name === "email" && value && !validateEmail(value)) {
      error = "Invalid email format.";
    } else if (name === "password" && value && !validatePassword(value)) {
      error = "Password must be 8+ characters with letters, numbers & symbols.";
    } else if (
      name === "confirmPassword" &&
      value &&
      value !== form.password
    ) {
      error = "Passwords do not match.";
    }

    setErrors({ ...errors, [name]: error });
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (isLogin) {
      // Login logic
      try {
        const res = await api.post("/api/auth/login", {
          emailOrUsername: form.email,
          password: form.password,
        });
        console.log('Login response:', res.data); // Debug
        localStorage.setItem("accessToken", res.data.data.accessToken);
        alert("Login successful");
        navigate("/dashboard"); // Redirect to sites
      } catch (err) {
        console.error("Login failed", err.response?.data?.message || err.message);
        alert(err.response?.data?.message || "Login failed");
      } finally {
        setLoading(false);
      }
    } else {
      // Signup logic
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
      const confirmPasswordError =
        form.password !== form.confirmPassword
          ? "Passwords do not match."
          : "";

      const newErrors = {
        username: usernameError,
        fullname: fullnameError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      };

      setErrors(newErrors);
      setTouched({
        username: true,
        fullname: true,
        email: true,
        password: true,
        confirmPassword: true,
      });

      const isValid =
        !usernameError &&
        !fullnameError &&
        !emailError &&
        !passwordError &&
        !confirmPasswordError;

      if (!isValid) {
        setLoading(false);
        return;
      }

      try {
        const response = await api.post("/api/auth/signup", {
          username: form.username,
          fullname: form.fullname,
          email: form.email,
          password: form.password,
        });
        console.log('Signup response:', response.data); // Debug
        alert("Signup successful!");
        setForm({
          username: "",
          fullname: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setTouched({
          username: false,
          fullname: false,
          email: false,
          password: false,
          confirmPassword: false,
        });
        setErrors({
          username: "",
          fullname: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setIsLogin(true); // Switch to login mode
      } catch (error) {
        console.error("Signup error:", error);
        const message =
          error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          "An error occurred. Please try again.";
        alert("Signup failed: " + message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://buildio-server.onrender.com/api/auth/google";
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setForm({
      username: "",
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({
      username: "",
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setTouched({
      username: false,
      fullname: false,
      email: false,
      password: false,
      confirmPassword: false,
    });
    setKeepLoggedIn(false);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
        bgcolor: "#f5f7fb",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          maxWidth: 900,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
          overflow: "hidden",
        }}
      >
        {/* Left Panel */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            bgcolor: "#3b82f6",
            color: "white",
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/diagmonds-light.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.5s ease-in-out",
            transform: { md: isLogin ? "translateX(0)" : "translateX(100%)" },
            order: { xs: 1, md: 1 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                border: "2px solid white",
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              Buildio
            </Typography>
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              mb: 2,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            {isLogin ? "Welcome Back" : "Join Buildio"}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              opacity: 0.9,
              mb: 1,
              fontSize: { xs: "0.75rem", md: "0.875rem" },
            }}
          >
            {isLogin ? "Nice to see you again" : "Create your account today"}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              textAlign: "center",
              mt: 2,
              opacity: 0.8,
              maxWidth: "300px",
              fontSize: { xs: "0.625rem", md: "0.75rem" },
            }}
          >
            {isLogin
              ? "Log in to access your dashboard and continue building."
              : "Sign up to start building with Buildio's powerful tools."}
          </Typography>
        </Box>

        {/* Right Panel - Form */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            p: { xs: 3, sm: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transition: "transform 0.5s ease-in-out",
            transform: { md: isLogin ? "translateX(0)" : "translateX(-100%)" },
            order: { xs: 2, md: 2 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#1e3a8a",
              fontWeight: 600,
              mb: 1,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            {isLogin ? "Login Account" : "Sign Up"}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "#6b7280",
              mb: 3,
              fontSize: { xs: "0.625rem", md: "0.75rem" },
            }}
          >
            {isLogin
              ? "Enter your credentials to access your account."
              : "Create a new account to get started with Buildio."}
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            {!isLogin && (
              <>
                <TextField
                  label="Username"
                  name="username"
                  fullWidth
                  size="small"
                  variant="outlined"
                  value={form.username}
                  onChange={handleChange}
                  onBlur={() => setTouched({ ...touched, username: true })}
                  error={touched.username && !!errors.username}
                  helperText={touched.username && errors.username}
                  required
                  disabled={loading}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "4px" } }}
                />
                <TextField
                  label="Full Name"
                  name="fullname"
                  fullWidth
                  size="small"
                  variant="outlined"
                  value={form.fullname}
                  onChange={handleChange}
                  onBlur={() => setTouched({ ...touched, fullname: true })}
                  error={touched.fullname && !!errors.fullname}
                  helperText={touched.fullname && errors.fullname}
                  required
                  disabled={loading}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "4px" } }}
                />
              </>
            )}
            <TextField
              label={isLogin ? "Email or Username" : "Email"}
              name="email"
              fullWidth
              size="small"
              variant="outlined"
              value={form.email}
              onChange={handleChange}
              onBlur={() => setTouched({ ...touched, email: true })}
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              required
              disabled={loading}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "4px" } }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              size="small"
              variant="outlined"
              value={form.password}
              onChange={handleChange}
              onBlur={() => setTouched({ ...touched, password: true })}
              error={touched.password && !!errors.password}
              helperText={
                touched.password &&
                (errors.password || "Use 8+ characters with letters, numbers & symbols")
              }
              required
              disabled={loading}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "4px" } }}
            />
            {!isLogin && (
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                fullWidth
                size="small"
                variant="outlined"
                value={form.confirmPassword}
                onChange={handleChange}
                onBlur={() => setTouched({ ...touched, confirmPassword: true })}
                error={touched.confirmPassword && !!errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
                required
                disabled={loading}
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "4px" } }}
              />
            )}
            {isLogin && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={keepLoggedIn}
                      onChange={(e) => setKeepLoggedIn(e.target.checked)}
                      disabled={loading}
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
                    >
                      Keep me logged in
                    </Typography>
                  }
                />
                <Link
                  component={RouterLink}
                  to="/forgotpassword"
                  sx={{
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                    color: "#3b82f6",
                    textDecoration: "none",
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>
            )}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{
                mt: 3,
                bgcolor: "#3b82f6",
                borderRadius: "50px",
                py: 1.2,
                fontWeight: 600,
                textTransform: "uppercase",
                "&:hover": { bgcolor: "#2563eb" },
                fontSize: { xs: "0.875rem", md: "1rem" },
              }}
            >
              {loading ? (isLogin ? "Logging in..." : "Registering...") : (isLogin ? "Login" : "Register")}
            </Button>
            <Button
              onClick={handleGoogleLogin}
              variant="outlined"
              fullWidth
              disabled={loading}
              sx={{
                mt: 1,
                borderColor: "#3b82f6",
                color: "#3b82f6",
                borderRadius: "50px",
                py: 1.2,
                fontWeight: 600,
                textTransform: "none",
                "&:hover": { bgcolor: "#e6f0ff", borderColor: "#2563eb" },
                fontSize: { xs: "0.75rem", md: "0.875rem" },
              }}
            >
              Continue with Google
            </Button>
            {!isLogin && (
              <Typography
                variant="caption"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontSize: { xs: "0.625rem", md: "0.75rem" },
                }}
              >
                By signing up, you agree to the{" "}
                <Link
                  component={RouterLink}
                  to="/termuse"
                  sx={{ color: "#3b82f6", textDecoration: "none" }}
                >
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link
                  component={RouterLink}
                  to="/privacy"
                  sx={{ color: "#3b82f6", textDecoration: "none" }}
                >
                  Privacy Policy
                </Link>.
              </Typography>
            )}
            <Button
              onClick={toggleAuthMode}
              disabled={loading}
              sx={{
                mt: 2,
                color: "#3b82f6",
                fontSize: { xs: "0.75rem", md: "0.85rem" },
                textTransform: "none",
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AuthPage;