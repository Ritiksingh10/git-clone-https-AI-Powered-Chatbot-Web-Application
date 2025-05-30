const express = require('express');
const auth = require('../middleware/auth');
const axios = require('axios');
const router = express.Router();

// POST /api/query - Protected
router.post('/query', auth, async (req, res) => {
  const { message } = req.body;

  if (!message) return res.status(400).json({ msg: 'Message is required' });

  try {
    console.log("hari");
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo", // or "gpt-4" if you have access
        messages: [{ role: "user", content: message }]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );
    console.log("haro");

    const reply = response.data.choices[0].message.content;
    res.json({ reply });

  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ msg: 'Failed to generate response' });
  }
});

module.exports = router;