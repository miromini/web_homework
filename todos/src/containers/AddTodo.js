import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Button, FormGroup, FormControl } from 'react-bootstrap'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <FormGroup>
          <FormControl
          type="text"
          placeholder="Enter Todo"
          inputRef={node => { input = node }}
          />
          <Button type="submit">
            Add Todo
        </Button>
        </FormGroup>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
