import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Stack,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Link } from 'react-router-dom';

export default function DonateScreen() {
  return (
    <Box sx={{ bgcolor: '#f9f9f9', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, borderRadius: 4, bgcolor: 'white', boxShadow: 3 }}>

          <Box textAlign="center" mb={6}>
            <VolunteerActivismIcon sx={{ fontSize: 80, color: '#d32f2f', mb: 2 }} />
            <Typography variant="h3" fontWeight={900} color="#111">
              Make a Difference Today
            </Typography>
            <Typography variant="h6" color="text.secondary" mt={2}>
              Your donation — whether material items, cash, or bank transfer — helps us support vulnerable communities.
            </Typography>
          </Box>

          <Divider sx={{ my: 5 }} />

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            How Would You Like to Donate?
          </Typography>

          <Stack spacing={4} mt={4}>

            {/* Material Donation */}
            <Paper variant="outlined" sx={{ p: 4, borderRadius: 3, '&:hover': { borderColor: '#d32f2f' } }}>
              <Typography variant="h6" fontWeight="bold" color="#d32f2f">
                Donate Items (Clothes, Food, Books, etc.)
              </Typography>
              <Typography mt={2} color="text.secondary">
                Drop off new or gently used items at our center or arrange pickup.
              </Typography>

              <List dense>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="Clothing & Shoes" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="Non-perishable Food" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="School Supplies & Books" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="Hygiene Products" />
                </ListItem>
              </List>

              <Button
                component={Link}
                to="/contact-donation"
                variant="contained"
                size="large"
                fullWidth
                sx={{ mt: 3, bgcolor: '#d32f2f', '&:hover': { bgcolor: '#b71c1c' } }}
              >
                Arrange Drop-off / Pickup
              </Button>
            </Paper>

            {/* Cash / Bank Transfer */}
            <Paper variant="outlined" sx={{ p: 4, borderRadius: 3, '&:hover': { borderColor: '#1976d2' } }}>
              <Typography variant="h6" fontWeight="bold" color="#1976d2">
                Cash or Bank Transfer
              </Typography>
              <Typography mt={2} color="text.secondary">
                Make a secure bank transfer or bring cash to our office. All funds are tracked transparently.
              </Typography>

              <Box mt={3} p={3} bgcolor="#f5f5f5" borderRadius={2}>
                <Typography fontWeight="bold">Bank Details:</Typography>
                <Typography><strong>Bank:</strong> GTBank</Typography>
                <Typography><strong>Account Name:</strong> CareBridge Foundation</Typography>
                <Typography><strong>Account Number:</strong> 0812345678</Typography>
                <Typography><strong>Reference:</strong> "Donation - Your Name"</Typography>
              </Box>

              <Button
                component={Link}
                to="/contact-donation"
                variant="contained"
                size="large"
                fullWidth
                sx={{ mt: 3, bgcolor: '#1976d2', '&:hover': { bgcolor: '#1565c0' } }}
              >
                I’ve Made a Transfer → Notify Us
              </Button>
            </Paper>

          </Stack>

          <Box textAlign="center" mt={6}>
            <Typography variant="body1" color="text.secondary">
              All donations are recorded transparently. You can view public summaries <Link to="/">here</Link>.
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={2}>
              Questions? Email us at donations@carebridge.org
            </Typography>
          </Box>

        </Paper>
      </Container>
    </Box>
  );
}