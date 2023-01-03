'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    static associate(models) {
      // define association here
    }
  }
  posts.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    tags: DataTypes.STRING,
    published: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};