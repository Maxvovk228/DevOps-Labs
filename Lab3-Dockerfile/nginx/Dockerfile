# Базовий образ
FROM nginx:latest

# Копіюємо HTML-файл
COPY index.html /usr/share/nginx/html/

# Вказуємо порт
EXPOSE 80

# Запускаємо Nginx
CMD ["nginx", "-g", "daemon off;"]
