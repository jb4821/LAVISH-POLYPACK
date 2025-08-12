import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function AboutVideoSection({ text }) {
  const videoId = "jrxtJbBTPLQ";
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 8 },
        alignItems: "center",
      }}
    >
      {/* LEFT - Text */}
      <Box flex={1}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 800, mb: 1 }}
        >
          About Lavish Polypack LLP
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 4,
            bgcolor: "error.main",
            mb: 3,
            borderRadius: 2,
          }}
        />
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            fontSize: { xs: "0.95rem", md: "1.05rem" },
          }}
        >
          {text}
        </Typography>
      </Box>

      {/* RIGHT - Video */}
      <Box flex={1} display="flex" justifyContent="center">
        <Paper
          elevation={4}
          sx={{
            overflow: "hidden",
            width: "100%",
            maxWidth: 520,
            aspectRatio: "16 / 9",
            backgroundColor: "#000",
          }}
        >
          <iframe
            src={videoSrc}
            title="Lavish Polypack LLP"
            style={{
              width: "100%",
              height: "100%",
              border: 0,
              display: "block",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Paper>
      </Box>
    </Box>
  );
}
