import express from "express";
import cors from "cors";
import { scrapeProductHunt, analyzeWithAI } from "./src/analyze.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

// Health check endpoint
app.get("/api/v1/health", (req, res) => {
  res.json({ status: "ok" });
});

// Main API endpoint to generate Product Hunt analysis
app.post("/api/v1/report", async (req, res) => {
  try {
    const { date } = req.body;
    console.log("Starting analysis process...");

    // Scrape Product Hunt
    const products = await scrapeProductHunt();

    // Generate analysis
    const analysis = await analyzeWithAI(products);

    res.json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("Error in analysis:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Internal server error",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
