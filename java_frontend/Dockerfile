FROM node:18-slim AS body

WORKDIR /app

COPY . /

FROM node:18-slim 
WORKDIR /nodeapp
COPY --from=body / /
RUN npm install

EXPOSE 3001


CMD ["npm","start"]