# Etapa 1: Build
FROM node:20 AS builder

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de configuração e dependências
COPY package.json yarn.lock ./

# Instalar dependênciasd
RUN yarn install

# Copiar o restante do código para o container
COPY . .

# Compilar o TypeScript
RUN yarn build

# Etapa 2: Runtime
FROM node:20

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos necessários da etapa de build
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expor a porta padrão (ajuste conforme necessário)
EXPOSE 3000

# Definir variáveis de ambiente para o banco de dados
ENV DATABASE_URL="postgresql://admin:123123@db:5432/devweb1?schema=public"

# Definir o comando para iniciar o aplicativo
CMD ["node", "dist/main"]
