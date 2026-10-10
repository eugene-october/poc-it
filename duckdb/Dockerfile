FROM node:24-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY index.js ./
COPY data ./data

USER node
CMD ["node", "index.js"]
