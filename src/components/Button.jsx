import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
const Button = () => {
  return (
    <div>
      <Link to='/allNotes'>See All Notes</Link>
    </div>
  )
}

export default Button
