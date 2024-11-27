# Use a imagem base do Node.js
FROM node:17-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /backend

# Copie o package.json 
COPY package.json .

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta que a aplicação irá rodar
EXPOSE 8083

# Comando para rodar a aplicação
CMD ["node", "index.js"]