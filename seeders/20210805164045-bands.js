"use strict";
const mockData = require("./band_mock_data.json");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Bands", mockData);
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete("Bands", null, {});
  },
};
