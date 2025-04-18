#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "Build successful!"
  
  # Create a static export
  echo "Creating static export..."
  npm run export
  
  echo "Static export complete!"
  echo "You can now deploy the 'out' directory to any static hosting service."
  echo "For example:"
  echo "- Netlify: Drag and drop the 'out' directory to Netlify"
  echo "- GitHub Pages: Push the 'out' directory to the gh-pages branch"
  echo "- AWS S3: Upload the contents of the 'out' directory to your S3 bucket"
else
  echo "Build failed. Please fix the errors before deploying."
  exit 1
fi 