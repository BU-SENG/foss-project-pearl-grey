import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useDonation } from '../context/DonationContext'

export default function Reports(){
  const { exportCSV } = useDonation()
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Paper sx={{ p: { xs: 2, sm: 4 }, maxWidth: 500, width: '100%' }}>
        <Typography variant="h6" fontWeight={700} gutterBottom align="center">Reports</Typography>
        <Typography sx={{ mt:1, mb:2, color: 'text.secondary', textAlign:'center' }}>Export donation and distribution records for offline use.</Typography>
        <Button fullWidth variant="contained" sx={{ mt:2, py: 1.2, fontWeight: 600 }} onClick={exportCSV}>Export CSV</Button>
        <Typography variant="caption" display="block" sx={{ mt:2, textAlign:'center' }}>For PDF, use your browser's print-to-PDF on this page.</Typography>
      </Paper>
    </Box>
  )
}
