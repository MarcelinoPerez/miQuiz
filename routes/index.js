var express = require('express');
var router = express.Router();

var quizController = require("../controllers/quiz_controller");
var commentController = require("../controllers/comment_controller");
var sessionController = require('../controllers/session_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'miQuiz', errors: [] });
});

/* GET página de los autores autor.ejs */
router.get('/autor', function(req, res) {
  res.render('autor', { errors: []  });
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load);  // autoload :quizId

// Definicion de ruta de sesion
router.get('/login',  sessionController.new);      //formulario login
router.post('/login', sessionController.create);   //crear sesion
router.get('/logout', sessionController.destroy);  //destruir sesion

router.get('/quizes',                      quizController.index);
router.get('/quizes/:quizId(\\d+)',        quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes/:quizId(\\d+)/edit',   quizController.edit);
router.get('/quizes/new',                  quizController.new);
router.post('/quizes/create',              quizController.create);
router.put('/quizes/:quizId(\\d+)',        quizController.update);
router.delete('/quizes/:quizId(\\d+)',     quizController.destroy);

router.get('/quizes/:quizId(\\d+)/comments/new', commentController.new);
router.post('/quizes/:quizId(\\d+)/comments',    commentController.create);


module.exports = router;
