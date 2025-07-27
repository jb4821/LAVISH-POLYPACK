'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Drawer, IconButton, List, ListItem, ListItemText, ListItemButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Drawer 
      anchor="left" 
      open={drawerOpen} 
      onClose={() => setDrawerOpen(false)}
      PaperProps={{
        sx: {
          background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
          color: 'white',
          width: 280,
        }
      }}
    >
      <Box sx={{ 
        p: 3, 
        borderBottom: '1px solid rgba(236, 240, 241, 0.2)',
        background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            letterSpacing: '0.5px'
          }}
        >
          LAVISH POLYPACK LLP
        </Typography>
      </Box>
      <List sx={{ pt: 2 }}>
        {navLinks.map((link) => (
          <ListItem key={link.href} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={Link}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              selected={pathname === link.href}
              sx={{
                mx: 2,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(230, 126, 34, 0.1)',
                  transform: 'translateX(8px)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(230, 126, 34, 0.2)',
                  borderLeft: '4px solid #e67e22',
                  '&:hover': {
                    backgroundColor: 'rgba(230, 126, 34, 0.3)',
                  }
                }
              }}
            >
              <ListItemText 
                primary={link.label}
                sx={{
                  '& .MuiTypography-root': {
                    fontWeight: pathname === link.href ? 600 : 400,
                    fontSize: '1.05rem',
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar 
      position='sticky'
      elevation={scrolled ? 4 : 0}
      sx={{
        background: scrolled 
          ? 'linear-gradient(135deg, #d35400 0%, #e67e22 100%)'
          : 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        boxShadow: scrolled 
          ? '0 4px 20px rgba(230, 126, 34, 0.3)' 
          : '0 2px 10px rgba(230, 126, 34, 0.1)',
      }}
    >
      <Toolbar sx={{ 
        minHeight: { xs: 64, sm: 70 },
        px: { xs: 2, sm: 3, md: 4 }
      }}>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ 
              mr: 2,
              p: 1.5,
              borderRadius: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'scale(1.1)',
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        <Typography 
          variant='h6' 
          component='div' 
          sx={{ 
            flexGrow: 1,
            fontWeight: 700,
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            letterSpacing: '0.5px',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <Link href='/' passHref style={{ textDecoration: 'none' }}>
            <Button 
              sx={{ 
                color: 'white',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                letterSpacing: 'inherit',
                textTransform: 'none',
                p: 0,
                minWidth: 'auto',
                '&:hover': {
                  backgroundColor: 'transparent',
                  transform: 'scale(1.02)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              LAVISH POLYPACK LLP
            </Button>
          </Link>
        </Typography>
        
        {!isMobile && (
          <Box component="nav" sx={{ display: 'flex', gap: 1 }}>
            {navLinks.map((link) => (
              <Link href={link.href} passHref key={link.href} style={{ textDecoration: 'none' }}>
                <Button 
                  sx={{ 
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: pathname === link.href ? 600 : 500,
                    px: 3,
                    py: 1,
                    borderRadius: 3,
                    textTransform: 'none',
                    letterSpacing: '0.3px',
                    position: 'relative',
                    overflow: 'hidden',
                    border: pathname === link.href ? '2px solid rgba(255, 255, 255, 0.3)' : '2px solid transparent',
                    backgroundColor: pathname === link.href ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                      border: '2px solid rgba(255, 255, 255, 0.4)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transition: 'left 0.5s',
                    },
                    '&:hover::before': {
                      left: '100%',
                    },
                  }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
      {drawer}
    </AppBar>
  );
};

export default Header;