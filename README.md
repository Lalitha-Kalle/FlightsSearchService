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