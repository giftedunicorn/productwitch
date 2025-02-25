import { scrapeProductHunt, analyzeWithAI, saveReport } from "./analyze.js";

const products = await scrapeProductHunt();

// Generate analysis
const analysis = await analyzeWithAI(products);

console.log(analysis);

saveReport(analysis);
