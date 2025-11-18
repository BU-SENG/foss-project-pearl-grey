import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import Box from '@mui/material/Box'
import { useDonation } from '../context/DonationContext'

export default function Inventory(){
  const { summary } = useDonation()
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Paper sx={{ p: { xs: 2, sm: 4 }, width: '100%', maxWidth: 700 }}>
        <Typography variant="h6" fontWeight={700} gutterBottom align="center">Inventory</Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><b>Item</b></TableCell>
                <TableCell align="right"><b>Received</b></TableCell>
                <TableCell align="right"><b>Distributed</b></TableCell>
                <TableCell align="right"><b>Remaining</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {summary.rows.map(r => (
                <TableRow key={r.item}>
                  <TableCell>{r.item}</TableCell>
                  <TableCell align="right">{r.received}</TableCell>
                  <TableCell align="right">{r.distributed}</TableCell>
                  <TableCell align="right">{r.remaining}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}
