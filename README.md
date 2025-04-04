npm init 
npm i express body-parser nodemon 
index.js
- src/
    - index.js 
    - config/
    - controllers/
    - middlewares/
    - models/
    - repository/
    - services/
    - utils/

npm i dotenv 
.env

.gitignore 

sequelize sequelize-cli mysql2 
src/config/serverConfig - for configurations like process.env 

npx sequelize init (run in root directory level)

config/config.json - change mysql password and database 

cd src 
npx sequelize db:create 

- DB design
    - Airplane table
    - flight
    - Airport
    - city

- a flight belongs to an airport but one airplane can be used in multiple flights

- a city has many airports but one airport belongs to a city

- one airport can have many flights, but a flight belongs to one airport 



Airport model

tables 
    - City
    - Airport 
    - relationship : City has many airports but airport belongs to one city (one to many)