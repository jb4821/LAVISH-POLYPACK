'use client';
import { Box, Typography, Grid, Paper } from '@mui/material';

const statsData = [
  { label: 'Completed Tenders', value: '182+' },
  { label: 'Happy Clients', value: '2552+' },
  { label: 'Completed Year', value: '13+' },
];

const Stats = () => {
  return (
    <Box sx={{ py: 2 }}>
      <Typography
        variant='h4'
        component='h2'
        align='center'
        gutterBottom
        sx={{
          display: 'inline-block',
          backgroundColor: 'primary.main',
          color: 'white',
          px: 2,
          py: 1,
          mb: 6,
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        NUMBERS SPEAK FOR THEMSELVES
      </Typography>
      <Grid container spacing={2} justifyContent='center'>
        {statsData.map((stat) => (
          <Grid item key={stat.label} xs={12} sm={3} md={2}>
            <Paper
              elevation={3}
              sx={{
                textAlign: 'center',
                p: 2,
                backgroundColor: 'primary.main',
                color: 'white',
                borderRadius: '25px 0 25px 0',
              }}
            >
              <Typography variant='caption'>{stat.label}</Typography>
              <Typography
                variant='h6'
                component='p'
                sx={{ fontWeight: 'bold' }}
              >
                {stat.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Stats;
