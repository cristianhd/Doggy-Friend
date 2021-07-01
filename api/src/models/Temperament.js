const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('temperament', {

        id: {
            type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false,
          },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {timestamps: false});
}