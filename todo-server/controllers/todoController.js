/**
 * Todo controllers - Todo related endpoints are handled
 */
function todoController(todoModels) {
    var todoObj = {};
    todoObj.addTodo = addTodo;
    todoObj.updateTodo = updateTodo;
    todoObj.getTodo = getTodo;
    todoObj.getAllTodos = getAllTodos;
    return todoObj;

    function addTodo(req, res, next) {
        var todoObj = req.body;
        if (!todoObj || !todoObj.text) {
            res.status(400).send({
                "error": "text is required !"
            });
            return;
        }
        todoModels.addTodo(todoObj.text, false,
            function (err, result) {
                if (!err) {
                    res.status(200).json(result);
                } else {
                    res.status(500).json({
                        "error": "server error"
                    });
                }

            });
    }

    function updateTodo(req, res, next) {
        var todoObj = req.body;
        if (!todoObj || !todoObj.id || !todoObj.text || !todoObj.hasOwnProperty('completed')) {
            res.status(400).send({
                "error": "id, text, completed is required !"
            });
            return;
        }

        console.log(todoObj);
        todoModels.updateTodo(todoObj.id, todoObj.text, todoObj.completed,
            function (err, result) {
                if (!err) {
                    res.status(200).json(result);
                } else {
                    res.status(500).json({
                        "error": "server error"
                    });
                }

            });
    }

    function getTodo(req, res, next) {
        var id = req.query.id;
        if (!id) {
            res.status(400).json({
                "message": "id is required !"
            });
            return;
        }
        todoModels.getTodo(id, function (err, result) {
            if (err) {
                res.status(500).send({
                    "error": "server error"
                });
            } else {
                res.status(200).send(result);
            }
        });
    }

    function getAllTodos(req, res, next) {
        todoModels.getTodos(function (err, result) {
            if (err) {
                res.status(500).send({
                    "error": "server error"
                });
            } else {
                res.status(200).send(result);
            }
        });
    }
}

module.exports = todoController;
