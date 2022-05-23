const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    summary:{
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.INTEGER
    },
    Health_score:{
      type: DataTypes.INTEGER
    },
    steps: {
      type: DataTypes.STRING
    }

  },{timestamps: false});
};
