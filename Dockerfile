FROM node:20-slim
WORKDIR /usr/src/app
RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*
COPY package.json ./
COPY schema.prisma ./
RUN npm install --omit=dev
COPY app ./app
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
