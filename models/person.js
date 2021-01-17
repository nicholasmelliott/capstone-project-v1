'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Person.hasMany(models.Phone, {
        as: 'phone',
        foreignKey: {
          fieldName: 'personId',
          type: DataTypes.INTEGER,
          allowNull: false
        }
      });
      Person.hasMany(models.Email, {
        as: 'email',
        foreignKey: {
          fieldName: 'personId',
          type: DataTypes.INTEGER,
          allowNull: false
        }
      });
    }
  };
  Person.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fName: DataTypes.STRING,
    lName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};