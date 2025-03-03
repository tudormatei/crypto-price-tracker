---
title: Project Structure
sidebar_position: 3
---

# Project Structure

```
crypto-price-tracker/
│── web-app/            # Next.js application
│   ├── public/        # Default assets
│   ├── src/
│   │   ├── app/            # Main app directory
│   │   ├── components/     # UI components (Button, InputField, Table, Providers)
│   │   ├── constants/      # UI constants (colors, padding, gap, border radius)
│   │   ├── hooks/         # Custom react hook useCrypto
│   │   ├── types/         # TypeScript type definitions
│   │   ├── utils/         # Utility functions (axios instance for API calls)
│   └── package.json   # Dependencies and scripts
│
│── docs/              # Docusaurus documentation
│   ├── docs/         # Documentation markdown files
│   ├── src/          # Custom styles and components
│   ├── docusaurus.config.js # Docusaurus configuration
│   └── package.json   # Dependencies and scripts
│
└── README.md          # Project overview
```
