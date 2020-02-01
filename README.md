# Modular Authenticator
A module for authenticate users on NodeJS Applications

### Packages required
``` bash
npm i express express-session passport passport-google-oauth20 dotenv
```
### Use

- Import the module and pass the express app as argument
``` js
require('dotenv').config()

const express = require('express')
const auth = require('../modular_autenticator')
const app = express()

// Configure the authenticartor as argument
auth(app)
app.use('/', require('./router'))

app.listen(4000)
``` 
## Project State
Until now, the module only support Google OAuth2, but in the future works with Local Strategy, Facebook and Twitter.

| Local | Google | Twitter | Facebook |
| ------------- | ------------- | ------------- | ------------- |
| ![Local](https://gatowp.com/wp-content/uploads/2019/02/Qu%C3%A9-es-localhost.jpg)  | ![Google](https://as.com/betech/imagenes/2018/10/29/portada/1540844638_585946_1540848919_noticia_normal.jpg)  | ![Twitter](https://store-images.s-microsoft.com/image/apps.50484.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2c71c1ea-c28f-4dd1-b72d-c43cdd3476f4) | ![Facebook](https://logosmarcas.com/wp-content/uploads/2018/05/Facebook-logo.png) |
| - Not Supported | +Suported | -Not Suported |-Not Suported |
