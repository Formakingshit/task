# Task application

## Setup

1. git clone 
//клонируем данных репозиторий

2. npm install
//устанавливаем нод-модули

3. setting .env file
//переименовываем файл .env.example в .env или же создаем копию, заполняем

HOST=127.0.0.1        // адрес хоста
PORT=3333             // адрес порта 
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}

CACHE_VIEWS=false

APP_KEY=              // установится после 5 шага

DB_CONNECTION=sqlite  // ваш нпм-пакет отвечающий за соединение с базой данных
DB_HOST=127.0.0.1     
DB_PORT=3306          // адрес порта вашей базы данных
DB_USER=root          // ваш логин(имя) в учетной записе субд
DB_PASSWORD=          // ваш пароль в учетной записе субд
DB_DATABASE=adonis    // название вашей базы данных (CREATE DATABASE adonis)

SESSION_DRIVER=cookie
HASH_DRIVER=bcrypt

Я использовал PgSql из-за этого в package.json присутстует строка "pg": "^7.10.0" которая зависит от вашего окружения.

4. create db          
// создаем базу данных (CREATE DATABASE adonis) прописываем в DB_DATABASE

5. adonis migration:run
// создаем таблицы в базе данных

6. adonis key:generate
// создание APP_KEY

7. adonis serve --dev
// запуск сервера

## Without user interface 

Example of queries in postman collection (Task.postman_collection.json)
