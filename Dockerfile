# Definir o ambiente de build com valor padrão para produção
ARG NODE_ENV=production

# Etapa de construção: Usar uma imagem Node para preparar a aplicação
FROM node:18 AS build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar apenas os ficheiros necessários para instalar as dependências
COPY package.json package-lock.json ./

# Instalar as dependências com base no ambiente
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm ci --only=production; \
    else npm install; fi

# Copiar os ficheiros restantes para o contêiner
COPY . .

# Gerar o cliente Prisma
RUN npx prisma generate

# Etapa final: Usar uma imagem enxuta para produção com OpenSSL instalado
FROM node:18-slim

# Instalar OpenSSL
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Definir o diretório de trabalho
WORKDIR /app

# Copiar ficheiros da etapa de construção
COPY --from=build /app /app

# Definir a variável de ambiente NODE_ENV
ENV NODE_ENV=production

# Expor a porta que o app vai escutar
EXPOSE 3000

# Definir o comando para iniciar o aplicativo
CMD ["node", "server.js"]
