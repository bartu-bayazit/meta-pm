// PosterViewer.jsx
import React, { useState } from "react";
import { 
  Container, 
  Paper, 
  Typography, 
  Stack, 
  Box, 
  Chip, 
  IconButton,
  Tooltip,
  Alert,
  CircularProgress
} from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Poster() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Replace with your actual PDF URL
  const pdfUrl = "/path/to/your/metapm-poster.pdf";
  
  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  const handleFullscreen = () => {
    window.open(pdfUrl, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'MetaPM-Project-Poster.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "2rem", fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section */}
      <Paper elevation={4} style={{ 
        padding: '3rem', 
        marginBottom: '2rem', 
        background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #5e35b1 100%)',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C27B0" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }} />
        
        <Box style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} marginBottom={2}>
            <PictureAsPdfIcon style={{ color: 'white', fontSize: '50px' }} />
            <Typography variant="h2" style={{ 
              color: 'white', 
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              Project Poster
            </Typography>
          </Stack>
          
          <Typography variant="h5" style={{ 
            color: 'rgba(255,255,255,0.9)', 
            marginBottom: '2rem',
            fontWeight: 300
          }}>
            MetaPM: Neural Network Based Portfolio Management
          </Typography>

          <Typography variant="body1" style={{ 
            color: 'rgba(255,255,255,0.8)', 
            marginBottom: '2rem',
            maxWidth: '800px',
            margin: '0 auto 2rem auto',
            lineHeight: 1.6
          }}>
            Explore our comprehensive project poster showcasing the technical architecture, methodology, 
            and results of the MetaPM ensemble learning system for algorithmic trading.
          </Typography>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
            <Tooltip title="Open in new tab">
              <IconButton 
                onClick={handleFullscreen}
                style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}
              >
                <OpenInNewIcon />
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Download PDF">
              <IconButton 
                onClick={handleDownload}
                style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}
              >
                <DownloadIcon />
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Fullscreen view">
              <IconButton 
                onClick={handleFullscreen}
                style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}
              >
                <FullscreenIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>
      </Paper>

      {/* PDF Viewer Section */}
      <Paper elevation={3} style={{ 
        padding: '1.5rem', 
        marginBottom: '2rem', 
        borderRadius: '15px',
        background: '#f8f9fa'
      }}>
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" marginBottom={2}>
          <Typography variant="h5" style={{ color: '#333', fontWeight: 600 }}>
            Project Poster Document
          </Typography>
          
          <Stack direction="row" spacing={1}>
            <Chip 
              label="High Resolution" 
              size="small" 
              style={{ background: '#e3f2fd', color: '#1976d2' }} 
            />
            <Chip 
              label="Interactive" 
              size="small" 
              style={{ background: '#e8f5e8', color: '#2e7d32' }} 
            />
          </Stack>
        </Stack>

        {/* Loading/Error States */}
        {loading && (
          <Box style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '200px',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <CircularProgress size={40} style={{ color: '#6a1b9a' }} />
            <Typography variant="body1" style={{ color: '#666' }}>
              Loading poster...
            </Typography>
          </Box>
        )}

        {error && (
          <Alert 
            severity="error" 
            style={{ marginBottom: '1rem' }}
            action={
              <IconButton 
                color="inherit" 
                size="small" 
                onClick={handleFullscreen}
              >
                <OpenInNewIcon fontSize="small" />
              </IconButton>
            }
          >
            Unable to load PDF in this browser. Click the "Open in new tab" button above to view the poster.
          </Alert>
        )}

        {/* PDF Viewer */}
        <Box style={{ 
          width: '100%', 
          height: '80vh', 
          minHeight: '600px',
          border: '2px solid #e0e0e0',
          borderRadius: '12px',
          overflow: 'hidden',
          background: 'white',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          position: 'relative'
        }}>
          {/*<iframe
            src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: loading ? 'none' : 'block'
            }}
            title="MetaPM Project Poster"
            onLoad={handleLoad}
            onError={handleError}
          />*/}
          
          {/* Fallback embed for better browser compatibility */}
          <embed
            src={pdfUrl}
            type="application/pdf"
            style={{
              width: '100%',
              height: '100%',
              display: 'none'
            }}
            onLoad={handleLoad}
            onError={handleError}
          />
        </Box>
      </Paper>

      {/* Poster Highlights */}
      <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', borderRadius: '15px' }}>
        <Typography variant="h5" style={{ 
          color: '#333', 
          fontWeight: 600, 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Poster Highlights
        </Typography>
        
        <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
          <Box style={{ 
            textAlign: 'center', 
            padding: '1.5rem',
            maxWidth: '200px',
            background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)',
            borderRadius: '12px',
            margin: '0.5rem'
          }}>
            <Typography variant="h6" style={{ color: '#2e7d32', fontWeight: 600, marginBottom: '0.5rem' }}>
              🏗️ Architecture
            </Typography>
            <Typography variant="body2" style={{ color: '#388e3c' }}>
              Detailed system design and ensemble methodology
            </Typography>
          </Box>
          
          <Box style={{ 
            textAlign: 'center', 
            padding: '1.5rem',
            maxWidth: '200px',
            background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
            borderRadius: '12px',
            margin: '0.5rem'
          }}>
            <Typography variant="h6" style={{ color: '#1976d2', fontWeight: 600, marginBottom: '0.5rem' }}>
              📊 Results
            </Typography>
            <Typography variant="body2" style={{ color: '#1976d2' }}>
              Performance metrics and backtesting analysis
            </Typography>
          </Box>
          
          <Box style={{ 
            textAlign: 'center', 
            padding: '1.5rem',
            maxWidth: '200px',
            background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)',
            borderRadius: '12px',
            margin: '0.5rem'
          }}>
            <Typography variant="h6" style={{ color: '#c2185b', fontWeight: 600, marginBottom: '0.5rem' }}>
              🔬 Methodology
            </Typography>
            <Typography variant="body2" style={{ color: '#c2185b' }}>
              Technical indicators and model training process
            </Typography>
          </Box>
         
        </Stack>
      </Paper>

      

      {/* Navigation Tip */}
      <Paper elevation={2} style={{ 
        padding: '1.5rem', 
        background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <Typography variant="body1" style={{ color: '#7b1fa2', fontWeight: 500, marginBottom: '0.5rem' }}>
          💡 Viewing Tip
        </Typography>
        <Typography variant="body2" style={{ color: '#8e24aa' }}>
          Use the toolbar controls within the PDF viewer to zoom, navigate pages, and access additional viewing options. 
          For the best experience, consider opening in a new tab or downloading the document.
        </Typography>
      </Paper>
    </Container>
  );
}