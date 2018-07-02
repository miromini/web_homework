/**
 * Initialize all the components of the application.
 * Also works as a dependency injection.
 */
var todoModels = require('./../models/todoModels');
var routes = require('./routes');
var expressConfig = require('./expressConfig');
var mondoDb = require('./../components/mongoConnection')();
var todoController = require('./../controllers/todoController');

function Initialize(app, express) {
    var todosRouter = express.Router();
    //components
    mondoDb.connect(function(err, db) {
        //models
        var todoModelObj = todoModels(db);

        //controllers
        var todoObj = todoController(todoModelObj);
        routes(todosRouter, todoObj);
        expressConfig(app, todosRouter);
    });
}

module.exports = Initialize;