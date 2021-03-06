// Definicion del modelo de Quiz

/*module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Quiz',
            { pregunta:  DataTypes.STRING,
              respuesta: DataTypes.STRING,
            });
}*/

//Definición del modelo de Quiz convalidción

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Quiz',
            { pregunta:  {
            	type: DataTypes.STRING,
            	validate: {notEmpty: {msg: "-> Falta Pregunta"}}
            },
              respuesta: {
              	type: DataTypes.STRING,
              	validate:{notEmpty: {msg: "-> Falta Respuesta"}}
            },
              tema: {
                type: DataTypes.STRING,
                validate:{notEmpty: {msg: "-> Falta Tema"}}
            }
            });
}