import fetch from 'cross-fetch'

let nextTodoId = 0

// thunk action
export const addTodo = (text) => {

  return dispatch => {
    return fetch(`http://localhost:3000/api/item`, 
    {
        method: "POST",
        body: JSON.stringify({text : text }),
        headers: {
          "Content-Type": "application/json"
        }
    }
  )
      .then(response => response.json())
      .then(json => dispatch(addTodoDone(json.id, json.text, json.completed)))    
  }
}

// thunk action
export const listTodo = () => {

  return dispatch => {
    return fetch(`http://localhost:3000/api/list`, 
    {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
    }
  )
      .then(response => response.json())
      .then(json => dispatch(listTodoDone(json)))    
  }
}

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

// thunk action
export const toggleTodo = (id, text, completed) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/item`, 
    {
        method: "PUT",
        body: JSON.stringify({id : id, text : text, completed : !completed }),
        headers: {
          "Content-Type": "application/json"
        }
    }
  )
      .then(response => response.json())
      .then(json => dispatch(toggleTodoDone(json.id)))    
  }

}

export const addTodoDone = (id, text, completed) => ( {
  type: 'ADD_TODO_DONE',
  id : id,
  text : text,
  completed : completed
})

export const listTodoDone = (todos) => ( {
  type: 'LIST_TODO_DONE',
  todos : todos
})

export const toggleTodoDone = (id) => ({
  type: 'TOGGLE_TODO_DONE',
  id
})