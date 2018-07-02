import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'react-bootstrap'

const Todo = ({ onClick, completed, text }) => (
  <ListGroupItem href="#"
    onClick={onClick}
    disabled={completed}
  >
    {text}
  </ListGroupItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
