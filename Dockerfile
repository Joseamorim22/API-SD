# Etapa de construção: Usar uma imagem node para preparar a aplicação
FROM node:18 AS build

WORKDIR /app

# Copiar os arquivos necessários
COPY package.json package-lock.json ./

# Instalar dependências de produção
RUN npm install --production

# Copiar os arquivos restantes
COPY . .

# Etapa final: Usar uma imagem mais enxuta para produção
FROM node:18-slim

WORKDIR /app

# Copiar arquivos da etapa de construção
COPY --from=build /app /app

EXPOSE 3000

CMD ["node", "src/app.js"]
