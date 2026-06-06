FROM node:20-slim
WORKDIR /usr/src/app
RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
COPY schema.prisma ./
COPY tsconfig.json ./
COPY next-env.d.ts ./
COPY next.config.js ./
COPY public ./public
COPY app ./app
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
