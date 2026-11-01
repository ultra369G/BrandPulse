import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { db } from './db/db';
import { profiles, projectMetrics } from './db/schema';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ app: 'BrandPulse API', 
    author: 'George', 
    status: 'online',
    endpoints: ['/api/health', '/api/profile'] });
});

// Get profile data
app.get('/api/profile', async (req, res) => {
  try {
    const allProfiles = await db.select().from(profiles);
    res.json(allProfiles[0] || { message: 'No profile configured yet.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});