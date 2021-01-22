'use strict';

const tableName = 'Courses';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
      },
      img_url: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      instructor_ids: {
        type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
        allowNull: false,
      },
      category_ids: {
        type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
        allowNull: false,
      },
      level_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      score: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
      },
      price: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
      },
      student_ids: {
        type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
        allowNull: false,
      },
      is_discount: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
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
