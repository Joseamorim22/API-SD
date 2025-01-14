# Etapa de build
FROM node:18 AS build

# Diretório de trabalho
WORKDIR /app

# Copiar dependências
COPY package.json package-lock.json ./
RUN npm ci

# Copiar restante da aplicação
COPY . .

# Gerar Prisma Client
RUN npx prisma generate

# Etapa de produção
FROM node:18-slim

# Instalar OpenSSL
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY --from=build /app /app

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "server.js"]
