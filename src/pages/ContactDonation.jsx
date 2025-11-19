import React, { useState } from 'react';
import {
  Container, Paper, Typography, TextField, Button, Box, Alert, RadioGroup,
  FormControlLabel, Radio, FormLabel, CircularProgress
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ContactDonation() {
  const [type, setType] = useState('material'); // material or transfer
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // In real app: send to your backend/email (nodemailer, EmailJS, etc.)
    console.log('Donation notification:', data);

    // Simulating sending
    await new Promise(resolve => setTimeout(resolve, 1500));

    setLoading(false);
    setSuccess(true);

    setTimeout(() => navigate('/donate'), 3000);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 6 }}>
        <Paper elevation={8} sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, width: '100%' }}>
          <Typography variant="h4" fontWeight={800} textAlign="center" mb={2}>
            Notify Us About Your Donation
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" mb={4}>
            We’ll contact you within 24 hours to confirm and arrange
          </Typography>

          {success && <Alert severity="success" sx={{ mb: 3 }}>Thank you! We’ve received your message. Check your phone/email soon!</Alert>}

          <Box component="form" onSubmit={handleSubmit}>

            <FormLabel component="legend" sx={{ mb: 2, fontWeight: 600 }}>
              Type of Donation
            </FormLabel>
            <RadioGroup value={type} onChange={(e) => setType(e.target.value)} row sx={{ mb: 3 }}>
              <FormControlLabel value="material" control={<Radio />} label="Physical Items (Drop-off/Pickup)" />
              <FormControlLabel value="transfer" control={<Radio />} label="Bank Transfer / Cash" />
            </RadioGroup>

            <TextField label="Full Name" name="name" fullWidth required sx={{ mb: 3 }} />
            <TextField label="Phone Number" name="phone" type="tel" fullWidth required sx={{ mb: 3 }} />
            <TextField label="Email Address" name="email" type="email" fullWidth required sx={{ mb: 3 }} />

            {type === 'material' && (
              <TextField
                label="Items You're Donating (e.g. 10 shirts, 5kg rice, etc)"
                name="items"
                multiline
                rows={3}
                fullWidth
                required
                sx={{ mb: 3 }}
              />
            )}

            {type === 'transfer' && (
              <>
                <TextField label="Amount (₦)" name="amount" type="number" fullWidth required sx={{ mb: 3 }} />
                <TextField label="Date of Transfer" name="date" type="date" fullWidth InputLabelProps={{ shrink: true }} required sx={{ mb: 3 }} />
                <TextField label="Reference / Teller No (optional)" name="reference" fullWidth sx={{ mb: 3 }} />
              </>
            )}

            <TextField
              label="Preferred Contact Time or Address (for pickup)"
              name="message"
              multiline
              rows={2}
              fullWidth
              placeholder="e.g. I’m free weekends, or pickup from Ikeja"
              sx={{ mb: 4 }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={loading}
              sx={{
                bgcolor: 'black',
                py: 2,
                borderRadius: 3,
                fontSize: '1.1rem',
                '&:hover': { bgcolor: '#222' }
              }}
            >
              {loading ? <CircularProgress size={28} color="inherit" /> : 'Send Notification'}
            </Button>
          </Box>

          <Typography variant="body2" color="text.secondary" textAlign="center" mt={4}>
            We’ll reach out via phone or email to confirm and arrange everything
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}