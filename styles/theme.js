'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#111111', // Black
      light: '#444444', // Dark gray
      dark: '#000000', // Pure black
      contrastText: '#fffaf3', // Creamy white
    },
    secondary: {
      main: '#bdbdbd', // Medium gray
      light: '#e0e0e0', // Light gray
      dark: '#757575', // Darker gray
      contrastText: '#111111', // Black
    },
    tertiary: {
      main: '#fffaf3', // Cream
      light: '#ffffff', // White
      dark: '#f5f5f5', // Very light gray
      contrastText: '#111111', // Black
    },
    accent: {
      main: '#f5f5f5', // Light gray/cream
      light: '#ffffff',
      dark: '#bdbdbd',
      contrastText: '#111111',
    },
    background: {
      default: '#fffaf3', // Cream
      paper: '#ffffff', // White
      gradient: 'linear-gradient(135deg, #fffaf3 0%, #e0e0e0 100%)',
      lightGradient: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
      darkGradient: 'linear-gradient(135deg, #bdbdbd 0%, #757575 100%)',
    },
    text: {
      primary: '#111111', // Black
      secondary: '#444444', // Dark gray
      light: '#bdbdbd', // Medium gray
      gradient: 'linear-gradient(45deg, #111111, #bdbdbd)',
    },
    success: {
      main: '#bdbdbd',
      light: '#e0e0e0',
      dark: '#757575',
    },
    warning: {
      main: '#bdbdbd',
      light: '#e0e0e0',
      dark: '#757575',
    },
    error: {
      main: '#bdbdbd',
      light: '#e0e0e0',
      dark: '#757575',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#111111',
    },
  },
  typography: {
    fontFamily:
      '"Inter", "Poppins", "Roboto", "Helvetica Neue", Arial, sans-serif',
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
      background: 'linear-gradient(45deg, #111111, #bdbdbd)',
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
      color: '#111111',
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
      color: '#111111',
      fontFamily: '"Poppins", sans-serif',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#111111',
      fontFamily: '"Poppins", sans-serif',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#444444',
      fontFamily: '"Poppins", sans-serif',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: '#444444',
      fontFamily: '"Poppins", sans-serif',
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.6,
      color: '#111111',
      fontFamily: '"Inter", sans-serif',
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6,
      color: '#444444',
      fontFamily: '"Inter", sans-serif',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.7,
      color: '#111111',
      fontFamily: '"Inter", sans-serif',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#757575',
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
      color: '#bdbdbd',
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
    '0px 32px 64px rgba(17, 17, 17, 0.15)',
    '0px 40px 80px rgba(17, 17, 17, 0.2)',
    '0px 48px 96px rgba(17, 17, 17, 0.25)',
    '0px 56px 112px rgba(17, 17, 17, 0.3)',
    '0px 64px 128px rgba(17, 17, 17, 0.35)',
    '0px 72px 144px rgba(17, 17, 17, 0.4)',
    '0px 80px 160px rgba(17, 17, 17, 0.45)',
    '0px 88px 176px rgba(17, 17, 17, 0.5)',
    '0px 96px 192px rgba(17, 17, 17, 0.55)',
    '0px 104px 208px rgba(17, 17, 17, 0.6)',
    '0px 112px 224px rgba(17, 17, 17, 0.65)',
    '0px 120px 240px rgba(17, 17, 17, 0.7)',
    '0px 128px 256px rgba(17, 17, 17, 0.75)',
    '0px 136px 272px rgba(17, 17, 17, 0.8)',
    '0px 144px 288px rgba(17, 17, 17, 0.85)',
    '0px 152px 304px rgba(17, 17, 17, 0.9)',
    '0px 160px 320px rgba(17, 17, 17, 0.95)',
    '0px 168px 336px rgba(17, 17, 17, 1)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@import': [
          'url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap")',
          'url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap")',
        ],
        body: {
          background: 'linear-gradient(135deg, #fffaf3 0%, #e0e0e0 100%)',
          minHeight: '100vh',
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" auto',
        },
        '*': {
          scrollBehavior: 'smooth',
        },
        '::selection': {
          backgroundColor: '#111111',
          color: '#fffaf3',
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
          background: 'linear-gradient(135deg, #111111 0%, #bdbdbd 100%)',
          color: '#fffaf3',
          boxShadow: '0 4px 12px rgba(17, 17, 17, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #444444 0%, #111111 100%)',
            boxShadow: '0 8px 20px rgba(17, 17, 17, 0.5)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderColor: '#111111',
          color: '#111111',
          backgroundColor: 'rgba(17, 17, 17, 0.05)',
          '&:hover': {
            borderColor: '#444444',
            backgroundColor: 'rgba(17, 17, 17, 0.1)',
            color: '#444444',
          },
        },
        text: {
          color: '#111111',
          '&:hover': {
            backgroundColor: 'rgba(17, 17, 17, 0.1)',
            color: '#444444',
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
          border: '1px solid rgba(17,17,17,0.06)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          background: 'rgba(255,250,243,0.9)',
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
            background: 'linear-gradient(90deg, #111111, #bdbdbd, #fffaf3)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(17,17,17,0.08)',
            border: '1px solid rgba(17, 17, 17, 0.15)',
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
          background:
            'linear-gradient(135deg, rgba(17, 17, 17, 0.1) 0%, rgba(189, 189, 189, 0.1) 100%)',
          border: '1px solid rgba(17, 17, 17, 0.2)',
          color: '#111111',
          transition: 'all 0.2s ease',
          '&:hover': {
            background:
              'linear-gradient(135deg, rgba(17, 17, 17, 0.15) 0%, rgba(189, 189, 189, 0.15) 100%)',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(17, 17, 17, 0.2)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background:
            'linear-gradient(90deg, transparent, rgba(17, 17, 17, 0.2), transparent)',
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
  primary: 'linear-gradient(135deg, #111111 0%, #bdbdbd 100%)',
  secondary: 'linear-gradient(135deg, #bdbdbd 0%, #e0e0e0 100%)',
  success: 'linear-gradient(135deg, #bdbdbd 0%, #e0e0e0 100%)',
  warning: 'linear-gradient(135deg, #bdbdbd 0%, #e0e0e0 100%)',
  error: 'linear-gradient(135deg, #bdbdbd 0%, #e0e0e0 100%)',
  dark: 'linear-gradient(135deg, #111111 0%, #444444 100%)',
  light: 'linear-gradient(135deg, #fffaf3 0%, #f5f5f5 100%)',
  accent: 'linear-gradient(135deg, #fffaf3 0%, #bdbdbd 100%)',
};

export default theme;
