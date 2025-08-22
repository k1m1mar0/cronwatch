# --- Stage 1: Build the Frontend ---
# Use an official Node.js image as the "builder" environment.
# 'lts' means Long-Term Support, which is stable.
FROM node:lts-alpine AS builder

# Set the working directory inside the container for the frontend code.
WORKDIR /app/frontend

# Copy only the package files first to leverage Docker's caching.
# This step only re-runs if package.json or package-lock.json changes.
COPY cronwatch-frontend/package*.json ./

# Install frontend dependencies.
RUN npm install

# Copy the rest of the frontend source code.
COPY cronwatch-frontend/ ./

# Build the frontend for production. This creates an optimized 'dist' folder.
RUN npm run build


# --- Stage 2: Create the Production Server ---
# Now, start from a fresh, lightweight Python image.
FROM python:3.11-slim

# Set the working directory for the final application.
WORKDIR /app

# We will add a backend later. For now, we only need a simple web server.
# Python has a built-in one which is perfect for serving our frontend.

# Copy the optimized frontend build artifacts from the 'builder' stage.
# This is the magic of multi-stage builds. We are taking the "finished drawers"
# from Stage 1 and putting them into our clean final "frame".
COPY --from=builder /app/frontend/dist ./

# Expose port 8080. Cloud Run will send traffic to this port.
EXPOSE 8080

# The command to start the simple Python web server when the container launches.
# It will serve the files from the current directory (which is now the 'dist' folder).
CMD ["python", "-m", "http.server", "8080"]