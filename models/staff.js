'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  staff.init({
    name: DataTypes.STRING,
    mobileno: DataTypes.BIGINT,
    email: DataTypes.STRING,
    employeecode: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'staff',
  });
  return staff;
};