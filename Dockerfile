FROM node

# Criando env com o caminho da pasta de deploy
ENV DEPLOY_DIR /usr/src/app

# Criando o diretorio
RUN mkdir -p ${DEPLOY_DIR}
WORKDIR ${DEPLOY_DIR}

# Instalando as dependencias
COPY package.json ${DEPLOY_DIR}/package.json
RUN npm install

# Copiando arqs do projeto para a pasta de trabalho
COPY . ${DEPLOY_DIR}

EXPOSE 3000

CMD ["npm", "start"]
