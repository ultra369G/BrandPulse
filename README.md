# BrandPulse — Full-Stack Developer Hub & Portfolio

> **Author / Maintainer:** George  
> **Target Role:** Software Engineer  
> **Tech Stack:** TypeScript, React (Vite), Node.js, Express, PostgreSQL, Drizzle ORM  

---

## 🚀 Overview
**BrandPulse** is a production-grade, full-stack developer portfolio and live activity command center built to establish a cohesive personal technical brand. Unlike static templates, BrandPulse features a type-safe REST API backed by a relational PostgreSQL database managed via Drizzle ORM.

## 🛠️ Architecture & Tech Stack

* **Frontend:** React, TypeScript, Vite, Tailwind CSS, Lucide Icons
* **Backend:** Node.js, Express, TypeScript (`tsx`)
* **Database & ORM:** PostgreSQL, Drizzle ORM (Zero-overhead type-safe SQL queries)

---

## 📂 Project Structure

```text
BrandPulse/
├── client/              # Frontend React application (Vite + Tailwind)
│   ├── src/
│   │   ├── App.tsx      # Main dashboard & API consumer
│   │   └── main.tsx     # React DOM entry point
│   └── package.json
└── server/              # Backend REST API
    ├── src/
    │   ├── db/
    │   │   ├── db.ts    # PostgreSQL connection pool
    │   │   └── schema.ts# Drizzle database schemas
    │   └── index.ts     # Express server & endpoints
    └── package.json"# BrandPulse" 
