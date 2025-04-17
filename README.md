# Proyecto Miguel - E-commerce con Medusa

Este proyecto consiste en una tienda en línea construida con Medusa (backend) y Next.js (frontend).

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- `proyecto-miguel/`: Backend construido con Medusa
- `proyecto-miguel-storefront/`: Frontend construido con Next.js

## Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn
- PostgreSQL
- Redis (opcional, pero recomendado)

## Configuración del Entorno

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd proyectoM
```

2. Configurar el backend:
```bash
cd proyecto-miguel
yarn install
```

3. Configurar el frontend:
```bash
cd proyecto-miguel-storefront
yarn install
```

## Variables de Entorno

### Backend (proyecto-miguel)
Crear un archivo `.env` en la raíz del backend con las siguientes variables:
```
DATABASE_URL=postgres://localhost/medusa-store
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret
COOKIE_SECRET=your_cookie_secret
```

### Frontend (proyecto-miguel-storefront)
Crear un archivo `.env` en la raíz del frontend con las siguientes variables:
```
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
```

## Ejecución del Proyecto

1. Iniciar el backend:
```bash
cd proyecto-miguel
yarn dev
```

2. Iniciar el frontend:
```bash
cd proyecto-miguel-storefront
yarn dev
```

El backend estará disponible en `http://localhost:9000` y el frontend en `http://localhost:8000`.

## Características

- Catálogo de productos
- Carrito de compras
- Proceso de checkout
- Gestión de órdenes
- Panel de administración

## Tecnologías Utilizadas

- Backend:
  - Medusa
  - PostgreSQL
  - Redis
  - Node.js

- Frontend:
  - Next.js
  - React
  - Tailwind CSS
  - Medusa JS SDK

## Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 