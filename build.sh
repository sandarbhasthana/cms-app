#!/bin/bash
# Vercel build script that works from any directory

# Navigate to packages/prisma and generate client
cd packages/prisma
npm install
npm run generate

# Navigate to frontend and build
cd ../../frontend  
npm install
npm run build
