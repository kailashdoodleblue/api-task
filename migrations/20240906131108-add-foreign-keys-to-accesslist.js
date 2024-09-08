'use strict';

/** @type {import('sequelize-cli').Migration} */

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add foreign key constraint for 'staffId'
    await queryInterface.addConstraint('AccessLists', {
      fields: ['staffId'],
      type: 'foreign key',
      name: 'fk_accesslists_staffId', // Optional: give a name to the constraint
      references: {
        table: 'Staffs',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // Add foreign key constraint for 'accessId'
    await queryInterface.addConstraint('AccessLists', {
      fields: ['accessId'],
      type: 'foreign key',
      name: 'fk_accesslists_accessId', // Optional: give a name to the constraint
      references: {
        table: 'Accesses',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove foreign key constraint for 'staffId'
    await queryInterface.removeConstraint('AccessLists', 'fk_accesslists_staffId');

    // Remove foreign key constraint for 'accessId'
    await queryInterface.removeConstraint('AccessLists', 'fk_accesslists_accessId');
  }
};

