var express = require('express');
var router = express.Router();

var quizController = require("../controllers/quiz_controller");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'miQuiz' });
});

/* GET página de los autores autor.ejs */
router.get('/autor', function(req, res) {
  res.render('autor', {  });
});

router.get("/quizes/question", quizController.question);
router.get("/quizes/answer", quizController.answer);

module.exports = router;
