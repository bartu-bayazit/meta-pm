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
import PsychologyIcon from '@mui/icons-material/Psychology';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SecurityIcon from '@mui/icons-material/Security';

export default function GeneralInfo3() {
  const teamMembers = [
    { name: "Arda Demirkıran", id: "2200356061", photo: "https://media.licdn.com/dms/image/v2/D4D03AQHUuvhApUlEQw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708195584745?e=2147483647&v=beta&t=TvmvTM3sssb-ByVyGrvLNr3gnNCm69KrOPooQydb53I" },
    { name: "Bartu Bayazıt", id: "2200356083", photo: "https://media.licdn.com/dms/image/v2/D4D03AQG2YH90Ilj1Sw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1686589386173?e=2147483647&v=beta&t=tYRCoP5-_QHMZTHrPWjn-0EhZjFCG6GOz7a0MN7CW38" },
    { name: "Prof. Dr. Mehmet Önder Efe", role: "Supervisor", photo: "https://cs.hacettepe.edu.tr/images/staff/56.jpg" }
  ];

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
        <Box style={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h4" style={{ 
            color: 'white', 
            textAlign: 'center', 
            fontWeight: 700,
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Neural Network Based Portfolio Management System
          </Typography>
          <Typography variant="h5" style={{ 
            color: 'rgba(255,255,255,0.9)', 
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: 300
          }}>
            Meet the team
          </Typography>
          
          {/* Team Section */}
          <Stack direction="column" spacing={1.5} style={{ maxWidth: '600px', margin: '0 auto' }}>
            {teamMembers.map((member, index) => (
              <Stack key={index} direction="row" spacing={2} alignItems="center" 
                     style={{ 
                       background: 'rgba(255,255,255,0.15)', 
                       padding: '1rem', 
                       borderRadius: '12px',
                       backdropFilter: 'blur(10px)',
                       border: '1px solid rgba(255,255,255,0.2)'
                     }}>
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
        </Box>
      </Paper>

      {/* Project Introduction */}
      <Paper elevation={3} style={{ padding: '2.5rem', marginBottom: '2rem', borderRadius: '15px' }}>
        <Typography variant="h4" style={{ color: '#333', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>
          Project Overview
        </Typography>
        <Typography variant="body1" style={{ 
          color: '#555', 
          lineHeight: 1.8, 
          fontSize: '1.1rem',
          marginBottom: '1.5rem',
          textAlign: 'justify'
        }}>
          MetaPM represents a sophisticated approach to algorithmic trading that leverages the power of ensemble learning 
          and modern portfolio theory. Rather than focusing solely on prediction accuracy—a common pitfall in financial 
          machine learning—our system prioritizes profitability through intelligent risk management and strategic position sizing.
        </Typography>
        <Typography variant="body1" style={{ 
          color: '#555', 
          lineHeight: 1.8, 
          fontSize: '1.1rem',
          textAlign: 'justify'
        }}>
          The system employs a hierarchical stacking ensemble that mimics the structure of a professional hedge fund, 
          where specialized analysts (base models) provide insights to a portfolio manager (metamodel) who makes the final 
          allocation decisions. This approach captures the collective intelligence of diverse machine learning architectures 
          while maintaining robust risk controls through mean-variance optimization.
        </Typography>
      </Paper>

      {/* Technical Architecture */}
      <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', borderRadius: '15px' }}>
        <Stack direction="row" alignItems="center" spacing={2} marginBottom={2}>
          <PsychologyIcon style={{ color: '#6a1b9a', fontSize: '40px' }} />
          <Typography variant="h4" style={{ color: '#333', fontWeight: 700 }}>
            Technical Architecture
          </Typography>
        </Stack>
        
        <Typography variant="h6" style={{ color: '#666', marginBottom: '2rem', textAlign: 'center' }}>
          Hierarchical Stacking Ensemble with Meta-Learning
        </Typography>

        <Grid container spacing={3} style={{ marginBottom: '2rem' }}>
          <Grid item xs={12} md={3}>
            <Card style={{ 
              height: '140px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#2e7d32', fontWeight: 600, marginBottom: '0.5rem' }}>
                  XGBoost
                </Typography>
                <Typography variant="body2" style={{ color: '#388e3c' }}>
                  Gradient boosting for tabular data excellence
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card style={{ 
              height: '140px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#1976d2', fontWeight: 600, marginBottom: '0.5rem' }}>
                  LSTM
                </Typography>
                <Typography variant="body2" style={{ color: '#1976d2' }}>
                  Long-term dependencies and sequential patterns
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card style={{ 
              height: '140px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#c2185b', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Transformer
                </Typography>
                <Typography variant="body2" style={{ color: '#c2185b' }}>
                  Self-attention for complex temporal relationships
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card style={{ 
              height: '140px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              background: 'linear-gradient(135deg, #fff3e0 0%, #ffcc02 100%)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#f57c00', fontWeight: 600, marginBottom: '0.5rem' }}>
                  CNN
                </Typography>
                <Typography variant="body2" style={{ color: '#f57c00' }}>
                  Convolutional networks for feature extraction
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider style={{ margin: '2rem 0' }} />

        <Box style={{ textAlign: 'center', padding: '1.5rem', background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)', borderRadius: '12px' }}>
          <Typography variant="h6" style={{ color: '#7b1fa2', fontWeight: 600, marginBottom: '0.5rem' }}>
            Random Forest Meta-Model
          </Typography>
          <Typography variant="body1" style={{ color: '#8e24aa' }}>
            Acts as portfolio manager, learning optimal combinations and weights from base model outputs
          </Typography>
        </Box>
      </Paper>

      {/* Data & Methodology */}
      <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', borderRadius: '15px' }}>
        <Stack direction="row" alignItems="center" spacing={2} marginBottom={2}>
          <ShowChartIcon style={{ color: '#d32f2f', fontSize: '40px' }} />
          <Typography variant="h4" style={{ color: '#333', fontWeight: 700 }}>
            Data & Methodology
          </Typography>
        </Stack>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" style={{ color: '#333', marginBottom: '1rem' }}>
              📊 Data Processing
            </Typography>
            <Box component="ul" style={{ paddingLeft: '1rem', margin: 0 }}>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                Daily OHLCV data from AlphaVantage API
              </Typography>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                Technical indicators: RSI, MACD, Bollinger Bands, moving averages
              </Typography>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                Event-based sampling with cumulative sum filter
              </Typography>
              <Typography component="li" variant="body1" style={{ color: '#666' }}>
                Temporal features and lagged variables
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" style={{ color: '#333', marginBottom: '1rem' }}>
              🎯 Training Strategy
            </Typography>
            <Box component="ul" style={{ paddingLeft: '1rem', margin: 0 }}>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                85/15 time-based train-test split
              </Typography>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                Strict temporal order preservation
              </Typography>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                No look-ahead bias or data leakage
              </Typography>
              <Typography component="li" variant="body1" style={{ color: '#666' }}>
                Binary directional predictions (Up/Down)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Portfolio Optimization */}
      <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', borderRadius: '15px' }}>
        <Stack direction="row" alignItems="center" spacing={2} marginBottom={2}>
          <SecurityIcon style={{ color: '#388e3c', fontSize: '40px' }} />
          <Typography variant="h4" style={{ color: '#333', fontWeight: 700 }}>
            Portfolio Optimization
          </Typography>
        </Stack>
        
        <Typography variant="h6" style={{ color: '#666', marginBottom: '2rem', textAlign: 'center' }}>
          Mean-Variance Optimization Framework
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box style={{ 
              textAlign: 'center', 
              padding: '1.5rem', 
              background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)', 
              borderRadius: '12px',
              height: '120px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography variant="h6" style={{ color: '#2e7d32', fontWeight: 600, marginBottom: '0.5rem' }}>
                Expected Returns
              </Typography>
              <Typography variant="body2" style={{ color: '#388e3c' }}>
                Probability-weighted return calculations
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box style={{ 
              textAlign: 'center', 
              padding: '1.5rem', 
              background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', 
              borderRadius: '12px',
              height: '120px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography variant="h6" style={{ color: '#1976d2', fontWeight: 600, marginBottom: '0.5rem' }}>
                Risk Modeling
              </Typography>
              <Typography variant="body2" style={{ color: '#1976d2' }}>
                60-day rolling covariance matrices
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box style={{ 
              textAlign: 'center', 
              padding: '1.5rem', 
              background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)', 
              borderRadius: '12px',
              height: '120px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography variant="h6" style={{ color: '#c2185b', fontWeight: 600, marginBottom: '0.5rem' }}>
                Position Sizing
              </Typography>
              <Typography variant="body2" style={{ color: '#c2185b' }}>
                Risk-adjusted weight allocation
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Results & Performance */}
      <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', borderRadius: '15px' }}>
        <Stack direction="row" alignItems="center" spacing={2} marginBottom={2}>
          <TrendingUpIcon style={{ color: '#2e7d32', fontSize: '40px' }} />
          <Typography variant="h4" style={{ color: '#333', fontWeight: 700 }}>
            Performance Results
          </Typography>
        </Stack>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box style={{ 
              textAlign: 'center', 
              padding: '2rem', 
              background: 'linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)', 
              borderRadius: '15px',
              color: 'white',
              transform: 'perspective(1px) translateZ(0)',
              transition: 'box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(46, 125, 50, 0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>
                ✓
              </Typography>
              <Typography variant="h5" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                Outperformed S&P 500
              </Typography>
              <Typography variant="body2">
                Consistent alpha generation on test data
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box style={{ 
              textAlign: 'center', 
              padding: '2rem', 
              background: 'linear-gradient(135deg, #1976d2 0%, #2196f3 100%)', 
              borderRadius: '15px',
              color: 'white',
              transform: 'perspective(1px) translateZ(0)',
              transition: 'box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(25, 118, 210, 0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>
                55%
              </Typography>
              <Typography variant="h5" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                Directional Accuracy
              </Typography>
              <Typography variant="body2">
                Strong predictive performance across models
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box style={{ 
              textAlign: 'center', 
              padding: '2rem', 
              background: 'linear-gradient(135deg, #7b1fa2 0%, #9c27b0 100%)', 
              borderRadius: '15px',
              color: 'white',
              transform: 'perspective(1px) translateZ(0)',
              transition: 'box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(123, 31, 162, 0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>
                ⚡
              </Typography>
              <Typography variant="h5" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                Live Trading Simulation
              </Typography>
              <Typography variant="body2">
                Real-time dashboard visualization
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Market Applications */}
      <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', borderRadius: '15px' }}>
        <Stack direction="row" alignItems="center" spacing={2} marginBottom={2}>
          <AutoAwesomeIcon style={{ color: '#f57c00', fontSize: '40px' }} />
          <Typography variant="h4" style={{ color: '#333', fontWeight: 700 }}>
            Market Applications
          </Typography>
        </Stack>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" style={{ color: '#333', marginBottom: '1rem' }}>
              🏛️ Institutional Use Cases
            </Typography>
            <Box component="ul" style={{ paddingLeft: '1rem', margin: 0 }}>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                Hedge fund systematic trading strategies
              </Typography>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                Asset management portfolio optimization
              </Typography>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                Quantitative research and backtesting
              </Typography>
              <Typography component="li" variant="body1" style={{ color: '#666' }}>
                Risk management and allocation systems
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" style={{ color: '#333', marginBottom: '1rem' }}>
              🔬 Research Contributions
            </Typography>
            <Box component="ul" style={{ paddingLeft: '1rem', margin: 0 }}>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                Ensemble learning in financial markets
              </Typography>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                Meta-learning for portfolio management
              </Typography>
              <Typography component="li" variant="body1" style={{ marginBottom: '0.5rem', color: '#666' }}>
                Technical analysis automation
              </Typography>
              <Typography component="li" variant="body1" style={{ color: '#666' }}>
                Risk-adjusted ML trading systems
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Future Enhancements */}
      <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', borderRadius: '15px' }}>
        <Stack direction="row" alignItems="center" spacing={2} marginBottom={2}>
          <RocketLaunchIcon style={{ color: '#6a1b9a', fontSize: '40px' }} />
          <Typography variant="h4" style={{ color: '#333', fontWeight: 700 }}>
            Future Enhancements
          </Typography>
        </Stack>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)', borderRadius: '12px', height: '100%' }}>
              <Typography variant="h6" style={{ color: '#7b1fa2', fontWeight: 600, marginBottom: '1rem' }}>
                🔍 Data Innovation
              </Typography>
              <Typography variant="body2" style={{ color: '#8e24aa', marginBottom: '0.5rem' }}>
                Volume and tick-based bars
              </Typography>
              <Typography variant="body2" style={{ color: '#8e24aa', marginBottom: '0.5rem' }}>
                Alternative data integration
              </Typography>
              <Typography variant="body2" style={{ color: '#8e24aa' }}>
                Sentiment analysis incorporation
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)', borderRadius: '12px', height: '100%' }}>
              <Typography variant="h6" style={{ color: '#2e7d32', fontWeight: 600, marginBottom: '1rem' }}>
                ⚙️ Technical Scaling
              </Typography>
              <Typography variant="body2" style={{ color: '#388e3c', marginBottom: '0.5rem' }}>
                Cloud deployment infrastructure
              </Typography>
              <Typography variant="body2" style={{ color: '#388e3c', marginBottom: '0.5rem' }}>
                Real-time processing optimization
              </Typography>
              <Typography variant="body2" style={{ color: '#388e3c' }}>
                Regulatory compliance features
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', borderRadius: '12px', height: '100%' }}>
              <Typography variant="h6" style={{ color: '#1976d2', fontWeight: 600, marginBottom: '1rem' }}>
                📈 Model Evolution
              </Typography>
              <Typography variant="body2" style={{ color: '#1976d2', marginBottom: '0.5rem' }}>
                Reinforcement learning integration
              </Typography>
              <Typography variant="body2" style={{ color: '#1976d2', marginBottom: '0.5rem' }}>
                Dynamic risk adjustment
              </Typography>
              <Typography variant="body2" style={{ color: '#1976d2' }}>
                Multi-asset universe expansion
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Call to Action */}
      <Paper elevation={4} style={{ 
        padding: '3rem', 
        background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #5e35b1 100%)',
        borderRadius: '20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E")'
        }} />
        <Box style={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h4" style={{ color: 'white', fontWeight: 700, marginBottom: '1rem' }}>
            Production-Ready Innovation
          </Typography>
          <Typography variant="h6" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
            Bridging academic research with real-world financial technology
          </Typography>
          
          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
            <Chip label="Ensemble Learning" style={{ background: '#4caf50', color: 'white', fontWeight: 600, margin: '0.25rem' }} />
            <Chip label="Risk Management" style={{ background: '#2196f3', color: 'white', fontWeight: 600, margin: '0.25rem' }} />
            <Chip label="Mean-Variance Optimization" style={{ background: '#ff9800', color: 'white', fontWeight: 600, margin: '0.25rem' }} />
            <Chip label="Live Trading Ready" style={{ background: '#e91e63', color: 'white', fontWeight: 600, margin: '0.25rem' }} />
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}