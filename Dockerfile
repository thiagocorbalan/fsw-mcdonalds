FROM node:22-alpine AS base
ENV APP_DIR /app
WORKDIR $APP_DIR
RUN apk update \
	&& apk add --no-cache openssl \
	&& rm -rf /var/lib/apt/lists/* \
	&& rm -rf /var/cache/apk/* \
	&& apk add bash vim
COPY package*.json tsconfig*.json $APP_DIR/
RUN  npm ci && npm cache clean --force

FROM base AS dev
COPY prisma $APP_DIR/prisma
COPY .env $APP_DIR/
COPY components.json next.config.ts next-env.d.ts postcss.config.mjs tailwind.config.ts $APP_DIR/
RUN npx prisma generate
EXPOSE 3000
ENTRYPOINT ["npm", "run", "dev"]