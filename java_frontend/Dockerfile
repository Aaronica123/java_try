FROM node:18-slim AS body

WORKDIR /app

COPY . /app

FROM node:18-slim 
WORKDIR /nodeapp
COPY --from=body /app /nodeapp
RUN npm install

EXPOSE 3001


CMD ["npm","start"]