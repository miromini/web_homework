

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO_DONE':
      console.log(state)
      console.log(action)    
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        }
      ]
    case 'LIST_TODO_DONE':
      console.log(state)
      console.log(action)
      return [
        ...state,
        ...action.todos
      ]      
    case 'TOGGLE_TODO_DONE':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
