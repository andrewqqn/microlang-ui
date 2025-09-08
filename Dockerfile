# Use an official Node.js image for building
FROM node:20-slim AS builder

WORKDIR /app

COPY . .

# Install dependencies and build the app
RUN npm install --legacy-peer-deps && npm run build

# Use a lightweight web server to serve static files
FROM nginx:alpine AS production

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy built assets from builder
COPY --from=builder /app/dist .

EXPOSE 80

ARG VITE_API_URL
ENV VITE_API_URL=http://165.22.155.118:8000

CMD ["nginx", "-g", "daemon off;"]
