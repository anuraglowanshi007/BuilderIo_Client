import { Routes, Route } from 'react-router-dom';
import Sites from '../pages/Dashboard/Sites';
import Media from '../pages/Dashboard/Media';
import Builder from '../pages/Dashboard/Builder';
import Theme from '../pages/Dashboard/Theme';
import Overview from '../pages/Dashboard/Overview';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="overview" element={<Overview />} />
      <Route path="sites" element={<Sites />} />
      <Route path="media" element={<Media />} />
      <Route path="builder" element={<Builder />} />
      <Route path="theme" element={<Theme />} />
      <Route path="/" element={<Overview />} />
    </Routes>
  );
};

export default AppRoutes;