import express from 'express';
//import wpscanHandler from './wpscanHandler.js';
import wpscanHandler from './test.js';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));  // 允许所有跨域请求

// Middleware to parse JSON request bodies
app.use(express.json());

// Route binding: POST /api/wpscan will be handled by wpscanHandler
app.post('/api/wpscan', wpscanHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
