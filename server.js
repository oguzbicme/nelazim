// server.js - Express backend for nelazim.com exposing AI tool endpoints and serving static frontend
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

async function callOpenAI(prompt) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('Missing OPENAI_API_KEY environment variable');
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error('No content returned from OpenAI');
  }
  return content;
}

app.post('/api/product-description', async (req, res) => {
  try {
    const { name, features, targetAudience } = req.body;
    const prompt = `You are an expert product copywriter. Create a rich product description around 150 words, a one-sentence pitch, and three short tags.\nProduct name: ${name || 'Unknown'}\nKey features: ${features || 'Not provided'}\nTarget audience: ${targetAudience || 'General'}\nFormat:\nLong Description:\n<text>\nShort Pitch:\n<text>\nTags:\n#tag1, #tag2, #tag3`;
    const content = await callOpenAI(prompt);
    res.json({ success: true, content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message || 'Something went wrong' });
  }
});

app.post('/api/ad-copy', async (req, res) => {
  try {
    const { product, platform, targetAudience } = req.body;
    const prompt = `You are a performance marketer. Generate a main ad copy, two A/B test variations, and 1-2 CTA suggestions.\nProduct/Service: ${product || 'Unknown'}\nPlatform: ${platform || 'Any'}\nTarget audience: ${targetAudience || 'General'}\nFormat:\nMain copy:\n-\nVariation A:\n-\nVariation B:\n-\nCTA suggestions:\n-`;
    const content = await callOpenAI(prompt);
    res.json({ success: true, content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message || 'Something went wrong' });
  }
});

app.post('/api/instagram-content', async (req, res) => {
  try {
    const { concept, tone, keywords } = req.body;
    const prompt = `You create Instagram content. Provide a caption, story idea, reels idea, and a hashtag list.\nConcept: ${concept || 'General'}\nTone: ${tone || 'Friendly'}\nKeywords: ${keywords || 'N/A'}\nFormat:\nCaption:\n<text>\nStory idea:\n<text>\nReels idea:\n<text>\nHashtags:\n#tag1 #tag2 ...`;
    const content = await callOpenAI(prompt);
    res.json({ success: true, content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message || 'Something went wrong' });
  }
});

app.post('/api/campaign-plan', async (req, res) => {
  try {
    const { brand, budget, days } = req.body;
    const prompt = `You are a media strategist. Build a concise campaign plan.\nBrand: ${brand || 'Brand'}\nBudget: ${budget || 'Flexible'}\nDuration (days): ${days || '7'}\nInclude: Campaign theme, main creative idea, day-by-day plan for ${days || 'the given'} days, and ad/media suggestions. Use bullet points.`;
    const content = await callOpenAI(prompt);
    res.json({ success: true, content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message || 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`nelazim.com server running at http://localhost:${PORT}`);
});
