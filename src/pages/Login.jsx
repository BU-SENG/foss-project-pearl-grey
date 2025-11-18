import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { useDonation } from '../context/DonationContext'

export default function Login(){
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useDonation()
  const nav = useNavigate()

  function submit(e){
    e.preventDefault()
    if(login(password)){
      nav('/admin')
    } else {
      setError('Invalid password')
    }
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Paper elevation={4} sx={{ p: { xs: 2, sm: 4 }, maxWidth: 400, width: '100%' }}>
        <Typography variant="h5" gutterBottom align="center" fontWeight={700}>Admin Login</Typography>
        <form onSubmit={submit}>
          <TextField fullWidth label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} margin="normal" autoFocus />
          {error && <Typography color="error">{error}</Typography>}
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2, py: 1.2, fontWeight: 600 }}>Login</Button>
        </form>
        <Typography variant="caption" display="block" sx={{ mt:2, textAlign:'center' }}>Hint: use password <b>admin</b> for demo</Typography>
      </Paper>
    </Box>
  )
}
