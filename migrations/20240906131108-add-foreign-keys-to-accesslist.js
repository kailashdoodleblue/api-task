'use strict';

/** @type {import('sequelize-cli').Migration} */

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('AccessLists', {
      fields: ['staffId'],
      type: 'foreign key',
      name: 'fk_accesslists_staffId', 
      references: {
        table: 'Staffs',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    await queryInterface.addConstraint('AccessLists', {
      fields: ['accessId'],
      type: 'foreign key',
      name: 'fk_accesslists_accessId', 
      references: {
        table: 'Accesses',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('AccessLists', 'fk_accesslists_staffId');

    await queryInterface.removeConstraint('AccessLists', 'fk_accesslists_accessId');
  }
};

