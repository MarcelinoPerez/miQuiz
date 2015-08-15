var models = require('../models/models.js');

// Autoload - factoriza el código si ruta incluye :quizId
exports.load = function(req, res, next, quizId) {
  models.Quiz.find(quizId).then(
    function(quiz) {
      if (quiz) {
        req.quiz = quiz;
        next();
      } else { next(new Error('No existe quizId=' + quizId)); }
    }
  ).catch(function(error) { next(error);});
};

// GET /quizes
exports.index = function(req, res) {

  console.log("contenido: " + req.query.search)
  if(req.query.search == undefined){
    search = '%';
  }
  else{
    search = '%' + req.query.search + '%';
  }
  
 models.Quiz.findAll({where: ["pregunta like ?", search  ]}).then(
    function(quizes) {
      res.render('quizes/index', { quizes: quizes});
    }
  ).catch(function(error) { next(error);})

};

// GET /quizes/question
exports.question = function(req, res) {
  models.Quiz.findAll().then(function(quiz) {
    res.render('quizes/question', { quizes: quizes});
  })
};

// GET /quizes/:id
exports.show = function(req, res) {
 res.render('quizes/show', { quiz: req.quiz});
};

// GET /quizes/:id/answer
exports.answer = function(req, res) {
  var resultado = 'Incorrecto';
  if (req.query.respuesta === req.quiz.respuesta) {
    resultado = 'Correcto';
  }
  res.render('quizes/answer', {quiz: req.quiz, respuesta: resultado});
};
