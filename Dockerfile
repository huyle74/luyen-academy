# Stage 1: Install dependencies
FROM node:18-alpine as builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm config set registry https://registry.npmjs.org/ && \
    npm cache clean --force && \
    npm install --legacy-peer-deps

# Stage 2: Final image
FROM node:18-alpine

WORKDIR /app

# Copy dependencies from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY . .

RUN npm run build

EXPOSE 8080

ENV NODE_ENV=production

CMD ["npm", "start"]
