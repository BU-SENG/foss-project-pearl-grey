import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useDonation } from './context/DonationContext';

import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import PublicDashboard from './pages/PublicDashboard';
import DonationForm from './pages/DonationForm';
import DistributionForm from './pages/DistributionForm';
import Inventory from './pages/Inventory';
import Reports from './pages/Reports';

export default function App() {
  const { isAdmin, logout } = useDonation();

  return (
    <>
      <CssBaseline />

      {/* CUSTOM MODERN HEADER */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'white',
          color: 'black',
          borderBottom: '1px solid #e0e0e0',
          borderRadius: 0,
          overflow:'hidden',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
          {/* Left: Logo */}
          <Box component={Link} to="/">
            <img
  src="/src/images/CareBridge.png"
  alt="Material Donation Tracker Logo"
  style={{
    height: '50px',           // taller than 200px
    width: '200px',            // set exact width for perfect rectangle
    objectFit: 'contain',      // keeps proportions but fills the box nicely
    backgroundColor: '#ffffff',      // optional: adds inner "frame" so it looks like a proper rectangle card
    borderRadius: '12px',
  }}
/>
          </Box>

          {/* Center: Navigation Links */}
          <Stack direction="row" spacing={6} sx={{ flexGrow: 1, justifyContent: 'center' }}>
            <Button component={Link} to="/" sx={{ fontSize: '1.1rem', fontWeight: 500, color: 'black' }}>
              Home
            </Button>
            <Button component={Link} to="/about" sx={{ pathname: '/' }} sx={{ fontSize: '1.1rem', fontWeight: 500, color: 'black' }}>
              About Us
            </Button>
            <Button component={Link} to={isAdmin ? "/admin" : "/login"} sx={{ fontSize: '1.1rem', fontWeight: 500, color: 'black' }}>
              Admin
            </Button>
            <Button component={Link} to={isAdmin ? "/admin" : "/login"} sx={{ fontSize: '1.1rem', fontWeight: 500, color: 'black' }}>
              Programs
            </Button>
          </Stack>

          {/* Right: Donate Button */}
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/donate"
            sx={{
              bgcolor: 'black',
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '1.1rem',
              boxShadow: 'none',
              '&:hover': { bgcolor: '#111' },
            }}
          >
            Donate Now
          </Button>
        </Toolbar>
      </AppBar>

      {/* HERO SECTION - Only show on Home page */}
      <Routes>
        <Route
          path="/"
          element={
            <Box
  sx={{
    bgcolor: 'white',
    py: { xs: 4, md: 8 },
    px: 4,
  }}
>

              <Container maxWidth="lg">
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: 8,
                  }}
                >
                  {/* Left: Text & Buttons */}
                  <Box>
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: { xs: '2.8rem', md: '4.5rem' },
                        fontWeight: 900,
                        lineHeight: 1.1,
                        color: '#111',
                      }}
                    >
                      Change lives<br />one donation<br />at a time
                    </Typography>

                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: { xs: '1.8rem'},
                        fontWeight: 100,
                        lineHeight: 1.1,
                        color: '#111',
                      }}
                    >
                      Change lives one donation at a time track donations with ease
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} mt={6}>
                      <Button
  variant="contained"
  size="large"
  component={Link}
  to="/donate"
  disableElevation
  sx={{
    bgcolor: 'black',
    color: 'white',
    px: 6,
    py: 2,
    fontSize: '1.3rem',
    fontWeight: 'bold',
    borderRadius: 40,
    '&:hover': { bgcolor: '#222' },
  }}
>
  Donate Now
</Button>


                    
                      <Button
                        component={Link}
                        to="/demo"
                        sx={{
                          fontSize: '1.2rem',
                          fontWeight: 600,
                          color: 'black',
                          textDecoration: 'underline',
                          '&:hover': { textDecoration: 'none' },
                        }}
                      >
                        See demo
                      </Button>
                    </Stack>
                  </Box>

                  {/* Right: Hero Image */}
                  <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                    <img
                      src="/src/images/portrait-smiley-african-child.jpg"
                      alt="People helping each other"
                      style={{
                        maxWidth: '80%',
                        height: 'auto',
                        borderRadius: '20px',
                      }}
                    />
                  </Box>
                </Box>
              </Container>
            </Box>
          }
        />
      </Routes>

      {/* MAIN CONTENT - All other routes */}
      <Container
        maxWidth="lg"
        sx={{
          mt: 6,
          mb: 8,
          minHeight: '70vh',
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: 3,
          p: { xs: 3, md: 5 },
        }}
      >
        <Routes>
          <Route path="/" element={<PublicDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} />
          <Route path="/donate" element={isAdmin ? <DonationForm /> : <PublicDashboard />} />
          <Route path="/distribute" element={isAdmin ? <DistributionForm /> : <Navigate to="/login" />} />
          <Route path="/inventory" element={isAdmin ? <Inventory /> : <Navigate to="/login" />} />
          <Route path="/reports" element={isAdmin ? <Reports /> : <Navigate to="/login" />} />
          {/* Optional: Add /about or /demo pages later */}
        </Routes>
      </Container>
    </>
  );
}