import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Chip,
  Button,
  Paper,
  LinearProgress,
  Stack,
  TextField,
} from "@mui/material";
import "./App.css";

const TICKERS = ["GOOGL", "MSFT", "NFLX", "TSLA", "TXN"];

const PNG_FILES = [
  "confusion_matrix.png",
  "daily_pnl.png",
  "drawdown.png",
  "equity_curve.png",
  "feature_importance.png",
  "position_weights.png",
  "ticker_accuracy.png",
];

const chartDescriptions = [
  "This matrix reveals how accurately our models predict market direction by showing correct vs incorrect predictions. The diagonal values indicate successful forecasts, while off-diagonal values show prediction errors. Higher diagonal values demonstrate stronger model reliability for trading decisions.",
  
  "This visualization tracks daily profit and loss fluctuations of the trading strategy. It helps identify periods of strong performance versus challenging market conditions. Consistent positive daily returns indicate a robust strategy, while volatility patterns reveal risk characteristics.",
  
  "This chart displays the maximum peak-to-trough decline in portfolio value during the backtesting period. It represents the worst-case scenario an investor would have experienced. Lower drawdown values indicate better risk management and capital preservation.",
  
  "This curve shows the cumulative growth of your investment over time using the MetaPM strategy. An upward trending line indicates positive returns, while the slope reveals the consistency of performance. Compare this against benchmark indices to assess strategy effectiveness.",
  
  "This analysis reveals which technical indicators and market features most influence our model's predictions. Higher importance scores indicate more critical factors for trading decisions. Understanding these drivers helps explain why the model makes specific buy/sell recommendations.",
  
  "This visualization shows how capital is dynamically allocated across different assets over time. Varying bar heights represent position sizes, while colors distinguish between different stocks. It demonstrates the model's diversification strategy and risk distribution.",
  
  "This breakdown shows prediction accuracy for each individual stock in the portfolio. Higher accuracy percentages indicate assets that our models can forecast more reliably. This helps identify which stocks contribute most to overall strategy performance."
];

const STATUS_MESSAGES = [
  "Initializing analysis...",
  "Fetching market data...",
  "Training metamodel...",
  "Evaluating strategy...",
  "Generating visuals...",
  "Finalizing...",
];

export default function Portfolio() {
  const [selectedTickers, setSelectedTickers] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [summaryOutput, setSummaryOutput] = useState("");

  const [ipAddress, setIpAddress] = useState("");
  const [ipSaved,setIpSaved] = useState(false);

  const toggleTicker = (symbol) => {
    setSelectedTickers((prev) =>
      prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]
    );
  };

  const handleSubmit = async () => {
    setProcessing(true);
    setProgress(0);
    setCurrentMessage(STATUS_MESSAGES[0]);
    setShowResults(false);

    try {
      await fetch(`http://${ipAddress}:8000/train`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tickers: selectedTickers }),
      });
      // WebSocket will handle progress updates
    } catch (error) {
      console.error("Training start failed:", error);
      setProcessing(false);
    }
  };

  useEffect(() => {
    const socket = new WebSocket(`ws://${ipAddress === "" ? "localhost" : ipAddress}:8000/ws`);

     let progressQueue = [];  // Stores incoming updates
  let displayInterval;     // Timer for UI update pacing

    socket.onmessage = (event) => {
      const msg = event.data;
      console.log(msg);

      /*if (msg === "done") {
        setProgress(100);
        setCurrentMessage("Completed successfully!");
        setTimeout(() => {
          setProcessing(false);
          setShowResults(true);
        }, 500);
        return;
      }*/
      if (msg.startsWith("summary::")) {
        setSummaryOutput(msg.replace("summary::", ""));
        return;
      }
      // If message is JSON progress
      try {
      const { percentage: prog, message: content } = JSON.parse(msg);
      console.log(content);
      progressQueue.push({ prog, content });
    } catch (e) {
      console.warn("Unrecognized message from socket:", msg);
    }
    };

    displayInterval = setInterval(() => {
    if (progressQueue.length > 0) {
      const { prog, content } = progressQueue.shift();
      console.log("Current message from queue: ",content);
      setProgress((prev) => Math.min(prog, 100));
      setCurrentMessage(content);

      if(content === "BACKTEST COMPLETE"){
        setTimeout(() => {
          setProcessing(false);
          setShowResults(true);
        }, 500);
      }

    }
  }, 2000);

    return () => {
    socket.close();
    clearInterval(displayInterval);
  };
  }, [ipAddress]);

  return (
    <Container maxWidth="md" style={{ fontFamily: "'Playfair Display', serif", marginTop: "2rem" }}>
      <Paper elevation={3} style={{ padding: "2rem" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Build Your Basket Of Tickers To See How They Can Perform
        </Typography>

        <Typography variant="subtitle1">Select Tickers:</Typography>
        <Grid container spacing={1} style={{ marginBottom: "1rem" }}>
          {TICKERS.map((ticker) => (
            <Grid item key={ticker}>
              <Chip
                label={ticker}
                color={selectedTickers.includes(ticker) ? "success" : "default"}
                onClick={() => toggleTicker(ticker)}
                clickable
                className="ticker-chip"
              />
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={processing || selectedTickers.length === 0||ipAddress === ""}
        >
          See Expected Performance
        </Button>

         <Stack direction="row" spacing={2} alignItems="center" mb={3}>
          <TextField
            label="Server IP Address"
            value={ipAddress}
            disabled={ipSaved}
            onChange={(e) => setIpAddress(e.target.value)}
            placeholder="e.g. 192.168.1.123"
            size="small"
          />
          {/*<Button variant="outlined" disabled={ipSaved || !ipAddress} onClick={() => setIpSaved(true)}>
            Save
          </Button>*/}
        </Stack>

        {processing && (
          <div style={{ marginTop: "2rem" }}>
            <LinearProgress variant="determinate" value={progress} />
            <Typography key={currentMessage} className="fade-message" style={{ marginTop: "1rem" }} align="center">
              {console.log("current message in component:",currentMessage)}
              {currentMessage}
            </Typography>
            <Typography variant="body2" align="center" style={{ marginTop: "0.5rem" }}>
              Progress: {progress}%
            </Typography>
          </div>
        )}

        {showResults && (
  <Stack direction="column" spacing={6} style={{ marginTop: "3rem" }}>
    <Typography variant="h5" gutterBottom>
      Forecast Results
    </Typography>
    <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
      {summaryOutput}
    </Typography>
    {PNG_FILES.map((img, idx) => {
      const isEven = idx % 2 === 0;
      return (
        <Stack
          key={img}
          direction={isEven ? "row" : "row-reverse"}
          spacing={3}
          alignItems="center"
          sx={{
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "1rem 0",
          }}
        >
          <Paper
            elevation={4}
            sx={{
              flex: 1.2,
              p: 2,
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <img
              src={`http://${ipAddress}:8000/outputs/${img}`}
              alt={img}
              style={{
                width: "100%",
                maxWidth: "700px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            />
          </Paper>
          <Stack flex={0.8} spacing={1}>
            <Typography variant="h6" fontWeight="bold">
              {img.replace(/_/g, " ").replace(".png", "").toUpperCase()}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {chartDescriptions[idx]}
            </Typography>
          </Stack>
        </Stack>
      );
    })}
  </Stack>
)}
      </Paper>
    </Container>
  );
}
