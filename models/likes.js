'use strict';
module.exports = function(sequelize, DataTypes) {
  var Likes = sequelize.define('Likes', {
    user_id: DataTypes.INTERGER,
    post_id: DataTypes.INTERGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Likes;
};
