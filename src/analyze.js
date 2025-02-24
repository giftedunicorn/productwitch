import puppeteer from "puppeteer";
import { Anthropic } from "@anthropic-ai/sdk";
import dotenv from "dotenv";
import fs from "fs/promises";
import { SYSTEM_INSTRUCTION } from "./prompt.js";

dotenv.config();

async function scrapeProductHunt() {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  try {
    const page = await browser.newPage();
    await page.goto("https://www.producthunt.com");
    await page.waitForSelector('[data-test="homepage-section-1"]');
    const element = await page.$('[data-test="homepage-section-1"]');

    const value = await element.evaluate((el) => el.textContent);

    return value;
  } finally {
    await browser.close();
  }
}

async function analyzeWithAI(pageContent) {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const response = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 4096,
    system: SYSTEM_INSTRUCTION,
    messages: [
      {
        role: "user",
        content: `Please analyze these Product Hunt launches: ${pageContent}`,
      },
    ],
  });

  return response.content[0].text;
}

async function saveReport(analysis) {
  const date = new Date().toISOString().split("T")[0];
  const random = Math.random().toString(36).substring(2, 7);
  const filename = `output/ph-report-${date}-${random}.md`;
  await fs.writeFile(filename, analysis, "utf-8");
  return filename;
}

// Export the functions so they can be used by the server
export { scrapeProductHunt, analyzeWithAI, saveReport };

// Comment out or remove the main() call since we'll be calling these functions from the server
// main();
