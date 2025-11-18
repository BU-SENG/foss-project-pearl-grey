import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { useDonation } from './context/DonationContext'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import PublicDashboard from './pages/PublicDashboard'
import DonationForm from './pages/DonationForm'
import DistributionForm from './pages/DistributionForm'
import Inventory from './pages/Inventory'
import Reports from './pages/Reports'

export default function App(){
  const { isAdmin, logout } = useDonation()

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" color="primary" elevation={2} sx={{ mb: 2 }}>
        <Toolbar sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
            Material Donation Tracker
          </Typography>
          <Button color="inherit" component={Link} to="/">Public</Button>
          {isAdmin ? (
            <>
              <Button color="inherit" component={Link} to="/admin">Admin</Button>
              <Button color="inherit" onClick={logout}>Logout</Button>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">Admin Login</Button>
          )}
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4, bgcolor: 'background.default', minHeight: '80vh', borderRadius: 3, boxShadow: 2, p: { xs: 1, sm: 3 } }}>
        <Routes>
          <Route path="/" element={<PublicDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} />
          <Route path="/donate" element={isAdmin ? <DonationForm /> : <Navigate to="/login" />} />
          <Route path="/distribute" element={isAdmin ? <DistributionForm /> : <Navigate to="/login" />} />
          <Route path="/inventory" element={isAdmin ? <Inventory /> : <Navigate to="/login" />} />
          <Route path="/reports" element={isAdmin ? <Reports /> : <Navigate to="/login" />} />
        </Routes>
      </Container>
    </>
  )
}
