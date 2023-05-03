# Собираем приложение
ARG DOCKER_REGISTRY
FROM $DOCKER_REGISTRY/ubi8/nodejs-14:1-101 AS web-build

## Рабочая диреткория
WORKDIR /app

## Рут права
USER 0

## Копируем файлы для установки зависимостей
COPY .npmrc .
COPY ./package.json .

## Устанавливаем зависимости
ARG NPM_REGISTRY
RUN npm install --legacy-peer-deps --registry="${NPM_REGISTRY}" --verbose

## Копируем конфиги
COPY ./tsconfig.json ./tsconfig.json
COPY ./config ./config

## Копируем исходники
COPY ./src ./src

## Собираем фронт
RUN npm run build

##########################################################################

# Запускаем приложение
FROM $DOCKER_REGISTRY/ubi8/nginx-118:latest as final

## Рут права
USER 0

## Копируем собранное приложение
COPY --from=web-build /app/build /usr/share/nginx/html

## Настройка логов
RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

## Копируем конфиг веб-сервера
RUN chown -R 1001:0 /etc/nginx && \
    chown -R 1001:0 /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf.template

## Копируем кастомный энтрипойнт
COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

## Запускаем
CMD ["nginx", "-g", "daemon off;"]

## Слушаем
EXPOSE 8080

## Нон-рут права
USER 1001
