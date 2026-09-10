# Декстра Веб

## СТЕК

### Общее
* Nodejs 22.20.0
* Npm 10.9.3

### Фронтэнд
* Reactjs 18
* TypeScript 5.7.3
* Tailwind CSS 4

### CMS
* Strapi 5
* SQLite

---

## Запуск

### Установка зависимостей

```bash
npm i
```

### Настройка окружения

Перед запуском проекта необходимо настроить переменные окружения:

1. В корне проекта создайте файл `.env` на основе примера:

```bash
cp .env.example .env
```

2. Откройте `.env` в текстовом редакторе
3. Замените placeholder-значения на актуальные данные

### Запуск

```bash
npm start
```

---

## CMS (Strapi)

Проект использует Strapi v5 как headless CMS для управления контентом (статьи блога, проекты).

### Запуск локально

Перейди в папку CMS:

```bash
cd cms
```

Установи зависимости:

```bash
npm i
```

Настрой переменные окружения:

```bash
cp .env.example .env
```

Запусти в режиме разработки:

```bash
npm run develop
```

Админ-панель будет доступна по адресу `http://localhost:1337/admin`.

### Настройка прав доступа

После первого запуска необходимо открыть публичный доступ к контенту:

**Settings → Users & Permissions → Roles → Public**

Включить `find` и `findOne` для:
- `Article`
- `Project`

---

## PROD

Для продакшена необходима готовая сборка фронтенда, лежащая в папке `build`.

### Сборка фронтенда

```bash
npm run build:prod
```

### Сборка и запуск Strapi

```bash
cd cms
npm run build
npm run start
```

### Пример Nginx

```nginx
server {
    ...

    # Фронтэнд
    location / {
        root /var/www/static;
        try_files $uri $uri/ /index.html;
        index index.html index.htm;
    }

    # CMS API
    location /api {
        proxy_pass http://localhost:1337;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # Медиафайлы Strapi
    location /uploads {
        proxy_pass http://localhost:1337;
    }

    ...
}
```

## Запуск через Docker

### Требования

- [Docker](https://docs.docker.com/get-docker/) 24+
- [Docker Compose](https://docs.docker.com/compose/install/) 2.20+

---

### Архитектура

Проект состоит из двух Docker-сервисов:

- **cms** — Strapi CMS, постоянно работающий контейнер на порту `1337`
- **site** — одноразовый контейнер-сборщик: собирает фронтенд и кладёт `build/` в папку, которую раздаёт nginx сервера, после чего завершается

---

### Локальный запуск

1. Заполни файлы переменных окружения на основе примеров:

```bash
cp .env.example .env
cp cms/.env.example cms/.env
```

2. Заполни значения в `.env`:

```env
strapiUrl=http://localhost:1337
emailJSServiceId=your_service_id
emailJSTemplateId=your_template_id
emailJSPublicKey=your_public_key
```

3. Заполни значения в `cms/.env` (сгенерируй случайные строки для секретов):

```env
APP_KEYS="ключ1,ключ2"
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
JWT_SECRET=...
ENCRYPTION_KEY=...
```

4. Запусти проект:

```bash
docker compose up --build
```

После запуска CMS будет доступна на `http://localhost:1337/admin`.

> Для локального просмотра сайта используй `npm run start` — Docker для фронтенда нужен только при деплое на сервер.

---

### Деплой на сервер

Предполагается, что на сервере уже настроен nginx, который раздаёт статику из `/var/www/dx-webs.ru/build`.

1. Скопируй проект на сервер и перейди в папку проекта.

2. Заполни `.env` и `cms/.env` аналогично локальному запуску.

3. Запусти:

```bash
docker compose up --build -d
```

`site_builder` соберёт фронтенд, скопирует файлы в `/var/www/dx-webs.ru/build` и завершится. CMS продолжит работать в фоне.

> **Важно:** `STRAPI_URL` вшивается в JS-бандл при сборке. По умолчанию используется `https://dx-webs.ru`. Если адрес другой — передай его явно:
> ```bash
> STRAPI_URL=https://your-domain.com docker compose up --build -d
> ```

После деплоя пересобрать только фронтенд (без перезапуска CMS):

```bash
docker compose up --build site
```

---

### Полезные команды

```bash
# Просмотр логов CMS
docker compose logs -f cms

# Перезапуск CMS
docker compose restart cms

# Остановка всего
docker compose down

# Остановка с удалением volumes (⚠️ удалит базу данных и загруженные файлы)
docker compose down -v
```

---

### Персистентность данных

Данные CMS хранятся в Docker volumes и сохраняются между перезапусками:

| Volume | Содержимое |
|---|---|
| `cms_db` | База данных SQLite (`.tmp/data.db`) |
| `cms_uploads` | Загруженные медиафайлы (`public/uploads/`) |

## Первоначальная настройка CMS

После первого запуска `docker compose up --build` нужно настроить доступ к админке.

### 1. Создать администратора

Открой в браузере `https://dx-webs.ru:1337/admin` и пройди регистрацию первого администратора.

### 2. Открыть публичный доступ к API

По умолчанию Strapi закрывает все эндпоинты. Чтобы фронтенд мог получать данные:

`Settings → Users & Permissions Plugin → Roles → Public`

Поставь галочки `find` и `findOne` для:
- **Article**
- **Project**

Нажми **Save**.

### 3. Заполнить контент

`Content Manager → Article / Project` — создать записи.

После этого сайт начнёт отображать данные из CMS.