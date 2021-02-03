'use strict';

const tableName = 'UsersAuth';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      hash: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      emailValidationToken: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      passwordResetToken: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName, {});
  },
};
