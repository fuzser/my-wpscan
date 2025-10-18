import express from 'express';
//import wpscanHandler from './wpscanHandler.js';
import wpscanHandler from './wpscanHandler.js';
import cors from 'cors';
import aiHandler from './AI-result.js';

const app = express();

app.use(cors());  // 允许所有跨域请求

// Middleware to parse JSON request bodies
app.use(express.json());

// Route binding: POST /api/wpscan will be handled by wpscanHandler
app.post('/api/wpscan', wpscanHandler);
app.post('/api/ai', aiHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
