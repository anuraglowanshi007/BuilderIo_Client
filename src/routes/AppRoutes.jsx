<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import Sites from '../pages/Dashboard/Sites';
import Media from '../pages/Dashboard/Media';
import Builder from '../pages/Dashboard/Builder';
import Theme from '../pages/Dashboard/Theme';
import Overview from '../pages/Dashboard/Overview';
=======
import { Routes, Route } from 'react-router-dom'
import Sites from '../pages/Dashboard/Sites'
import Media from '../pages/Dashboard/Media'
import Builder from '../pages/Dashboard/Builder'
import Theme from '../pages/Dashboard/Theme'
import Overview from '../pages/Dashboard/Overview'
import Navbar from '../components/Navbar'
import SignUp from '../pages/Authentication/Signup'
import Login from '../pages/Authentication/Login'
// import Profile from '../pages/Profile/Profile'
import Profile from '../pages/Authentication/EditProfile'
import Logout from '../pages/Authentication/Logout'
>>>>>>> 2070838c91857b8d1111fe4850583abb95654f44

const AppRoutes = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="overview" element={<Overview />} />
      <Route path="sites" element={<Sites />} />
      <Route path="media" element={<Media />} />
      <Route path="builder" element={<Builder />} />
      <Route path="theme" element={<Theme />} />
      <Route path="/" element={<Overview />} />
=======
      <Route path="/navbar" element={<Navbar/>} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/sites" element={<Sites />} />
      <Route path="/media" element={<Media />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/" element={<Sites />} />

    // Authentication routes
    {/* <Route path='/signup' element={<Signup/>}/> */}
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='profile' element={<Profile/>} />
    <Route path='/logout' element={<Logout/>} />
    

>>>>>>> 2070838c91857b8d1111fe4850583abb95654f44
    </Routes>
  );
};

export default AppRoutes;