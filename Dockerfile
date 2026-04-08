FROM node:18-alpine

WORKDIR /app

ARG NEXT_PUBLIC_TOKEN
ARG NEXT_PUBLIC_DOMAIN

ENV NEXT_PUBLIC_TOKEN=$NEXT_PUBLIC_TOKEN
ENV NEXT_PUBLIC_DOMAIN=$NEXT_PUBLIC_DOMAIN

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm ci

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
