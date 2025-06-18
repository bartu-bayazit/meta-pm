import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Chip,
  Button,
  Paper,
  LinearProgress,
  Stack
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
      await fetch("http://localhost:8000/train", {
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
    const socket = new WebSocket("ws://localhost:8000/ws");

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
  }, []);

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
          disabled={processing || selectedTickers.length === 0}
        >
          See Expected Performance
        </Button>

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
              src={`http://localhost:8000/outputs/${img}`}
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
              This chart shows insights from your selected tickers related to{" "}
              {img.replace(/_/g, " ").replace(".png", "").split(" ").slice(0, 2).join(" ")}.
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
