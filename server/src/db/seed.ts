import { db } from './db';
import { profiles, projectMetrics } from './schema';
import * as dotenv from 'dotenv';

dotenv.config();

async function seed() {
  console.log('Seeding database...');
  
  // Insert initial profile data with your name
  await db.insert(profiles).values({
    fullName: 'George',
    title: 'Software Engineer & Full-Stack Developer',
    bio: 'Building production-grade web applications with TypeScript, React, Node, and PostgreSQL.',
    githubUrl: 'https://github.com/george', // update with your actual handle
  });

  // Insert initial project metric
  await db.insert(projectMetrics).values({
    projectName: 'BrandPulse',
    views: 1,
    stars: 5,
  });

  console.log('Database seeded successfully!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});