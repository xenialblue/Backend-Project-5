// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Contents = db.define('contents', {
  // Define attributes
  name: {
    type: DataTypes.STRING
  },
  registration_fee: {
    type: DataTypes.DOUBLE
  },
  image: {
    type: DataTypes.STRING
  },
  max_participant: {
    type: DataTypes.INTEGER
  },
  description:{
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true,
  timestamps: false
});

 
// Export model Contents
export default Contents;