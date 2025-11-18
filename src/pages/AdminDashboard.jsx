import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useDonation } from '../context/DonationContext'

export default function AdminDashboard(){
  const { summary } = useDonation()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: { xs: 2, sm: 4 }, minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>Admin Dashboard</Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }}>Quick links</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Button component={Link} to="/donate" variant="contained" color="primary" fullWidth sx={{ py: 1.5 }}>Record Donation</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Button component={Link} to="/distribute" variant="contained" color="secondary" fullWidth sx={{ py: 1.5 }}>Record Distribution</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Button component={Link} to="/inventory" variant="outlined" color="primary" fullWidth sx={{ py: 1.5 }}>View Inventory</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Button component={Link} to="/reports" variant="outlined" color="secondary" fullWidth sx={{ py: 1.5 }}>Reports</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: { xs: 2, sm: 3 }, minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'center', bgcolor: 'grey.50' }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>Summary</Typography>
          {summary.rows.length === 0 ? (
            <Typography color="text.secondary">No items yet</Typography>
          ) : (
            summary.rows.slice(0,5).map(r => (
              <Typography key={r.item} sx={{ mb: 1 }}>
                <b>{r.item}</b>: Received <b>{r.received}</b> • Distributed <b>{r.distributed}</b> • Remaining <b>{r.remaining}</b>
              </Typography>
            ))
          )}
        </Paper>
      </Grid>
    </Grid>
  )
}
