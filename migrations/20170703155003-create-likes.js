'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.createTable('Likes', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            user_id: {
              type: Sequelize.INTERGER
            },
            post_id: {
              type: Sequelize.INTERGER
            },
            createdAt: {
              allowNull: false,
              type: Sequelize.DATE
            },
            updatedAt: {
              allowNull: false,
              type: Sequelize.DATE
            }
            likes: {
              type: Sequelize.INTERGER
            });
        },
        down: function(queryInterface, Sequelize) {
          return queryInterface.dropTable('Likes');
        }
    };
