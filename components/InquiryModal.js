import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  CircularProgress,
  Chip,
} from "@mui/material";
import { Send } from "@mui/icons-material";

const InquiryModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    productName: "",
    message: "",
    name: "",
    email: "",
    mobile: "",
    location: "",
    inquiryType: "general",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Basic validation (same as contact page)
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.message
    ) {
      setLoading(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setLoading(false);
      return;
    }
    const mobileRegex = /^[6-9]\d{9}$/;
    const cleanMobile = formData.mobile.replace(/[^\d]/g, "");
    if (!mobileRegex.test(cleanMobile)) {
      setLoading(false);
      return;
    }

    // Prepare data for API
    const payload = {
      name: formData.name,
      email: formData.email,
      mobile: cleanMobile,
      location: formData.location || "Not specified",
      product: formData.productName || "General Inquiry",
      inquiry_type: formData.inquiryType || "general",
      message: formData.message,
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1800);
    } catch (error) {
      // handle error
    } finally {
      setLoading(false);
    }
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

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          color: "#8B4513",
          fontFamily: '"Playfair Display", serif',
          letterSpacing: "2px",
          fontWeight: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 1, sm: 3 },
          py: { xs: 1.5, sm: 2 },
          minHeight: { xs: 48, sm: 64 },
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: "center",
            fontSize: { xs: "1.1rem", sm: "1.4rem" },
            fontWeight: 500,
            pl: { xs: 0, sm: 2 },
          }}
        >
          Send Your Inquiry
        </Box>
        <Button
          onClick={onClose}
          sx={{
            minWidth: 0,
            color: "#8B4513",
            fontWeight: 600,
            ml: 2,
            fontSize: { xs: "1.3rem", sm: "1.5rem" },
            textTransform: "none",
            lineHeight: 1,
            p: 0,
          }}
          aria-label="Close"
        >
          ✕
        </Button>
      </DialogTitle>
      <DialogContent>
        {submitted ? (
          <Box sx={{ py: 6, textAlign: "center" }}>
            <Typography variant="h6" sx={{ color: "#8B4513", mb: 2 }}>
              ✅ Inquiry Sent Successfully!
            </Typography>
            <Typography sx={{ color: "#666" }}>
              Our team will contact you within 24 hours.
            </Typography>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Full Name *"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleInputChange("name")}
                  placeholder="Enter your full name"
                  {...commonTextFieldStyles}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Address *"
                  fullWidth
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  placeholder="example@domain.com"
                  {...commonTextFieldStyles}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Mobile Number *"
                  fullWidth
                  required
                  value={formData.mobile}
                  onChange={handleInputChange("mobile")}
                  placeholder="10-digit mobile number"
                  inputProps={{ maxLength: 10 }}
                  {...commonTextFieldStyles}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Your Location"
                  fullWidth
                  value={formData.location}
                  onChange={handleInputChange("location")}
                  placeholder="City / State"
                  {...commonTextFieldStyles}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Product Name / Interest"
                  fullWidth
                  value={formData.productName}
                  onChange={handleInputChange("productName")}
                  placeholder="e.g., FIBC Bags, PP Woven Bags, etc."
                  {...commonTextFieldStyles}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Message *"
                  fullWidth
                  required
                  // multiline
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  placeholder="Describe your requirements, timeline, or any specific questions..."
                  {...commonTextFieldStyles}
                />
              </Grid>
            </Grid>
            <DialogActions sx={{ mt: 3, justifyContent: "center" }}>
              <Button
                onClick={onClose}
                sx={{
                  color: "#666",
                  fontWeight: 500,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                startIcon={
                  loading ? (
                    <CircularProgress size={18} color="inherit" />
                  ) : (
                    <Send />
                  )
                }
                sx={{
                  background: "linear-gradient(135deg, #8B4513 0%, #D4AF37 100%)",
                  color: "#fff",
                  px: 4,
                  py: 1.2,
                  fontWeight: 500,
                  fontFamily: '"Inter", sans-serif',
                  borderRadius: 2,
                  boxShadow: "0 8px 25px rgba(139, 69, 19, 0.2)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #7A3F0F 0%, #B8941F 100%)",
                  },
                }}
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </Button>
            </DialogActions>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InquiryModal;