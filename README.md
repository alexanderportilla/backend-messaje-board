# Backend - Message Board

Este es el repositorio del backend para la aplicación **Message Board**, desarrollada utilizando **Node.js**, **Express.js** y **PostgreSQL**. Este servicio es responsable de manejar las operaciones de la API, como la creación, edición y eliminación de mensajes, así como la conexión con la base de datos y el manejo de interacciones de los usuarios.

## Tabla de Contenidos

- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Base de Datos](#base-de-datos)
- [API - Formato de Respuesta](#api---formato-de-respuesta)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Scripts Disponibles](#scripts-disponibles)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- **CRUD de Mensajes**: Crear, leer, actualizar y eliminar mensajes.
- **Base de Datos Relacional**: Gestión de datos con PostgreSQL.
- **API REST**: Proporciona endpoints para interactuar con la aplicación.
- **Respuestas JSON**: Datos estructurados en formato JSON para consumo en frontend.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v16 o superior)
- **npm** o **yarn**
- **PostgreSQL**

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/alexanderportilla/backend-messaje-board.git
   cd backend-messaje-board
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Configura las variables de entorno en un archivo `.env`. Un ejemplo:
   ```env
   PORT=3001
   DATABASE_URL=postgresql://user:password@localhost:5432/microblog
   ```

4. Carga el esquema de la base de datos desde el archivo `microblog.sql`:
   ```bash
   psql -U tu_usuario -d microblog -f microblog.sql
   ```

## Ejecución

### Desarrollo:
```bash
npm run dev
```

### Producción:
```bash
npm start
```

## Estructura del Proyecto

```plaintext
backend/
├── controllers/
│   └── messagesController.js   # Lógica de los endpoints
├── models/
│   └── db.js                   # Configuración de la base de datos
├── routes/
│   └── messagesRoutes.js       # Definición de rutas para la API
├── .env                         # Variables de entorno
├── .gitignore                   # Archivos ignorados por Git
├── app.js                       # Archivo principal de la aplicación
├── microblog.sql                # Esquema de la base de datos
├── package.json                 # Configuración del proyecto y dependencias
├── package-lock.json            # Bloqueo de dependencias
└── README.md                    # Documentación del proyecto
```

## Base de Datos

La aplicación utiliza una base de datos PostgreSQL. La estructura de la tabla `messages` es la siguiente:

![base de datos](https://github.com/user-attachments/assets/473b33bc-176a-4a02-beba-3ef8c8f211ef)

**Columnas principales:**
- `id` (integer, PK): Identificador único de cada mensaje.
- `user_name` (varchar): Nombre del usuario.
- `content` (text): Contenido del mensaje.
- `timestamp` (timestamp): Fecha y hora del mensaje.

Puedes ver un ejemplo del esquema en el archivo `microblog.sql`.

## API - Formato de Respuesta

Los datos de la API se envían en formato JSON. Aquí hay un ejemplo de la respuesta de un endpoint que lista los mensajes:

![backend-messaje-app](https://github.com/user-attachments/assets/139161c7-6b89-4abb-a720-0d60a5740497)

**Ejemplo de respuesta:**
```json
[
  {
    "id": 4,
    "user_name": "User",
    "content": "Bienvenidos a la plataforma de mensajes!!",
    "timestamp": "2024-12-24T15:53:29.428Z",
    "likes": 1
  },
  {
    "id": 3,
    "user_name": "User",
    "content": "ya es hora de descansar",
    "timestamp": "2024-12-24T04:16:00.922Z",
    "likes": 1
  },
  {
    "id": 2,
    "user_name": "User",
    "content": "hola, buenas dias",
    "timestamp": "2024-12-24T02:49:02.474Z",
    "likes": 0
  }
]
```

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework para crear aplicaciones web y APIs.
- **PostgreSQL**: Base de datos relacional para almacenar mensajes.
- **dotenv**: Manejo de variables de entorno.
- **cors**: Permitir solicitudes entre diferentes dominios.
- **body-parser**: Analizar datos del cuerpo de las solicitudes.
- **nodemon**: Herramienta para el desarrollo con reinicio automático del servidor.

## Scripts Disponibles

En el archivo `package.json` se definen los siguientes scripts:

- `start`: Inicia el servidor en modo producción.
- `dev`: Inicia el servidor en modo desarrollo con reinicio automático gracias a `nodemon`.

## Contribuciones

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama con tu funcionalidad: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza los cambios y haz commits: `git commit -m 'Agrega nueva funcionalidad'`.
4. Envía tus cambios: `git push origin feature/nueva-funcionalidad`.
5. Crea un pull request en este repositorio.

## Licencia

Este proyecto está bajo la licencia ISC. Consulta el archivo [LICENSE](LICENSE) para más detalles.
