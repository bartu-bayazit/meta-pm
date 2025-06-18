// GeneralInfo.jsx
import React from "react";
import { 
  Container, 
  Paper, 
  Typography, 
  Stack, 
  Avatar, 
  Box, 
  Chip, 
  Grid, 
  Card, 
  CardContent,
  Divider 
} from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function GeneralInfo() {
  const teamMembers = [
    { name: "Arda Demirkıran", id: "2200356061", photo: "https://via.placeholder.com/80" },
    { name: "Bartu Bayazıt", id: "2200356083", photo: "https://via.placeholder.com/80" },
    { name: "Prof. Dr. Mehmet Önder Efe", role: "Supervisor", photo: "https://via.placeholder.com/80" }
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: "2rem", fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section */}
      <Paper elevation={4} style={{ 
        padding: '3rem', 
        marginBottom: '2rem', 
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        borderRadius: '20px'
      }}>
        <Typography variant="h2" style={{ 
          color: 'white', 
          textAlign: 'center', 
          fontWeight: 700,
          marginBottom: '1rem'
        }}>
          MetaPM
        </Typography>
        <Typography variant="h5" style={{ 
          color: 'rgba(255,255,255,0.9)', 
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          AI-Powered Portfolio Management System
        </Typography>
        
        {/* Team Section */}
        <Stack direction="column" spacing={1.5} style={{ maxWidth: '600px', margin: '0 auto' }}>
          {teamMembers.map((member, index) => (
            <Stack key={index} direction="row" spacing={2} alignItems="center" 
                   style={{ background: 'rgba(255,255,255,0.15)', padding: '1rem', borderRadius: '12px' }}>
              <Avatar src={member.photo} sx={{ width: 50, height: 50 }} />
              <Box>
                <Typography variant="h6" style={{ color: 'white', fontWeight: 500 }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {member.id || member.role}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Paper>

      {/* The Problem */}
      <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', borderRadius: '15px' }}>
        <Stack direction="row" alignItems="center" spacing={2} marginBottom={2}>
          <Box style={{ background: '#ff6b6b', padding: '10px', borderRadius: '50%' }}>
            <Typography style={{ color: 'white', fontSize: '20px' }}>⚠️</Typography>
          </Box>
          <Typography variant="h4" style={{ color: '#333', fontWeight: 700 }}>
            The Problem
          </Typography>
        </Stack>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box style={{ textAlign: 'center' }}>
              <Typography variant="h6" style={{ color: '#333', marginBottom: '0.5rem' }}>
                Poor Data Quality
              </Typography>
              <Typography variant="body2" style={{ color: '#666' }}>
                Time-based bars lack statistical properties needed for ML
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box style={{ textAlign: 'center' }}>
              <Typography variant="h6" style={{ color: '#333', marginBottom: '0.5rem' }}>
                Single Model Limitations
              </Typography>
              <Typography variant="body2" style={{ color: '#666' }}>
                Traditional approaches miss complex market patterns
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box style={{ textAlign: 'center' }}>
              <Typography variant="h6" style={{ color: '#333', marginBottom: '0.5rem' }}>
                Risk Management
              </Typography>
              <Typography variant="body2" style={{ color: '#666' }}>
                Accuracy ≠ Profitability without proper risk control
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Our Solution */}
      <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', borderRadius: '15px' }}>
        <Stack direction="row" alignItems="center" spacing={2} marginBottom={2}>
          <AutoAwesomeIcon style={{ color: '#4ecdc4', fontSize: '40px' }} />
          <Typography variant="h4" style={{ color: '#333', fontWeight: 700 }}>
            Our Solution
          </Typography>
        </Stack>

        <Typography variant="h5" style={{ color: '#666', marginBottom: '2rem', textAlign: 'center' }}>
          Ensemble Learning + Mean-Variance Optimization
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e8f5e8' }}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#2e7d32', fontWeight: 600 }}>
                  4 AI Models
                </Typography>
                <Typography variant="body2" style={{ color: '#388e3c' }}>
                  LSTM + Transformer + FCN + XGBoost
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e3f2fd' }}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#1976d2', fontWeight: 600 }}>
                  Meta-Learning
                </Typography>
                <Typography variant="body2" style={{ color: '#1976d2' }}>
                  Random Forest Portfolio Manager
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fce4ec' }}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#c2185b', fontWeight: 600 }}>
                  Risk Control
                </Typography>
                <Typography variant="body2" style={{ color: '#c2185b' }}>
                  Mean-Variance Optimization
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff3e0' }}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#f57c00', fontWeight: 600 }}>
                  Live Trading
                </Typography>
                <Typography variant="body2" style={{ color: '#f57c00' }}>
                  Real-time Visualization
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* Results */}
      <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', borderRadius: '15px' }}>
        <Stack direction="row" alignItems="center" spacing={2} marginBottom={2}>
          <TrendingUpIcon style={{ color: '#2e7d32', fontSize: '40px' }} />
          <Typography variant="h4" style={{ color: '#333', fontWeight: 700 }}>
            Results
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box style={{ 
              textAlign: 'center', 
              padding: '2rem', 
              background: 'linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)', 
              borderRadius: '15px',
              color: 'white'
            }}>
              <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>
                ✓
              </Typography>
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                Beat S&P500
              </Typography>
              <Typography variant="body2">
                Consistent outperformance on test data
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box style={{ 
              textAlign: 'center', 
              padding: '2rem', 
              background: 'linear-gradient(135deg, #1976d2 0%, #2196f3 100%)', 
              borderRadius: '15px',
              color: 'white'
            }}>
              <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>
                55%
              </Typography>
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                Accuracy
              </Typography>
              <Typography variant="body2">
                Directional prediction accuracy
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box style={{ 
              textAlign: 'center', 
              padding: '2rem', 
              background: 'linear-gradient(135deg, #c2185b 0%, #e91e63 100%)', 
              borderRadius: '15px',
              color: 'white'
            }}>
              <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>
                ⚡
              </Typography>
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                Real-time
              </Typography>
              <Typography variant="body2">
                Live trading simulation ready
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Market Opportunity */}
      <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', borderRadius: '15px' }}>
        <Stack direction="row" alignItems="center" spacing={2} marginBottom={2}>
          <RocketLaunchIcon style={{ color: '#f57c00', fontSize: '40px' }} />
          <Typography variant="h4" style={{ color: '#333', fontWeight: 700 }}>
            Impact & Future
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" style={{ color: '#333', marginBottom: '1rem' }}>
              🏦 Immediate Applications
            </Typography>
            <Box component="ul" style={{ paddingLeft: '1rem', margin: 0 }}>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                Hedge fund systematic strategies
              </Typography>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                Institutional portfolio management
              </Typography>
              <Typography component="li" variant="body1" style={{ color: '#666' }}>
                Automated trading platforms
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" style={{ color: '#333', marginBottom: '1rem' }}>
              🚀 Next Steps
            </Typography>
            <Box component="ul" style={{ paddingLeft: '1rem', margin: 0 }}>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                Data-driven bars (volume/tick-based)
              </Typography>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                Alternative data integration
              </Typography>
              <Typography component="li" variant="body1" style={{ color: '#666' }}>
                Cloud deployment & compliance
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Call to Action */}
      <Paper elevation={4} style={{ 
        padding: '3rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '20px',
        textAlign: 'center'
      }}>
        <Typography variant="h4" style={{ color: 'white', fontWeight: 700, marginBottom: '1rem' }}>
          Ready for Production
        </Typography>
        <Typography variant="h6" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
          From academic research to real-world trading systems
        </Typography>
        
        <Stack direction="row" spacing={2} justifyContent="center">
          <Chip label="Production Ready" style={{ background: '#4caf50', color: 'white', fontWeight: 600 }} />
          <Chip label="Scalable" style={{ background: '#2196f3', color: 'white', fontWeight: 600 }} />
          <Chip label="Proven Results" style={{ background: '#ff9800', color: 'white', fontWeight: 600 }} />
        </Stack>
      </Paper>
    </Container>
  );
}