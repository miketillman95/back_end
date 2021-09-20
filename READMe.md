# back_end

## Dependencies
  Knex
    npm i -g knex
  Morgan
    npm i -g morgan
  Helmet
    npm i -g helmet
  CORS
    npm i -g cors
  Postgres
    brew install postgres
  Express
    npm i -g express
  sqlIte3
    brew install sqlite3
  JSONWEBTOKEN
    npm i -g jsonwebtoken
  bcryptjs
    npm i -g bcryptjs
  
## Development dependencies
  jest
    npm i -g jest
  nodemon
    npm i -g nodemon
  supertest
    npm i -g supertest
  eslint
    npm i -g eslint


## HEROKU CLI commands
heroku login
heroku apps:create
heroku addons:create
heroku logs --tail -a <app_name>
heroku run --app <app_name>

### Endpoints:
    http://localhost:3300 in development
    http://localhost:3300/api/auth/register 
    http://localhost:3300/api/auth/login
    http://localhost:3300/api/recipes/
    http://localhost:3300/api/recipes/:id
    http://localhost:3300/api/recipes/:id






### Current Group Endpoints (heroku):
    https://secret-recipes-bw.herokuapp.com/api/auth/register
    https://secret-recipes-bw.herokuapp.com/api/auth/login
    https://secret-recipes-bw.herokuapp.com/api/recipes/
    https://secret-recipes-bw.herokuapp.com/api/recipes/:id

MY-LIST Endpoints


### REGISTRATION:    
    [POST]: /api/auth/register

### LOGIN:
    [POST]: /api/auth/login

### RECIPES:

    /api/recipes/ (in development)


### Data Table Structures: 
User Object
{
  id: integer
  username: string
  password: string 
  email: string
}
Recipe Object
(in development)

