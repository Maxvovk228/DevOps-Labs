# Лабораторна №2 — Основи Docker

**Мета:** ознайомлення з контейнеризацією та Docker.

## Виконання
1. Запущено Ubuntu 24.04 через Vagrant.
2. Встановлено Docker Engine.
3. Перевірено роботу контейнером `hello-world`.
4. Завантажено образ Nginx.
5. Запущено контейнер `my-nginx`.
6. Перевірено вебсервер у браузері через `localhost:8080`.
7. Досліджено Docker-контейнери, журнали, мережі та томи.

## Основні команди
- `sudo docker run hello-world`
- `sudo docker ps -a`
- `sudo docker images`
- `sudo docker logs my-nginx`
- `sudo docker stop my-nginx`
- `sudo docker start my-nginx`
- `sudo docker network ls`
- `sudo docker volume ls`

## Результат
Встановлено Docker та успішно запущено контейнеризований вебсервер Nginx.
