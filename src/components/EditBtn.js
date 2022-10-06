import React from 'react'
import { Link } from "react-router-dom"


const EditBtn = () => {
  return (
    <Link to={`/edit?id=${this.props.id}`}>
        <p>
            <span class="material-symbols-outlined">
            edit_square
            </span>
        </p>
    </Link>
  )
}

export default EditBtn