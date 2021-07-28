# Dogs APP
En esta aplicación podrás ver distintas razas de perros junto con los detalles de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:
  - Buscar razas de perros
  - Filtrarlos / Ordenarlos
  - Agregar nuevas razas
 
![doggy](https://user-images.githubusercontent.com/52827841/124139177-bf3a1300-da5d-11eb-9438-badc4a063edc.PNG)
## - Home
![home](https://user-images.githubusercontent.com/52827841/124139799-52734880-da5e-11eb-9402-87ea6aa92143.PNG)
## - Detalle de raza
![detalle](https://user-images.githubusercontent.com/52827841/124140028-877f9b00-da5e-11eb-858e-f1b55c58da16.PNG)
## - Crear una raza
![create](https://user-images.githubusercontent.com/52827841/124140417-d7f6f880-da5e-11eb-8d43-aec002f8c6bf.PNG)
## Comenzando 🚀
_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._
__IMPORTANTE__: Para poder utilizar esta API es necesario crear una cuenta para obtener una API Key que deberá ser incluida en el archivo .env
El archivo `.env` (carpeta api) debe tener la siguiente forma:
```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
API_KEY=tu API key
DB_NAME=dogs
PORT=3001
```
Adicionalmente será necesario que crees desde psql una base de datos llamada dogs
### Instalación 🔧

1. Clona el repo
   ```sh
   git clone https://github.com/cristianhd/Doggy-Friend.git
   ```
2. Instala los paquetes
   ```sh
   npm install
   ```
3. Inicia tanto el back (carpeta api), como el front (carpeta client)
   ```sh
   npm start
   ```
  
## Construido con 🛠️
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres
## Licencia 📄 
#### Este proyecto fue creado con fines educativos, no tiene fines de lucro - sientete libre de usarlo
---
⌨️ con ❤️ por [Cristian Hernandez](https://github.com/cristianhd) 😊
