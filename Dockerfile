# Etapa de build
FROM node:18 AS build

# Diretório de trabalho
WORKDIR /app

# Copiar dependências e instalar pacotes
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copiar restante da aplicação
COPY . .

# Gerar Prisma Client
RUN npx prisma generate

# Etapa de produção
FROM node:18-slim

# Instalar OpenSSL para Prisma e limpar cache do apt
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Adicionar utilizador não-root
RUN useradd --create-home --shell /bin/bash appuser
USER appuser

# Definir diretório de trabalho
WORKDIR /app
COPY --from=build /app /app

# Definir variáveis de ambiente
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
