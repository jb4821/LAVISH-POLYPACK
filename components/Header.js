'use client';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          <Link href='/' passHref>
            <Button sx={{ color: 'white' }}>LAVISH POLYPACK LLP</Button>
          </Link>
        </Typography>
        <nav>
          <Link href='/' passHref>
            <Button sx={{ color: 'white' }}>Home</Button>
          </Link>
          <Link href='/products' passHref>
            <Button sx={{ color: 'white' }}>Products</Button>
          </Link>
          <Link href='/about' passHref>
            <Button sx={{ color: 'white' }}>About Us</Button>
          </Link>
          <Link href='/contact' passHref>
            <Button sx={{ color: 'white' }}>Contact</Button>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
