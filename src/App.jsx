import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import Portfolio from "./Portfolio";
import GeneralInfo from "./GeneralInfo";
import Video from "./Video";
import GeneralInfo2 from "./GeneralInfo2";
import GeneralInfo3 from "./GeneralInfo3";
import Poster from "./Poster";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  const navItems = [
    { label: "Portfolio", path: "/" },
    { label: "General Information", path: "/info" },
    { label: "Project Poster", path: "/poster"}, //http://localhost:8000/outputs/poster.pdf
    { label: "Video Presentation", path: "/video" },
  ];

  const handleNavClick = (item) => {
    if (item.external) {
      window.open(item.path, "_blank");
    } else {
      navigate(item.path);
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
            Meta Portfolio Manager
          </Typography>
          <Box display="flex" gap={2}>
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  sx={{
                    color: "white",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: isActive ? "underline" : "none",
                    textTransform: "none",
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      
      <Routes>
        <Route path="/" element={<Portfolio />} />
        {/*<Route path="/info" element={<GeneralInfo />} />*/}
        <Route path="/video" element={<Video />} />
        {/*<Route path="/info2" element={<GeneralInfo2 />} />*/}
        <Route path="/info" element={<GeneralInfo3 />} />
        {/* No route for PDF since it's served directly */}
        <Route path="/poster" element={<Poster/>}/>
      </Routes>
      
    </>
  );
}
