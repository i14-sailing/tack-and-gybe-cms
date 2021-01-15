
FROM node:14
ENV NODE_ENV=production

# Install production dependencies.
COPY package*.json ./
RUN npm install --only=production

# Build Strapi
COPY . .
RUN npm run build

CMD [ "npm", "start" ]
