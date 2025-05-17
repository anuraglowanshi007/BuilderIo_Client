import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Layout from './components/Layout';
import Signup2 from './pages/Authentication/Signup2';
import Login from './pages/Authentication/Login';
import Profile from './pages/Authentication/EditProfile';
import Home from './pages/mainpages/Home';
import Navbar from './components/commonComponets/Navbar.jsx';
import About from './pages/mainpages/About.jsx';
import Footer from './components/commonComponets/Footer.jsx';
import AuthPage from './pages/Authentication/AuthPage.jsx';
import ForgotPassword from './pages/Authentication/ForgotPassword.jsx';

function AppWrapper() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup2', "/profile"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname) || location.pathname.startsWith('/dashboard');

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard/*"
          element={
            <Layout>
              <AppRoutes />
            </Layout>
          }
        />
      </Routes>
      {!shouldHideNavbar && <Footer />}
    </>
  );
}

export default AppWrapper;