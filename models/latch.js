'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Latch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Latch.belongsTo(models.Product, { 
        as: 'latches',
        foreignKey: {
          fieldName: 'productId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
      Latch.hasOne(models.Location, {
        foreignKey: {
          fieldname: 'latchId',
          allowNull: true
        }
      });
      Latch.hasOne(models.Dimension, {
        foreignKey: {
          fieldname: 'latchId',
          allowNull: true
        }
      });
    }
  };
  Latch.init({
    type: DataTypes.STRING,
    material: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Latch',
  });
  return Latch;
};