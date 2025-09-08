# Use an official Node.js image for building

FROM node:20-slim AS builder
WORKDIR /app
COPY . .
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN npm install --legacy-peer-deps && npm run build

# Use a lightweight web server to serve static files
FROM nginx:alpine AS production
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy built assets from builder
COPY --from=builder /app/dist .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
