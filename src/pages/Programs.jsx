import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const programs = [
  {
    id: 'education',
    title: 'Education Support',
    description: 'School supplies, uniforms and scholarships to help children stay in school.'
  },
  {
    id: 'health',
    title: 'Health & Hygiene',
    description: 'Basic medical aid, hygiene kits and awareness programmes for communities.'
  },
  {
    id: 'food',
    title: 'Food Security',
    description: 'Regular food distributions and emergency food relief.'
  },
  {
    id: 'livelihood',
    title: 'Livelihoods',
    description: 'Skills training and microgrants to help families become self-sufficient.'
  }
];

export default function Programs() {
  return (
    <Box sx={{ bgcolor: '#fafafa', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>Our Program</Typography>
        <Typography sx={{ color: '#555', mb: 6 }}>We run a range of programmes that target the root causes of poverty and vulnerability. Learn more about each programme below and how your donation helps.</Typography>

        <Grid container spacing={4}>
          {programs.map(p => (
            <Grid item xs={12} sm={6} md={3} key={p.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, boxShadow: '0 6px 18px rgba(0,0,0,0.06)' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{p.title}</Typography>
                  <Typography sx={{ color: '#666' }}>{p.description}</Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button size="small" component="a" href={`/programs/${p.id}`} sx={{ textTransform: 'none' }}>Learn more</Button>
                  <Button size="small" variant="contained" href="/donate" sx={{ ml: 'auto', bgcolor: 'black', color: 'white', '&:hover': { bgcolor: '#222' }, textTransform: 'none' }}>Donate</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
