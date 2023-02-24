// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('Kel_5', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
 
// export connection
export default db;