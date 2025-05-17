import { Link, useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Overview', path: '/dashboard/overview' },
    { name: 'Sites', path: '/dashboard/sites' },
    { name: 'Media', path: '/dashboard/media' },
    { name: 'Builder', path: '/dashboard/builder' },
    { name: 'Theme', path: '/dashboard/theme' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 z-20 bg-black opacity-50 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Sidebar navigation"
      >
        <div className="flex flex-col h-full">
            <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              flexGrow: { xs: 1, md: 0 },
              textAlign: { xs: 'center', md: 'left' },
              mx: { xs: 0, md: 2 },
              padding:"1.4rem",
              fontSize:"1.7rem"
            }}
          >
            Builder
          </Typography>

          <nav className="flex-1 px-2 py-4 space-y-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                  location.pathname === item.path
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setSidebarOpen(false)}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;