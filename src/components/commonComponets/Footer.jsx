import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import {
  LinkedIn,
  YouTube,
  Instagram,
  Twitter,
  Facebook,
  Language,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#f5f5f5', pt:10}}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
        <Grid container spacing={4} sx={{display:"flex",justifyContent:"center",gap:"14%"}}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Products
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" underline="hover" color="text.secondary">
                Domains
              </Link>
              <Link href="#" underline="hover" color="text.secondary">
                Hosting
              </Link>
              <Link href="#" underline="hover" color="text.secondary">
                Email
              </Link>
              <Link href="#" underline="hover" color="text.secondary">
                Website Builder
              </Link>
              {/* <Link href="#" underline="hover" color="text.secondary">
                WordPress
              </Link>
              <Link href="#" underline="hover" color="text.secondary">
                Online Shop
              </Link>
              <Link href="#" underline="hover" color="text.secondary">
                Office 365
              </Link>
              <Link href="#" underline="hover" color="text.secondary">
                VPS
              </Link> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" underline="hover" color="text.secondary">
                System Status
              </Link>
              <Link href="#" underline="hover" color="text.secondary">
                Prices
              </Link>
              <Link href="#" underline="hover" color="text.secondary">
                Whois
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" underline="hover" color="text.secondary">
                Help Center
              </Link>
              <Link href="#" underline="hover" color="text.secondary">
                Glossary
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" underline="hover" color="text.secondary">
                About Us
              </Link>
              <Link href="#" underline="hover" color="text.secondary">
                Careers
              </Link>
              <Link href="#" underline="hover" color="text.secondary">
                News
              </Link>
              <Link href="#" underline="hover" color="text.secondary">
                Partners
              </Link>
              <Link href="#" underline="hover" color="text.secondary">
                Contact Us
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: "center",
            alignItems: 'center',
            padding:"32px 91px 20px 91px",
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', gap: 1, }}>
            <IconButton href="#" sx={{ color: 'text.secondary' }}>
              <LinkedIn />
            </IconButton>
            <IconButton href="#" sx={{ color: 'text.secondary' }}>
              <YouTube />
            </IconButton>
            <IconButton href="#" sx={{ color: 'text.secondary' }}>
              <Instagram />
            </IconButton>
            <IconButton href="#" sx={{ color: 'text.secondary' }}>
              <Twitter />
            </IconButton>
            <IconButton href="#" sx={{ color: 'text.secondary' }}>
              <Facebook />
            </IconButton>
          </Box>
          {/* <FormControl sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Language sx={{ color: 'text.secondary' }} />
            <Select
              value="en"
              variant="standard"
              sx={{ color: 'text.secondary', '& .MuiSelect-select': { py: 0 } }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="fr">French</MenuItem>
            </Select>
          </FormControl> */}
        </Box>
      </Box>
      <Box sx={{ bgcolor: '#212121', color: 'white', py: 2 }}>
        <Box
          sx={{
            maxWidth: '1200px',
            mx: 'auto',
            px: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ color: '#42a5f5', fontWeight: 'bold' }}>
              ©
            </Typography>
            <Typography variant="body2">
              Builder.com {new Date().getFullYear()}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="#" underline="hover" color="inherit">
              Legal
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Terms
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Privacy Policy
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;