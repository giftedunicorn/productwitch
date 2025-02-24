# ProductWitch 🔮

An automated Product Hunt daily launch analyzer that generates comprehensive reports in Chinese using AI.

## Features

- 🤖 Automatically scrapes Product Hunt's daily launches
- 🧠 AI-powered analysis using Claude 3.5 Sonnet
- 🇨🇳 Generates detailed reports in Chinese
- 📊 Includes trend analysis and key insights
- 🎯 Identifies promising products and opportunities

## Prerequisites

- Node.js (v16 or higher)
- An Anthropic API key
- Chrome browser (automatically installed during setup)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/productwitch.git
cd productwitch
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Anthropic API key:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

## Usage

Run the analyzer:

```bash
npm start
```

The tool will:

1. Scrape the latest Product Hunt launches
2. Analyze the products using AI
3. Generate a detailed report in Chinese
4. Save the report in the `output` directory

## Report Structure

Each generated report includes:

### 1. Trend Analysis

- Main product categories
- Prominent trends
- Notable YC or well-known company products
- Highest voted products

### 2. Product Summaries

- Chinese name translations
- Core value propositions
- Key features and technology
- Target user analysis
- Notable aspects

### 3. Key Takeaways

- Main trend summary
- Potential opportunities
- Promising products to watch

## Technical Details

- Built with Puppeteer for web scraping
- Powered by Anthropic's Claude 3.5 AI model
- Node.js backend with ES modules
- Automated report generation and storage

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC License - See [LICENSE](LICENSE) for details

## Keywords

product hunt, ai analysis, chinese market analysis, startup trends, product analysis, market research, ai report generator, claude ai, anthropic, web scraping, puppeteer

## Author

Feng Liu

---

_ProductWitch - Your AI-powered Product Hunt analysis companion_ 🔮
