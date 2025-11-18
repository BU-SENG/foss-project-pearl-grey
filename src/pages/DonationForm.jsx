import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useDonation } from '../context/DonationContext'
import { useNavigate } from 'react-router-dom'

const categories = ['Clothing','Food','Hygiene','Stationery','Other']

export default function DonationForm(){
  const [donor, setDonor] = useState('')
  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [category, setCategory] = useState('Other')
  const [date, setDate] = useState(new Date().toISOString().slice(0,10))
  const { addDonation } = useDonation()
  const nav = useNavigate()

  function submit(e){
    e.preventDefault()
    addDonation({ donor, item, quantity, category, date })
    nav('/admin')
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, maxWidth: 500, width: '100%' }}>
        <Typography variant="h6" fontWeight={700} gutterBottom align="center">Record Material Donation</Typography>
        <Box component="form" onSubmit={submit}>
          <TextField label="Donor Name" fullWidth required value={donor} onChange={e=>setDonor(e.target.value)} sx={{ mb:2 }} />
          <TextField label="Item Name" fullWidth required value={item} onChange={e=>setItem(e.target.value)} sx={{ mb:2 }} />
          <TextField label="Quantity" type="number" fullWidth required value={quantity} onChange={e=>setQuantity(e.target.value)} sx={{ mb:2 }} inputProps={{ min: 1 }} />
          <TextField select label="Category" fullWidth value={category} onChange={e=>setCategory(e.target.value)} sx={{ mb:2 }}>
            {categories.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
          </TextField>
          <TextField label="Date Received" type="date" fullWidth value={date} onChange={e=>setDate(e.target.value)} sx={{ mb:2 }} InputLabelProps={{ shrink: true }} />
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 1.5, py: 1.2, fontWeight: 600 }}>Add Donation</Button>
        </Box>
      </Paper>
    </Box>
  )
}
