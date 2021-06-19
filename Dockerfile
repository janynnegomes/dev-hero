FROM node:14 as build-app

COPY . /app

CMD ["node -v" ]

WORKDIR /app

# RUN npm cache clean --force

# instalar todas as dependências do projeto
RUN npm install

# copia o resultado para dentro da imagem
COPY . .

# executar o build de produção com otimização
RUN npm run build

# usar imagem do nginx
FROM nginx:alpine

VOLUME [ "/var/cache/nginx" ]

# copiar meus arquivos
COPY --from=build-app app/dist usr/share/nginx/html/otimizado
COPY --from=build-app app/src usr/share/nginx/html/original

# copiar configurações do nginx para pasta padrão do servidor
COPY ./CONFIG/app.conf /etc/nginx/conf.d/default.conf
