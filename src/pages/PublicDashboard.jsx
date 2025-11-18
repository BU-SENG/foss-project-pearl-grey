import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useDonation } from '../context/DonationContext'

export default function PublicDashboard(){
  const { summary } = useDonation()
  return (
    <Paper sx={{ p: { xs: 2, sm: 4 }, minHeight: 220 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>Public Donation Summary</Typography>
      <Typography variant="body2" sx={{ mb:2, color: 'text.secondary' }}>This read-only view shows summarized donation and distribution data for transparency.</Typography>
      {summary.rows.length === 0 ? (
        <Typography sx={{ mt:2 }}>No donation data yet.</Typography>
      ) : (
        <Box>
          {summary.rows.map(r => (
            <Paper key={r.item} sx={{ p: 1.5, mb: 1, bgcolor: 'grey.50', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography fontWeight={600}>{r.item}</Typography>
              <Typography variant="body2">Received <b>{r.received}</b> • Distributed <b>{r.distributed}</b> • Remaining <b>{r.remaining}</b></Typography>
            </Paper>
          ))}
        </Box>
      )}
    </Paper>
  )
}
