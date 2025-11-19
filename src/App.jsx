import React from 'react';
import {
  Routes,
  Route,
  Link,
  Navigate,
  useLocation
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useDonation } from './context/DonationContext';

import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import PublicDashboard from './pages/PublicDashboard';
import ContactDonation from './pages/ContactDonation';
import DistributionForm from './pages/DistributionForm';
import Inventory from './pages/Inventory';
import Reports from './pages/Reports';
import AboutUs from './pages/Aboutus';
import DonateScreen from './pages/DonateScreen';

export default function App() {
  const { isAdmin, user, logout } = useDonation();
  const location = useLocation();

  return (
    <>
      <CssBaseline />

      <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'white', color: 'black', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>

          <Box component={Link} to="/" sx={{ display: 'flex' }}>
            <img
              src="/src/images/CareBridge.png"
              alt="CareBridge Logo"
              style={{ height: '50px', width: 'auto', borderRadius: '12px' }}
            />
          </Box>

          <Stack direction="row" spacing={6} sx={{ flexGrow: 1, justifyContent: 'center' }}>
            <Typography component={Link} to="/" sx={navLinkStyle}>Home</Typography>
            <Typography component={Link} to="/aboutus" sx={navLinkStyle}>About Us</Typography>
            <Typography component={Link} to="/programs" sx={navLinkStyle}>Programs</Typography>
            <Typography component={Link} to={isAdmin ? "/admin" : "/login"} sx={navLinkStyle}>Admin</Typography>
          </Stack>

          <Stack direction="row" spacing={4} alignItems="center">

            {!user && (
              <Typography
                component={Link}
                to="/login"
                state={{ from: location }}
                sx={loginLinkStyle}
              >
                Login
              </Typography>
            )}

            {user && (
              <Typography
                onClick={logout}
                sx={logoutStyle}
              >
                Logout
              </Typography>
            )}

            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/donate"
              sx={{
                bgcolor: 'black',
                color: 'white',
                px: 5,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 'bold',
                fontSize: '1.1rem',
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': { bgcolor: '#222' },
              }}
            >
              Donate Now
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={
          <Box sx={{ bgcolor: 'white', py: { xs: 6, md: 10 }, px: 4 }}>
            <Container maxWidth="lg">
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>
                <Box>
                  <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4.8rem' }, fontWeight: 900, lineHeight: 1.1, color: '#111' }}>
                    Change lives<br />one donation<br />at a time
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 3, fontWeight: 300, color: '#444' }}>
                    Your generosity helps us reach those in need. Every item counts.
                  </Typography>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} mt={6}>
                    <Button variant="contained" size="large" component={Link} to="/donate" sx={{ bgcolor: 'black', px: 6, py: 2, fontSize: '1.3rem', borderRadius: 50, '&:hover': { bgcolor: '#333' } }}>
                      Donate Now
                    </Button>
                    <Button component={Link} to="/aboutus" variant="outlined" size="large">
                      Learn More
                    </Button>
                  </Stack>
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                  <img
                    src="/src/images/portrait-smiley-african-child.jpg"
                    alt="Happy child"
                    style={{ maxWidth: '90%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  />
                </Box>
              </Box>
            </Container>
          </Box>
        } />
      </Routes>

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Routes>
          <Route path="/" element={<PublicDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} />
          <Route path="/donate" element={<DonateScreen />} />
          <Route path="/distribute" element={isAdmin ? <DistributionForm /> : <Navigate to="/login" />} />
          <Route path="/inventory" element={isAdmin ? <Inventory /> : <Navigate to="/login" />} />
          <Route path="/reports" element={isAdmin ? <Reports /> : <Navigate to="/login" />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact-donation" element={<ContactDonation />} />
        </Routes>
      </Container>
    </>
  );
}

const navLinkStyle = {
  fontSize: '1.1rem',
  fontWeight: 500,
  color: 'black',
  textDecoration: 'none',
  '&:hover': {
    fontWeight: 700,
    textDecoration: 'underline',
  },
};

const loginLinkStyle = {
  fontSize: '1.1rem',
  fontWeight: 600,
  color: 'black',
  textDecoration: 'none',
  '&:hover': {
    fontWeight: 800,
    textDecoration: 'underline',
    color: '#d32f2f',
  },
  transition: 'all 0.2s',
};

const logoutStyle = {
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#d32f2f',
  cursor: 'pointer',
  '&:hover': {
    fontWeight: 800,
    textDecoration: 'underline',
  },
};