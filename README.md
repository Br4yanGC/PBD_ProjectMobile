# Grupo "Ojito Ojito"

# Integrantes:

- Brayan Eduardo Gomero Castillo  (@Br4yanGC)
- Sanders Chancan Chanca (@Zanderz17)

# Tema del proyecto

`Aplicación mobile enfocada en la gestión de bodegas`

## Motivación

Dada la coyuntura en la que nos encontramos muchas personas han visto conveniente abrir un negocio que les permita traer ingresos a su hogar. Es así como nacen las populares bodeguitas, las cuales a diferencia de aquellas bodegas a las que ya venimos acostumbrados, estas han pasado ha implementar ciertas tecnologías que le permitan tener un mejor manejo sobre sus bodegas. En ese sentido, la presente aplicación web apunta a ello, al generar un sistema el cual le permita a las personas, que cuenten con una bodega, administrar los productos con los que cuentan, clasificarlos por su tipo, anhadirles un precio y en general gestionarlos a los mismos.


## Funcionalidades

| Route | Backend URLs | Funcionalidad |
| --- | --- | --- |
| `/products` | `GET /products` | Ver miembros del club de ajedrez | 
| `/products/aseo-y-limpieza` | `GET /products/:product_id` | Productos del tipo aseo y limpieza | 
| `/products/bebidas` | `GET /products/:product_id` | Productos del tipo bebidas | 
| `/products/carne-y-embutidos` | `GET /products/:product_id` | Productos del tipo carne y embutidos | 
| `/products/dulces-y-snacks` | `GET /products/:product_id` | Productos del tipo dulces y snacks | 
| `/products/frutas-y-verduras` | `GET /products/:product_id` | Productos del tipo frutas y verduras | 
| `/products/utiles-escolares` | `GET /products/:product_id` | Productos del tipo utiles escolares | 
| `/products/viveres` | `GET /products/:product_id` | Productos del tipo viveres | 
| `/products/products-view` | `GET /tournaments` | Permite visualizar un producto en función de su product_id |
| `/products/products-create` | `POST /tournaments` | Permite crear un producto |
| `/products/products-delete` | `DELETE /tournaments` | Permite eliminar un product |
| `/products/products-edit` | `PUT /tournaments` | Permite editar un produto |

| Ionic Plugin | Backend URLs (si es que usa) | Funcionalidad
| --- | --- | --- |
| `Camera` | `POST /figures` | Toma la foto a un miembro y la guarda en el server | 

## Instalación

### Base de datos

1. Abrir MySQL
2. Ejecutar el script de inicialización de la DB:

`source bodega.sql`

3. Necesita tener el siguiente usuario:

- Usuario: `utec`
- Clave: `1234567890`

### Backend

1. Instalar dependencias

`npm install`

2. Iniciar el proyecto

`nodemon index.js`

### Frontend

1. Instalar dependencias

`npm install`

2. Iniciar el proyecto

`ionic serve --open`