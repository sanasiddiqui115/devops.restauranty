# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install --production

# Copy rest of the source code
COPY . .

# Expose service port
EXPOSE 3001

# Start app
CMD ["node", "server.js"]
