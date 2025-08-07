'use client';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { useState, useEffect, useRef } from 'react';

const statsData = [
  { label: 'Completed Tenders', value: 182, suffix: '+', icon: '📋' },
  { label: 'Happy Clients', value: 1000, suffix: '+', icon: '😊' },
  { label: 'Completed Years', value: 5, suffix: '+', icon: '🏆' },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(statsData.map(() => 0));
  const statsRef = useRef(null);

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const animationDuration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = animationDuration / steps;

    statsData.forEach((stat, index) => {
      const increment = stat.value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(increment * currentStep, stat.value);

        setAnimatedValues((prev) => {
          const newValues = [...prev];
          newValues[index] = Math.floor(currentValue);
          return newValues;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <Box
      ref={statsRef}
      sx={{
        py: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 4 },
        background: 'linear-gradient(135deg, #fffaf3 0%, #e0e0e0 100%)',
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background:
            'linear-gradient(90deg, #bdbdbd 0%, #e0e0e0 50%, #bdbdbd 100%)',
        },
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage:
            'radial-gradient(circle at 25% 25%, #e67e22 2px, transparent 2px)',
          backgroundSize: '40px 40px',
        }}
      />

      <Typography
        variant='h4'
        component='h2'
        align='center'
        sx={{
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
          fontWeight: 700,
          mb: 5,
          position: 'relative',
          color: '#111111',
          letterSpacing: '-0.02em',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 80,
            height: 4,
            background: 'linear-gradient(90deg, #bdbdbd, #e0e0e0)',
            borderRadius: 2,
          },
        }}
      >
        NUMBERS SPEAK FOR THEMSELVES
      </Typography>

      <Grid container spacing={{ xs: 3, sm: 4 }} justifyContent='center'>
        {statsData.map((stat, index) => (
          <Grid item key={stat.label} xs={12} sm={4} md={4}>
            <Paper
              elevation={0}
              sx={{
                textAlign: 'center',
                p: { xs: 3, sm: 4 },
                height: { xs: 160, sm: 180 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #ffffff 0%, #fffaf3 100%)',
                border: '2px solid #f5f5f5',
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transform: isVisible
                  ? 'translateY(0) scale(1)'
                  : 'translateY(50px) scale(0.9)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${
                  index * 200
                }ms`,
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow: '0 20px 40px rgba(17, 17, 17, 0.08)',
                  border: '2px solid #bdbdbd',
                  '& .stat-icon': {
                    transform: 'scale(1.2) rotate(10deg)',
                  },
                  '& .stat-value': {
                    background:
                      'linear-gradient(135deg, #bdbdbd 0%, #e0e0e0 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  },
                  '& .stat-overlay': {
                    opacity: 1,
                  },
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #bdbdbd, #e0e0e0)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease',
                },
                '&:hover::before': {
                  transform: 'scaleX(1)',
                },
              }}
            >
              {/* Background Overlay */}
              <Box
                className='stat-overlay'
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    'linear-gradient(135deg, rgba(189, 189, 189, 0.05) 0%, rgba(224, 224, 224, 0.05) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              />

              {/* Icon */}
              <Typography
                className='stat-icon'
                sx={{
                  fontSize: '2.5rem',
                  mb: 1,
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                {stat.icon}
              </Typography>

              {/* Value */}
              <Typography
                className='stat-value'
                variant='h3'
                component='p'
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.2rem', sm: '2.8rem' },
                  color: '#111111',
                  mb: 1,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  transition: 'all 0.3s ease',
                }}
              >
                {animatedValues[index]}
                {stat.suffix}
              </Typography>

              {/* Label */}
              <Typography
                variant='body1'
                sx={{
                  color: '#7f8c8d',
                  fontWeight: 500,
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  position: 'relative',
                }}
              >
                {stat.label}
              </Typography>

              {/* Decorative Elements */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #bdbdbd, #e0e0e0)',
                  opacity: 0.7,
                  transform: 'scale(0)',
                  transition: 'transform 0.3s ease 0.2s',
                  ...(isVisible && {
                    transform: 'scale(1)',
                  }),
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 15,
                  left: 15,
                  width: 15,
                  height: 15,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #bdbdbd, #e0e0e0)',
                  opacity: 0.5,
                  transform: 'scale(0)',
                  transition: 'transform 0.3s ease 0.4s',
                  ...(isVisible && {
                    transform: 'scale(1)',
                  }),
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Stats;
