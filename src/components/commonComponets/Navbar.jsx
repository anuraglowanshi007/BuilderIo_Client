import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'About', 'Contact', 'Testimonials', 'Blog'];

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => setIsDrawerOpen(true);
  const handleCloseDrawer = () => setIsDrawerOpen(false);

  return (
    <AppBar position="sticky" sx={{ bgcolor: "transparent", boxShadow: 'none', position: "static" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpenDrawer}>
              <MenuIcon sx={{ color: '#6B48FF' }} />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontWeight: 'bold',
              color: '#6B48FF',
              textDecoration: 'none',
              flexGrow: { xs: 1, md: 0 }
            }}
          >
            builder
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {pages.map((page) => (
              <Typography
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                sx={{
                  textDecoration: 'none',
                  color: 'text.primary',
                  '&:hover': { color: '#6B48FF' },
                }}
              >
                {page}
              </Typography>
            ))}
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{
                bgcolor: '#6B48FF',
                color: 'white',
                textTransform: 'none',
                '&:hover': { bgcolor: '#5438CC' },
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleCloseDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: '#fff',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#6B48FF' }}>
            builder
          </Typography>
          <List>
            {pages.map((page) => (
              <ListItem
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                onClick={handleCloseDrawer}
              >
                <ListItemText
                  primary={page}
                  primaryTypographyProps={{
                    sx: { textTransform: 'capitalize', fontWeight: 500 },
                  }}
                />
              </ListItem>
            ))}
            <ListItem
              component={Link}
              to="/login"
              onClick={handleCloseDrawer}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#6B48FF',
                  color: 'white',
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#5438CC' },
                  width: '100%',
                }}
              >
                Login
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;