import React from 'react'
import PropTypes from 'prop-types'
import { Label } from 'react-bootstrap'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <Label bsStyle="primary">{children}</Label>
  }

  return (
    // eslint-disable-next-line
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      <Label>{children}</Label>
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
