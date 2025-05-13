# Use Node.js 22 alpine as base
FROM node:22-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code and icons
COPY tsconfig.json ./
COPY src ./src
COPY icons ./icons

# Build TypeScript and move icons
RUN npm run build && \
    cp -r icons dist/

# Remove development dependencies and source files
RUN npm prune --production && \
    rm -rf src/ tsconfig.json

# Expose the API port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]