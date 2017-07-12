'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    id: DataTypes.INTERGER,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    user_id: DataTypes.INTERGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Post;
};
