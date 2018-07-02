/**
 * User Models - User related database calls are handled
 */
function UserModels(db) {
    var collection = db.collection('todos');

    var todoModelObj = {};
    todoModelObj.addTodo = addTodo;
    todoModelObj.updateTodo = updateTodo;
    todoModelObj.getTodo = getTodo;
    todoModelObj.getTodos = getTodos;
    return todoModelObj;

    function addTodo(text, completed, callback) {
        var lastTodo;

        collection.find().sort({ id: -1 }).limit(1).toArray(
            function (err, result) {
                if (!err) {
                    lastTodo = result[0];
                    console.log(lastTodo);
                    var nextId = (lastTodo ? lastTodo.id + 1 : 1);
                    console.log(nextId);

                    var todoObj = {
                        id: nextId,
                        text: text,
                        completed: completed
                    }

                    collection.insertOne(todoObj, function (err, result) {
                        if (!err) {
                            callback(null, todoObj);
                        } else {
                            callback(err);
                        }
                    });

                } else {
                    callback(err);
                }
            });
    }

    function updateTodo(id, text, completed, callback) {
        var todoObj = {
            id: id,
            text: text,
            completed: completed
        }

        collection.updateOne({id:id}, {$set: {text: text, completed : completed }}, function (err, result) {
            if (!err) {
                callback(null, todoObj);
            } else {
                callback(err);
            }
        });

    }

    function getTodo(id, callback) {
        collection.find({
            'id': id
        }).toArray(function (err, result) {

            if (!err) {
                callback(null, result[0]);
            } else {
                callback(err);
            }
        });
    }

    function getTodos(callback) {
        collection.find({}).toArray(function (err, result) {
            if (!err) {
                callback(null, result);
            } else {
                callback(err);
            }
        });
    }

}

module.exports = UserModels;