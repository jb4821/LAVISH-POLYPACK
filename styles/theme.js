'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   typography: {
    fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1E40AF', // Professional blue
      light: '#3B82F6',
      dark: '#1E3A8A',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#059669', // Modern green
      light: '#10B981',
      dark: '#047857',
      contrastText: '#ffffff',
    },
    tertiary: {
      main: '#7C3AED', // Rich purple
      light: '#8B5CF6',
      dark: '#6D28D9',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#DC2626', // Modern red accent
      light: '#EF4444',
      dark: '#B91C1C',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F8FAFC', // Clean light gray
      paper: '#ffffff',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      lightGradient: 'linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%)',
      darkGradient: 'linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)',
    },
    text: {
      primary: '#1F2937', // Dark gray for better readability
      secondary: '#6B7280',
      light: '#9CA3AF',
      gradient: 'linear-gradient(45deg, #1E40AF, #3B82F6)',
    },
    success: {
      main: '#059669',
      light: '#10B981',
      dark: '#047857',
    },
    warning: {
      main: '#D97706',
      light: '#F59E0B',
      dark: '#B45309',
    },
    error: {
      main: '#DC2626',
      light: '#EF4444',
      dark: '#B91C1C',
    },
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  typography: {
    fontFamily: '"Inter", "Poppins", "Roboto", "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      background: 'linear-gradient(45deg, #1E40AF, #3B82F6)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontFamily: '"Poppins", sans-serif',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: '#1F2937',
      fontFamily: '"Poppins", sans-serif',
      '@media (max-width:600px)': {
        fontSize: '2.2rem',
      },
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: '#1F2937',
      fontFamily: '"Poppins", sans-serif',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#1F2937',
      fontFamily: '"Poppins", sans-serif',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#374151',
      fontFamily: '"Poppins", sans-serif',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: '#374151',
      fontFamily: '"Poppins", sans-serif',
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.6,
      color: '#1F2937',
      fontFamily: '"Inter", sans-serif',
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6,
      color: '#374151',
      fontFamily: '"Inter", sans-serif',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.7,
      color: '#1F2937',
      fontFamily: '"Inter", sans-serif',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#6B7280',
      fontFamily: '"Inter", sans-serif',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
      fontFamily: '"Inter", sans-serif',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#9CA3AF',
      fontFamily: '"Inter", sans-serif',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.05)',
    '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)',
    '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
    '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
    '0px 25px 50px rgba(0, 0, 0, 0.25)',
    '0px 32px 64px rgba(30, 64, 175, 0.15)',
    '0px 40px 80px rgba(30, 64, 175, 0.2)',
    '0px 48px 96px rgba(30, 64, 175, 0.25)',
    '0px 56px 112px rgba(30, 64, 175, 0.3)',
    '0px 64px 128px rgba(30, 64, 175, 0.35)',
    '0px 72px 144px rgba(30, 64, 175, 0.4)',
    '0px 80px 160px rgba(30, 64, 175, 0.45)',
    '0px 88px 176px rgba(30, 64, 175, 0.5)',
    '0px 96px 192px rgba(30, 64, 175, 0.55)',
    '0px 104px 208px rgba(30, 64, 175, 0.6)',
    '0px 112px 224px rgba(30, 64, 175, 0.65)',
    '0px 120px 240px rgba(30, 64, 175, 0.7)',
    '0px 128px 256px rgba(30, 64, 175, 0.75)',
    '0px 136px 272px rgba(30, 64, 175, 0.8)',
    '0px 144px 288px rgba(30, 64, 175, 0.85)',
    '0px 152px 304px rgba(30, 64, 175, 0.9)',
    '0px 160px 320px rgba(30, 64, 175, 0.95)',
    '0px 168px 336px rgba(30, 64, 175, 1)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@import': [
          'url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap")',
          'url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap")',
        ],
        body: {
          background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
          minHeight: '100vh',
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" auto',
        },
        '*': {
          scrollBehavior: 'smooth',
        },
        '::selection': {
          backgroundColor: '#1E40AF',
          color: '#ffffff',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: false,
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '12px 24px',
          fontSize: '0.95rem',
          fontWeight: 600,
          textTransform: 'none',
          letterSpacing: '0.01em',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(0px)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
          color: '#ffffff',
          boxShadow: '0 4px 12px rgba(30, 64, 175, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
            boxShadow: '0 8px 20px rgba(30, 64, 175, 0.5)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderColor: '#1E40AF',
          color: '#1E40AF',
          backgroundColor: 'rgba(30, 64, 175, 0.05)',
          '&:hover': {
            borderColor: '#1E3A8A',
            backgroundColor: 'rgba(30, 64, 175, 0.1)',
            color: '#1E3A8A',
          },
        },
        text: {
          color: '#1E40AF',
          '&:hover': {
            backgroundColor: 'rgba(30, 64, 175, 0.1)',
            color: '#1E3A8A',
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid rgba(0,0,0,0.06)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(20px)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #1E40AF, #3B82F6, #059669)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
            border: '1px solid rgba(30, 64, 175, 0.15)',
          },
          '&:hover::before': {
            opacity: 1,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          fontSize: '0.875rem',
          height: 'auto',
          padding: '6px 12px',
          background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
          border: '1px solid rgba(30, 64, 175, 0.2)',
          color: '#1E40AF',
          transition: 'all 0.2s ease',
          '&:hover': {
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(30, 64, 175, 0.2)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, transparent, rgba(30, 64, 175, 0.2), transparent)',
          height: '1px',
          border: 'none',
          borderRadius: 1,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Extend the theme to include custom properties
theme.palette.gradients = {
  primary: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
  secondary: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
  success: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
  warning: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
  error: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
  dark: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
  light: 'linear-gradient(135deg, #F9FAFB 0%, #E5E7EB 100%)',
  accent: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
};

export default theme;