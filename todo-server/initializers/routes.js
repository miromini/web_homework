var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
    /**
     * Express Router, handles all todo entity related routes and middleware
     */
module.exports = function(todoRouter, todoControllerObj) {


    todoRouter.get('/api/item', todoControllerObj.getTodo);

    // todoRouter.get('/api/todo', todoControllerObj.getTodoDetails);
     todoRouter.get('/api/list', todoControllerObj.getAllTodos);

    todoRouter.use(bodyParser.json());

    todoRouter.post('/api/item', todoControllerObj.addTodo);

    todoRouter.put('/api/item', todoControllerObj.updateTodo);


};
