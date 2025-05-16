import { Routes, Route } from 'react-router-dom'
import Sites from '../pages/Dashboard/Sites'
import Media from '../pages/Dashboard/Media'
import Builder from '../pages/Dashboard/Builder'
import Theme from '../pages/Dashboard/Theme'
import Overview from '../pages/Dashboard/Overview'
import Navbar from '../components/Navbar'
import Signup2 from '../pages/Authentication/Signup2'
import Login from '../pages/Authentication/Login'
// import Profile from '../pages/Profile/Profile'
import Profile from '../pages/Authentication/EditProfile'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/navbar" element={<Navbar/>} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/sites" element={<Sites />} />
      <Route path="/media" element={<Media />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/" element={<Sites />} />

    // Authentication routes
    {/* <Route path='/signup' element={<Signup/>}/> */}
    <Route path='/signup2' element={<Signup2/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='profile' element={<Profile/>} />

    </Routes>
  )
}

export default AppRoutes
