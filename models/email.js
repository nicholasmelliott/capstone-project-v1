'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Email.belongsTo(models.Person, { 
        as: 'email',
        foreignKey: {
          fieldName: 'personId',
          type: DataTypes.INTEGER,
          allowNull: false
        }
      });
    }
  };
  Email.init({
    personId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    emailAddress: DataTypes.STRING,
    type: DataTypes.STRING,
    comments: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Email',
  });
  return Email;
};