import React, { Component } from 'react'
import { Link } from "react-router-dom"

class EditBtn extends Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <Link to={`/edit?id=${this.props.id}`}>
                <p>
                    <span className="material-symbols-outlined">
                    edit_square
                    </span>
                </p>
            </Link>
        )
    }
}

export default EditBtn