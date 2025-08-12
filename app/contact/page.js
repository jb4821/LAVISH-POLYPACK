"use client";
import React, { useState, useRef } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Avatar,
  Chip,
  IconButton,
  Snackbar,
  Alert,
  CircularProgress,
  Fade,
  Zoom,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  Business,
  Public,
  Send,
  ContentCopy,
  WhatsApp,
  Schedule,
} from "@mui/icons-material";
import ContactInfoGrid from "@/components/ContactInfoGrid";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    productName: "",
    message: "",
    name: "",
    email: "",
    mobile: "",
    location: "",
    inquiryType: "general",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [loading, setLoading] = useState(false);

  // Add a ref for the inquiry section
  const inquiryRef = useRef(null);

  const contactDetails = [
    {
      icon: Phone,
      title: "Customer Support",
      text: "+91-8238420382",
      color: "#D4AF37",
      copyable: true,
      action: () => window.open("tel:+918238420382"),
    },
    {
      icon: Phone,
      title: "Export Inquiry",
      text: "+91-8000230060",
      color: "#D4AF37",
      copyable: true,
      action: () => window.open("tel:+918000230060"),
    },
    {
      icon: Business,
      title: "Domestic Inquiry",
      text: "+91-8238420382",
      color: "#D4AF37",
      copyable: true,
      action: () => window.open("tel:+918238420382"),
    },
    // {
    //   icon: Public,
    //   title: "Export Inquiry",
    //   text: "+91-7567781212",
    //   color: "#D4AF37",
    //   copyable: true,
    //   action: () => window.open("tel:+917567781212"),
    // },
    {
      icon: Email,
      title: "Inquiry Email",
      text: "lavishpolypack@gmail.com",
      color: "#D4AF37",
      copyable: true,
      action: () => window.open("mailto:lavishpolypack@gmail.com"),
    },
      {
      icon: Email,
      title: "Export Inquiry Email",
      text: "sales@lavishpolypack.in",
      color: "#D4AF37",
      copyable: true,
      action: () => window.open("mailto:lavishpolypack@gmail.com"),
    },
    // {
    //   icon: Email,
    //   title: "Export Email",
    //   text: "exports@lavishpolypack.com",
    //   color: "#D4AF37",
    //   copyable: true,
    //   action: () => window.open("mailto:exports@lavishpolypack.com"),
    // },
    // {
    //   icon: Email,
    //   title: "Alternative Email",
    //   text: "kushpolyflex@gmail.com",
    //   color: "#8B4513",
    //   copyable: true,
    //   action: () => window.open("mailto:kushpolyflex@gmail.com"),
    // },
    {
      icon: LocationOn,
      title: "Our Location",
      text: "LAVISH POLYPACK LLP, Tankara, Gujarat 363650, India",
      color: "#D4AF37",
      copyable: true,
      action: () =>
        window.open(
          "https://maps.google.com/?q=LAVISH+POLYPACK+LLP+Tankara+Gujarat",
          "_blank"
        ),
    },
  ];

  const whatsappNumbers = [
    { number: "+91918238420382", label: "General Inquiry" },
    { number: "+91918238420382", label: "Customer Support" },
    { number: "+91918238420382", label: "Domestic Bags" },
    { number: "+91918238420382", label: "Export Inquiry" },
  ];

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.message
    ) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields",
        severity: "error",
      });
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSnackbar({
        open: true,
        message: "Please enter a valid email address",
        severity: "error",
      });
      setLoading(false);
      return;
    }

    // Mobile validation (Indian mobile number)
    const mobileRegex = /^[6-9]\d{9}$/;
    const cleanMobile = formData.mobile.replace(/[^\d]/g, "");
    if (!mobileRegex.test(cleanMobile)) {
      setSnackbar({
        open: true,
        message: "Please enter a valid 10-digit mobile number",
        severity: "error",
      });
      setLoading(false);
      return;
    }

    // Prepare data for API
    const payload = {
      name: formData.name,
      email: formData.email,
      mobile: cleanMobile,
      location: formData.location || 'Not specified',
      product: formData.productName || 'General Inquiry',
      inquiry_type: formData.inquiryType || 'general',
      message: formData.message,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to send inquiry');
      const inquiryTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
      setSnackbar({
        open: true,
        message:
          "✅ Your inquiry has been sent successfully! We'll contact you within 24 hours.",
        severity: "success",
      });
      setFormData({
        productName: "",
        message: "",
        name: "",
        email: "",
        mobile: "",
        location: "",
        inquiryType: "general",
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message:
          "Failed to send inquiry. Please try again or contact us directly.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setSnackbar({
        open: true,
        message: "Copied to clipboard! 📋",
        severity: "info",
      });
    });
  };

  const commonTextFieldStyles = {
    sx: {
      "& .MuiOutlinedInput-root": {
        fontFamily: '"Inter", sans-serif',
        "&:hover fieldset": { borderColor: "#8B4513" },
        "&.Mui-focused fieldset": {
          borderColor: "#D4AF37",
        },
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#8B4513",
      },
    },
  };
  const openWhatsApp = (number, message = "") => {
    const text =
      message ||
      `Hello! I&apos;m interested in your packaging products. Can you please provide more information?`;
    window.open(
      `https://wa.me/${number.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4, overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Fade in={true} timeout={1000}>
        <Box
          sx={{
            textAlign: "center",
            mb: 8,
            position: "relative",
            py: 6,
            background: "#F7E7B3", // pastel gold
            borderRadius: 3,
            color: "#2D2D2D", // dark text for contrast
            border: "1px solid #D7BFAE", // pastel brown border
            boxShadow: "0 2px 12px #D7BFAE33", // very soft shadow
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "radial-gradient(circle at 70% 30%, #D7BFAE22 0%, transparent 60%)",
              pointerEvents: "none",
            },
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Chip
              label="Get In Touch"
              sx={{
                mb: 3,
                bgcolor: "#D7BFAE", // pastel brown
                color: "#8B4513", // brown text
                fontWeight: 600,
                fontSize: "0.9rem",
                fontFamily: '"Inter", sans-serif',
                boxShadow: "0 2px 8px #D7BFAE22",
                cursor: "pointer"
              }}
              onClick={() => {
                inquiryRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            />
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontFamily: '"Playfair Display", serif',
                color: "#8B4513",
                letterSpacing: "2px",
              }}
            >
              Contact LAVISH POLYPACK LLP
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                opacity: 0.95,
                fontWeight: 400,
                lineHeight: 1.4,
                fontFamily: '"Inter", sans-serif',
                color: "#2D2D2D",
              }}
            >
              Partner with Gujarat&apos;s Premier Packaging Solutions Provider
            </Typography>
          </Box>
        </Box>
      </Fade>

      <Grid container spacing={6}>
        {/* Contact Details Column */}
        <Grid item xs={12} lg={5}>
          <Fade in={true} timeout={1200}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                background: "rgba(255, 255, 255, 0.95)",
                border: "1px solid rgba(139, 69, 19, 0.1)",
                borderRadius: 3,
                position: "relative",
                overflow: "hidden",
                height: "fit-content",
                backdropFilter: "blur(20px)",
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 300,
                  mb: 4,
                  color: "#8B4513",
                  textAlign: "center",
                  position: "relative",
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: "1px",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80px",
                    height: "2px",
                    background: "linear-gradient(90deg, #8B4513, #D4AF37)",
                    borderRadius: 2,
                  },
                }}
              >
                Contact Information
              </Typography>

              <ContactInfoGrid contactDetails={contactDetails} />

              {/* WhatsApp Quick Actions */}
              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  background:
                    "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  borderRadius: 2,
                  color: "white",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  <WhatsApp sx={{ mr: 1 }} />
                  Quick WhatsApp
                </Typography>
                <Grid container spacing={1}>
                  {whatsappNumbers.map((item, index) => (
                    <Grid item xs={6} key={index}>
                      <Button
                        fullWidth
                        size="small"
                        onClick={() => openWhatsApp(item.number)}
                        sx={{
                          color: "white",
                          border: "1px solid rgba(255,255,255,0.3)",
                          fontSize: "0.75rem",
                          py: 1,
                          "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.1)",
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Fade>
        </Grid>

        {/* Form and Map Column */}
        <Grid item xs={12} lg={7} ref={inquiryRef}>
          <Grid container spacing={4} alignItems="stretch">
            {/* Contact Form */}
            <Grid item xs={12} lg={7} sx={{ display: 'flex' }}>
              <Fade in={true} timeout={1400} style={{ width: '100%' }}>
                <Box
                  elevation={0}
                  sx={{
                    p: 5,
                    background: "rgba(255, 255, 255, 0.95)",
                    // border: "1px solid rgba(212, 175, 55, 0.1)",
                    // borderRadius: 3,
                    position: "relative",
                    overflow: "hidden",
                    backdropFilter: "blur(20px)",
                    width: '100%',
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 300,
                      mb: 4,
                      color: "#8B4513",
                      textAlign: "center",
                      position: "relative",
                      fontFamily: '"Playfair Display", serif',
                      letterSpacing: "1px",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -12,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "2px",
                        background: "linear-gradient(90deg, #D4AF37, #8B4513)",
                        borderRadius: 2,
                      },
                    }}
                  >
                    Send Your Inquiry
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: 'center',
                      color: '#8B4513',
                      mb: 2,
                      fontWeight: 400,
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    Fill out the form below and our team will get back to you promptly.
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    <Box
                      sx={{
                        maxWidth: "900px",
                        mx: "auto",
                        px: { xs: 2, sm: 3 },
                        py: 4,
                      }}
                    >
                      <Grid container spacing={3}>
                        {/* Full Name & Email */}
                        <Grid item xs={12} md={6}>
                          <TextField
                            label="Full Name *"
                            variant="outlined"
                            fullWidth
                            value={formData.name}
                            onChange={handleInputChange("name")}
                            required
                            placeholder="Enter your full name"
                            {...commonTextFieldStyles}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            label="Email Address *"
                            variant="outlined"
                            fullWidth
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange("email")}
                            required
                            placeholder="example@domain.com"
                            {...commonTextFieldStyles}
                          />
                        </Grid>

                        {/* Mobile & Location */}
                        <Grid item xs={12} md={6}>
                          <TextField
                            label="Mobile Number *"
                            variant="outlined"
                            fullWidth
                            value={formData.mobile}
                            onChange={handleInputChange("mobile")}
                            required
                            placeholder="10-digit mobile number"
                            inputProps={{ maxLength: 10 }}
                            {...commonTextFieldStyles}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            label="Your Location"
                            variant="outlined"
                            fullWidth
                            value={formData.location}
                            onChange={handleInputChange("location")}
                            placeholder="City / State"
                            {...commonTextFieldStyles}
                          />
                        </Grid>

                        {/* Product Interest */}
                        <Grid item xs={12}>
                          <TextField
                            label="Product Name / Interest"
                            variant="outlined"
                            fullWidth
                            value={formData.productName}
                            onChange={handleInputChange("productName")}
                            placeholder="e.g., FIBC Bags, PP Woven Bags, etc."
                            {...commonTextFieldStyles}
                          />
                        </Grid>

                        {/* Message */}
                        <Grid item xs={12}>
                          <TextField
                            label="Your Message *"
                            variant="outlined"
                            fullWidth
                            // multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange("message")}
                            required
                            placeholder="Describe your requirements, timeline, or any specific questions..."
                            {...commonTextFieldStyles}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box
                      sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}
                    >
                      <Button
                        variant="contained"
                        type="submit"
                        size="large"
                        disabled={loading}
                        startIcon={
                          loading ? (
                            <CircularProgress size={20} color="inherit" />
                          ) : (
                            <Send />
                          )
                        }
                        sx={{
                          px: 4,
                          py: 1.5,
                          fontSize: "1.1rem",
                          fontWeight: 500,
                          background:
                            "linear-gradient(135deg, #8B4513 0%, #D4AF37 100%)",
                          borderRadius: 2,
                          textTransform: "none",
                          boxShadow: "0 8px 25px rgba(139, 69, 19, 0.3)",
                          transition: "all 0.3s ease",
                          fontFamily: '"Inter", sans-serif',
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #7A3F0F 0%, #B8941F 100%)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 12px 35px rgba(139, 69, 19, 0.4)",
                          },
                          "&:disabled": {
                            background: "rgba(139, 69, 19, 0.3)",
                          },
                        }}
                      >
                        {loading ? "Sending..." : "Send Inquiry"}
                      </Button>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          color: "#666",
                          fontSize: "0.9rem",
                        }}
                      >
                        <Schedule sx={{ fontSize: 16 }} />
                        We&apos;ll respond within 24 hours
                      </Box>
                    </Box>
                  </form>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} lg={7} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ flex: 1, width: '100%' }}>
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: '350px', sm: '400px', md: '450px', lg: '500px' },
                    overflow: 'hidden',
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.81559806443!2d70.644480!3d22.596371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM1JzQ2LjkiTiA3MMKwMzgnNDAuMSJF!5e0!3m2!1sen!2sus!4v1626883271884!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="LAVISH POLYPACK Location"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

<Fade in={true} timeout={1800}>
  <Box sx={{ mt: 8 }}>
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="stretch"
      sx={{
        // Prevents uneven widths on large screens
        flexWrap: "wrap",
      }}
    >
      {[
        {
          icon: <Schedule sx={{ fontSize: 40, mb: 2, color: "#8B4513" }} />,
          title: "Business Hours",
          bg: "#F7E7B3",
          border: "#D7BFAE",
          textColor: "#8B4513",
          content: (
            <>
              Monday - Saturday: 9:00 AM - 6:00 PM
              <br />
              Sunday: Closed
            </>
          ),
        },
        {
          icon: <Email sx={{ fontSize: 40, mb: 2, color: "#D4AF37" }} />,
          title: "Email Response",
          bg: "#F3F3F3",
          border: "#D7BFAE",
          textColor: "#D4AF37",
          content: (
            <>
              We respond to all emails
              <br />
              within 2-4 hours during business hours
            </>
          ),
        },
        {
          icon: <WhatsApp sx={{ fontSize: 40, mb: 2, color: "#25D366" }} />,
          title: "WhatsApp Support",
          bg: "#D7BFAE",
          border: "#F7E7B3",
          textColor: "#25D366",
          content: (
            <>
              Get instant replies on WhatsApp
              <br />
              24/7 available for urgent queries
            </>
          ),
        },
      ].map((item, index) => (
        <Grid
          item
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            flex: "0 0 auto", // Prevents shrinking unevenly
          }}
        >
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              background: item.bg,
              color: "#2D2D2D",
              borderRadius: 3,
              border: `1px solid ${item.border}`,
              boxShadow: "0 2px 12px #D7BFAE33",
              height: "100%",
              width: 320, // fixed width for all cards
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {item.icon}
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontFamily: '"Inter", sans-serif',
                color: item.textColor,
                fontWeight: 600,
              }}
            >
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.95 }}>
              {item.content}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
</Fade>


      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{
            width: "100%",
            fontFamily: '"Inter", sans-serif',
            "& .MuiAlert-message": {
              fontSize: "0.95rem",
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactPage;
