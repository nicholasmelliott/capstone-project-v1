'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Phone.belongsTo(models.Person, { 
        as: 'phone',
        foreignKey: {
          fieldName: 'personId',
          type: DataTypes.INTEGER,
          allowNull: false
        }
      });
    }
  };
  Phone.init({
    personId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    areaCd: DataTypes.STRING,
    number: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Phone',
  });
  return Phone;
};