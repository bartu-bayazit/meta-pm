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
  Divider,
  LinearProgress
} from "@mui/material";

export default function GeneralInfo2() {
  const teamMembers = [
    { name: "Arda Demirkıran", id: "2200356061", photo: "https://via.placeholder.com/80" },
    { name: "Bartu Bayazıt", id: "2200356083", photo: "https://via.placeholder.com/80" },
    { name: "Prof. Dr. Mehmet Önder Efe", role: "Project Supervisor", photo: "https://via.placeholder.com/80" }
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: "2rem", fontFamily: "'Playfair Display', serif" }}>
      {/* Team Members Section */}
      <Paper elevation={4} style={{ padding: '2.5rem', marginBottom: '2rem', background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }}>
        <Typography variant="h4" gutterBottom style={{ color: 'white', textAlign: 'center', marginBottom: '2rem', fontWeight: 300 }}>
          MetaPM Trading System
        </Typography>
        <Typography variant="subtitle1" style={{ color: 'rgba(255,255,255,0.9)', textAlign: 'center', marginBottom: '2rem' }}>
          Hacettepe University • Computer Engineering Department
        </Typography>
        <Stack direction="column" spacing={3}>
          {teamMembers.map((member, index) => (
            <Stack key={index} direction="row" spacing={3} alignItems="center" 
                   style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
              <Avatar src={member.photo} sx={{ width: 70, height: 70, border: '3px solid rgba(255,255,255,0.3)' }} />
              <Box>
                <Typography variant="h6" style={{ color: 'white', fontWeight: 500 }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {member.id || member.role}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Paper>

      {/* Problem & Solution */}
      <Paper elevation={3} style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#1e3c72', marginBottom: '1rem' }}>
          AI-Powered Asset Price Prediction
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', borderLeft: '4px solid #dc3545' }}>
              <Typography variant="h6" style={{ color: '#dc3545', marginBottom: '1rem' }}>
                The Challenge
              </Typography>
              <Typography variant="body1" style={{ lineHeight: 1.7, color: '#495057' }}>
                Financial markets are complex, driven by human emotions and algorithmic trading. Traditional methods 
                struggle with the poor statistical properties of financial time series data, high noise levels, 
                and the challenge of turning predictions into profitable trades.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', borderLeft: '4px solid #28a745' }}>
              <Typography variant="h6" style={{ color: '#28a745', marginBottom: '1rem' }}>
                Our Solution
              </Typography>
              <Typography variant="body1" style={{ lineHeight: 1.7, color: '#495057' }}>
                A hierarchical ensemble system combining four AI models with a smart "portfolio manager" that 
                learns not just to predict, but to profit. We shifted focus from prediction accuracy to 
                real-world trading performance.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Technology Stack */}
      <Paper elevation={3} style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <Typography variant="h5" gutterBottom style={{ color: '#1e3c72', marginBottom: '2rem' }}>
          Technology Architecture
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card style={{ height: '200px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
              <CardContent style={{ textAlign: 'center', padding: '2rem' }}>
                <Typography variant="h6" style={{ marginBottom: '1rem', fontWeight: 600 }}>
                  Base Models
                </Typography>
                <Typography variant="body2" style={{ lineHeight: 1.6 }}>
                  LSTM • Transformer<br/>
                  Fully Convolutional<br/>
                  XGBoost
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card style={{ height: '200px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
              <CardContent style={{ textAlign: 'center', padding: '2rem' }}>
                <Typography variant="h6" style={{ marginBottom: '1rem', fontWeight: 600 }}>
                  Meta-Learning
                </Typography>
                <Typography variant="body2" style={{ lineHeight: 1.6 }}>
                  Random Forest<br/>
                  Portfolio Manager<br/>
                  Smart Combination
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card style={{ height: '200px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>
              <CardContent style={{ textAlign: 'center', padding: '2rem' }}>
                <Typography variant="h6" style={{ marginBottom: '1rem', fontWeight: 600 }}>
                  Optimization
                </Typography>
                <Typography variant="body2" style={{ lineHeight: 1.6 }}>
                  Mean-Variance<br/>
                  Risk Management<br/>
                  Position Sizing
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card style={{ height: '200px', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', color: 'white' }}>
              <CardContent style={{ textAlign: 'center', padding: '2rem' }}>
                <Typography variant="h6" style={{ marginBottom: '1rem', fontWeight: 600 }}>
                  Live Trading
                </Typography>
                <Typography variant="body2" style={{ lineHeight: 1.6 }}>
                  Real-time Dashboard<br/>
                  Backtesting Engine<br/>
                  Performance Metrics
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* Key Innovation */}
      <Paper elevation={3} style={{ padding: '2.5rem', marginBottom: '2rem', background: '#f8f9fa' }}>
        <Typography variant="h5" gutterBottom style={{ color: '#1e3c72', marginBottom: '1.5rem' }}>
          Key Innovation: Beyond Prediction Accuracy
        </Typography>
        
        <Box style={{ padding: '2rem', background: 'white', borderRadius: '12px', border: '1px solid #e9ecef' }}>
          <Typography variant="body1" style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#495057', marginBottom: '1.5rem' }}>
            <strong>The Insight:</strong> After our first semester, we realized that profitability matters more than 
            prediction accuracy. A 55% accurate model that knows when to bet big can outperform a 75% accurate 
            model that treats all predictions equally.
          </Typography>
          
          <Typography variant="body1" style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#495057' }}>
            <strong>The Solution:</strong> Our Random Forest "metamodel" doesn't just combine predictions—it learns to 
            be a portfolio manager, deciding position sizes, managing risk, and optimizing for profit rather than accuracy.
          </Typography>
        </Box>
      </Paper>

      {/* Performance Results */}
      <Paper elevation={3} style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <Typography variant="h5" gutterBottom style={{ color: '#1e3c72', marginBottom: '2rem' }}>
          Performance Results
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box style={{ textAlign: 'center', padding: '2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '15px', color: 'white' }}>
              <Typography variant="h3" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>
                ✓
              </Typography>
              <Typography variant="h6" style={{ marginBottom: '1rem' }}>
                Beat S&P 500
              </Typography>
              <Typography variant="body2" style={{ opacity: 0.9 }}>
                Consistent outperformance on test data with controlled risk
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box style={{ textAlign: 'center', padding: '2rem', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '15px', color: 'white' }}>
              <Typography variant="h3" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>
                45-55%
              </Typography>
              <Typography variant="h6" style={{ marginBottom: '1rem' }}>
                Directional Accuracy
              </Typography>
              <Typography variant="body2" style={{ opacity: 0.9 }}>
                Strong signal detection across different market conditions
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box style={{ textAlign: 'center', padding: '2rem', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: '15px', color: 'white' }}>
              <Typography variant="h3" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>
                📈
              </Typography>
              <Typography variant="h6" style={{ marginBottom: '1rem' }}>
                Risk-Adjusted Returns
              </Typography>
              <Typography variant="body2" style={{ opacity: 0.9 }}>
                Maintained performance with controlled drawdowns
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Market Applications */}
      <Paper elevation={3} style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <Typography variant="h5" gutterBottom style={{ color: '#1e3c72', marginBottom: '2rem' }}>
          Real-World Applications
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card style={{ height: '100%', padding: '1.5rem' }}>
              <Typography variant="h6" style={{ color: '#495057', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                🏦 Investment Firms
              </Typography>
              <Typography variant="body1" style={{ lineHeight: 1.7, color: '#6c757d' }}>
                Hedge funds and asset management companies can integrate our ensemble methodology into their 
                systematic trading strategies. The transparent AI decision-making process builds trust with clients.
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card style={{ height: '100%', padding: '1.5rem' }}>
              <Typography variant="h6" style={{ color: '#495057', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                📊 Fintech Platforms
              </Typography>
              <Typography variant="body1" style={{ lineHeight: 1.7, color: '#6c757d' }}>
                Robo-advisors and algorithmic trading platforms can leverage our metamodel approach to 
                provide sophisticated portfolio management for retail and institutional clients.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* What's Next */}
      <Paper elevation={3} style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <Typography variant="h5" gutterBottom style={{ color: '#1e3c72', marginBottom: '2rem' }}>
          Next Steps & Roadmap
        </Typography>
        
        <Box style={{ marginBottom: '2rem' }}>
          <Typography variant="h6" style={{ color: '#495057', marginBottom: '1rem' }}>
            Immediate Enhancements
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box style={{ padding: '1rem', background: '#e3f2fd', borderRadius: '8px', marginBottom: '1rem' }}>
                <Typography variant="body2" style={{ fontWeight: 600, color: '#1976d2' }}>
                  Data-Driven Bars
                </Typography>
                <Typography variant="body2" style={{ color: '#1976d2' }}>
                  Volume and volatility-based sampling instead of time bars
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box style={{ padding: '1rem', background: '#f3e5f5', borderRadius: '8px', marginBottom: '1rem' }}>
                <Typography variant="body2" style={{ fontWeight: 600, color: '#7b1fa2' }}>
                  Transaction Costs
                </Typography>
                <Typography variant="body2" style={{ color: '#7b1fa2' }}>
                  Real-world trading cost and slippage modeling
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Typography variant="h6" style={{ color: '#495057', marginBottom: '1rem' }}>
            Future Expansion
          </Typography>
          <Typography variant="body1" style={{ lineHeight: 1.7, color: '#6c757d' }}>
            • <strong>Multi-Asset Classes:</strong> Expand beyond equities to crypto, commodities, and fixed income<br/>
            • <strong>Alternative Data:</strong> Integrate news sentiment, satellite imagery, and economic indicators<br/>
            • <strong>Cloud Infrastructure:</strong> Real-time processing with regulatory compliance features<br/>
            • <strong>Adaptive Learning:</strong> Dynamic risk adjustment based on market regimes
          </Typography>
        </Box>
      </Paper>

      {/* Closing Statement */}
      <Paper elevation={4} style={{ padding: '2.5rem', background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', textAlign: 'center' }}>
        <Typography variant="h5" style={{ color: 'white', marginBottom: '1rem', fontWeight: 300 }}>
          "Machine learning in finance isn't about perfect predictions—
        </Typography>
        <Typography variant="h5" style={{ color: 'white', marginBottom: '2rem', fontWeight: 300 }}>
          it's about making statistically sound decisions under uncertainty."
        </Typography>
        <Typography variant="body1" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
          This project demonstrates how modern AI can create systematic, adaptive trading strategies 
          that bridge the gap between academic research and real-world financial markets.
        </Typography>
      </Paper>
    </Container>
  );
}