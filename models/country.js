var Sequelize = require('sequelize');
const sequelize = require('../controllers/helpers/common_functions');

const Country = sequelize.define('country', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    country_name: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    status: Sequelize.STRING
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Country;