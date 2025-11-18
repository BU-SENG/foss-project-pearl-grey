import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useDonation } from '../context/DonationContext'
import { useNavigate } from 'react-router-dom'

export default function DistributionForm(){
  const [recipient, setRecipient] = useState('')
  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [date, setDate] = useState(new Date().toISOString().slice(0,10))
  const { addDistribution, summary } = useDonation()
  const nav = useNavigate()

  function submit(e){
    e.preventDefault()
    // Basic check: ensure remaining >= quantity if possible
    const row = summary.rows.find(r => r.item === item)
    if(row && row.remaining < Number(quantity)){
      alert('Not enough remaining quantity for this item')
      return
    }
    addDistribution({ recipient, item, quantity, date })
    nav('/admin')
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, maxWidth: 500, width: '100%' }}>
        <Typography variant="h6" fontWeight={700} gutterBottom align="center">Record Distribution</Typography>
        <Box component="form" onSubmit={submit}>
          <TextField label="Recipient" fullWidth required value={recipient} onChange={e=>setRecipient(e.target.value)} sx={{ mb:2 }} />
          <TextField label="Item Name" fullWidth required value={item} onChange={e=>setItem(e.target.value)} sx={{ mb:2 }} />
          <TextField label="Quantity" type="number" fullWidth required value={quantity} onChange={e=>setQuantity(e.target.value)} sx={{ mb:2 }} inputProps={{ min: 1 }} />
          <TextField label="Date Given" type="date" fullWidth value={date} onChange={e=>setDate(e.target.value)} sx={{ mb:2 }} InputLabelProps={{ shrink: true }} />
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 1.5, py: 1.2, fontWeight: 600 }}>Record Distribution</Button>
        </Box>
      </Paper>
    </Box>
  )
}
