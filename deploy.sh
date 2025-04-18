#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "Build successful!"
  
  # Deploy to Vercel
  echo "Deploying to Vercel..."
  npx vercel --prod
  
  echo "Deployment complete!"
else
  echo "Build failed. Please fix the errors before deploying."
  exit 1
fi 