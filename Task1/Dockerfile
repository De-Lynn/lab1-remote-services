FROM node:latest

COPY package.json ./
COPY tsconfig.json ./
COPY yarn.lock ./

COPY 1.ts ./

RUN yarn install --frozen-lockfile

RUN yarn tsc

RUN mkdir output

CMD [ "yarn", "start" ]
