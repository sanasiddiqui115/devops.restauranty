# Stage 1: Build React app
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the source and build
COPY . .
ARG REACT_APP_SERVER_URL
ENV REACT_APP_SERVER_URL=$REACT_APP_SERVER_URL
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy React build to Nginx html dir
COPY --from=build /app/build /usr/share/nginx/html

# Replace default Nginx config with one that supports React routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
