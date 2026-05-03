#!/bin/bash

# Deployment Script for Vercel
# This script prepares and deploys your portfolio to Vercel

echo "🚀 Starting deployment process..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

# Run build to check for errors
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Check if Vercel CLI is installed
    if ! command -v vercel &> /dev/null; then
        echo "⚠️  Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    echo "🌐 Deploying to Vercel..."
    vercel --prod
    
    echo "✨ Deployment complete!"
    echo "🎉 Your portfolio is now live!"
else
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi
