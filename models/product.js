'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Order, {
        as: 'products',
        through: 'OrderProduct',
        foreignKey: {
          fieldName: 'productId',
          type: DataTypes.INTEGER,
          allowNull: true
        },
        otherKey: 'orderId',
      });
      Product.hasOne(models.Dimension, {
        foreignKey: {
          fieldname: 'productId',
          allowNull: true
        }
      });
      Product.hasOne(models.Frame, {
        foreignKey: {
          fieldname: 'productId',
          allowNull: true
        }
      });
      Product.hasOne(models.Spline, {
        foreignKey: {
          fieldname: 'productId',
          allowNull: true
        }
      });
      Product.hasMany(models.Latch, {
        as: 'latches',
        foreignKey: {
          fieldName: 'productId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
    }
  };
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: DataTypes.STRING,
    comments: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};