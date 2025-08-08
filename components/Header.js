'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LOGO from '../public/pollypack.png';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemButton, 
  Box,
  Container,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { usePathname } from 'next/navigation';
import InquiryModal from './InquiryModal';
import Image from 'next/image';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // Modal hidden initially
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  // Enhanced scroll handler
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true); // Show modal after 2 seconds
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Drawer 
      anchor="left" 
      open={drawerOpen} 
      onClose={handleDrawerToggle}
      PaperProps={{
        sx: {
          background: '#FEFEFE',
          color: '#2D2D2D',
          width: 340,
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.1)',
          borderRight: '1px solid #F0F0F0',
        }
      }}
    >
      <Box sx={{ 
        p: 4, 
        borderBottom: '1px solid #F0F0F0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 300,
            color: '#8B4513',
            letterSpacing: '3px',
            fontSize: '1.4rem',
            fontFamily: '"Playfair Display", serif',
          }}
        >
          LAVISH POLYPACK
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ 
            color: '#666',
            p: 1,
            '&:hover': {
              backgroundColor: '#F8F8F8',
              color: '#8B4513',
            }
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      
      <List sx={{ pt: 3, px: 2 }}>
        {navLinks.map((link, index) => (
          <ListItem key={link.href} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={Link}
              href={link.href}
              onClick={handleDrawerToggle}
              selected={pathname === link.href}
              sx={{
                py: 2,
                px: 3,
                borderRadius: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#F8F6F3',
                  '& .MuiTypography-root': {
                    color: '#8B4513',
                    transform: 'translateX(8px)',
                  }
                },
                '&.Mui-selected': {
                  backgroundColor: '#F8F6F3',
                  '& .MuiTypography-root': {
                    color: '#8B4513',
                    fontWeight: 500,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '3px',
                    height: '60%',
                    backgroundColor: '#8B4513',
                    borderRadius: '0 2px 2px 0',
                  }
                }
              }}
            >
              <ListItemText 
                primary={link.label}
                sx={{
                  '& .MuiTypography-root': {
                    fontWeight: pathname === link.href ? 500 : 400,
                    fontSize: '1rem',
                    letterSpacing: '0.5px',
                    color: pathname === link.href ? '#8B4513' : '#555',
                    transition: 'all 0.3s ease',
                    fontFamily: '"Inter", sans-serif',
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Divider sx={{ mx: 3, my: 3, backgroundColor: '#F0F0F0' }} />
      
      <Box sx={{ px: 4, pb: 4 }}>
        <Typography variant="body2" sx={{ 
          color: '#999', 
          mb: 2, 
          fontSize: '0.85rem',
          letterSpacing: '0.5px'
        }}>
          CONTACT INFO
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
          +91 8238420382
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          lavishpolypack@gmail.com
        </Typography>
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar 
        position='fixed'
        elevation={0}
        sx={{
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.98)'
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled 
            ? '1px solid rgba(139, 69, 19, 0.08)' 
            : '1px solid rgba(0, 0, 0, 0.05)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: scrolled 
            ? '0 2px 40px rgba(0, 0, 0, 0.08)' 
            : '0 1px 20px rgba(0, 0, 0, 0.03)',
          color: '#2D2D2D',
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar sx={{ 
            minHeight: { xs: 70, sm: 80 },
            px: { xs: 2, sm: 4 },
            justifyContent: 'space-between',
          }}>
            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ 
                  mr: 2,
                  p: 1.5,
                  color: '#8B4513',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(139, 69, 19, 0.08)',
                    transform: 'scale(1.05)',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
            
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link href='/' passHref style={{ textDecoration: 'none' }}>
                {/* <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  }
                }}>
                  <Typography 
                    variant="h4"
                    sx={{ 
                      color: '#8B4513',
                      fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' },
                      fontWeight: 300,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      fontFamily: '"Playfair Display", serif',
                    }}
                  >
                    LAVISH
                  </Typography>
                  <Box sx={{ 
                    width: '2px', 
                    height: '30px', 
                    backgroundColor: '#D4AF37', 
                    mx: 2,
                    display: { xs: 'none', sm: 'block' }
                  }} />
                  <Typography 
                    variant="h6"
                    sx={{ 
                      color: '#666',
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      fontWeight: 400,
                      letterSpacing: '2px',
                      display: { xs: 'none', sm: 'block' },
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    POLYPACK
                  </Typography>
                </Box> */}
                 <Image 
                                  src={LOGO} 
                                  alt= "Lavish Polypack"
                                  width={140} height={40}
                                  style={{
                                    height: 'auto', 
                                    display: 'block',
                                    objectFit: 'contain',
                                  }} 
                                  // onError={e => { 
                                  //   e.target.onerror = null; 
                                  //   e.target.src = '/products/pp-bag.jpg'; 
                                  // }} 
                                />
              </Link>
            </Box>
            
            {/* Desktop Navigation */}
            {!isMobile && (
              <Box component="nav">
                {navLinks.map((link) => (
                  <Link href={link.href} passHref key={link.href} style={{ textDecoration: 'none'}}>
                    <Button 
                      sx={{ 
                        color: pathname === link.href ? '#8B4513' : '#555',
                        fontSize: '0.95rem',
                        fontWeight: pathname === link.href ? 500 : 400,
                        px: 3,
                        py: 2,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        position: 'relative',
                        fontFamily: '"Inter", sans-serif',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: '#8B4513',
                          '&::after': {
                            width: '100%',
                          }
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: pathname === link.href ? '80%' : '0%',
                          height: '1px',
                          backgroundColor: '#D4AF37',
                          transition: 'all 0.3s ease',
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
        </Container>
      </AppBar>
      
      {drawer}
      
      <InquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
      
      {/* Spacer to prevent content from hiding behind fixed header */}
      <Box sx={{ height: { xs: 70, sm: 80 } }} />
    </>
  );
};

export default Header;