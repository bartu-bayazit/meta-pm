import React from "react";
import { Container, Paper, Typography } from "@mui/material";

export default function Video() {
  return (
    <Container maxWidth="md" style={{ fontFamily: "'Playfair Display', serif", marginTop: "2rem" }}>
      <Paper elevation={3} style={{ padding: "2rem" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Project Presentation Video
        </Typography>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
          <iframe
            title="Project Video"
            src="https://www.youtube.com/embed/1f4PbwobUvY?si=0lO91TyBhLxpUPtC"
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}
          />
        </div>
      </Paper>
    </Container>
  );
}
