# Stage 1: Build the application
FROM node:18-alpine as builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Debugging: Show the contents of /app
RUN ls -la /app

# Stage 2: Serve the application
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "start"]
