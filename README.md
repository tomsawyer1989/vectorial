# Vectorial

Mostrar la información en un frontend responsive que cumpla con las condiciones requeridas.

La información de los usuarios debe ser consultada por medio de una Fake-Api.

## Frontend ReactJS 18

## Descripcion
Utilizando ReactJS 18 consumimos los servicios por medio de una Fake-Api para luego interactuar con la información de los usuarios.

Versión de React Redux que utilizamos es "react-redux": "^8.0.2"
Versión de Redux Toolkit que utilizamos es "@reduxjs/toolkit": "^1.8.5"
Y bootstrap versión 5.2

[Bootstrap](https://getbootstrap.com/docs/5.2/)

## URL del repositorio de la Fake-Api
- [Url github](https://github.com/tomsawyer1989/fake-api.git)

## Como ejecutarlo
1. git clone https://github.com/tomsawyer1989/fake-api.git
2. cd fake-api
3. npm install
4. npm run start-auth

Se pueden consumir los endpoints (/test_users_login y /users) en el http://localhost:8000/

## URL del repositorio del Front-End
- [Url github](https://github.com/tomsawyer1989/vectorial.git)

## Como ejecutarlo
1. git clone https://github.com/tomsawyer1989/vectorial.git
2. cd vectorial
3. npm install
4. npm start

Navegar a http://localhost:3000/

Nota: Recuerde primero ejecutar la Fake-Api y luego el Front-End para que éste pueda conectarse e interactuar con la información.

El login se debe realizar con las siguientes credenciales:

{
  "username": "admin",
  "password":"admin"
}