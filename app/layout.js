import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActionButtons from '../components/FloatingActionButtons';
import './globals.css';

export const metadata = {
  title: 'LAVISH POLYPACK LLP',
  description:
    'Leading manufacturer of PP Woven Sacks, Bags, and other packaging solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <main>{children}</main>
            <Footer />
            <FloatingActionButtons />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
