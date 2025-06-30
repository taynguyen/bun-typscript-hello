import FirecrawlApp, { ScrapeResponse } from '@mendable/firecrawl-js';

const app = new FirecrawlApp({
  apiUrl: "http://localhost:3002",
  // apiKey: "fc-YOUR_API_KEY"
  apiKey: "fc-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
});

// Scrape a website:
const scrapeResult = await app.scrapeUrl('https://taynguyen.dev', { formats: ['markdown'] }) as ScrapeResponse;

if (!scrapeResult.success) {
  throw new Error(`Failed to scrape: ${scrapeResult.error}`)
}

// console.log(scrapeResult)

// Print markdown
console.log(scrapeResult.markdown)


// Supabase pwd: omyk^pSGXa9W%L9N%Dyu79n4
