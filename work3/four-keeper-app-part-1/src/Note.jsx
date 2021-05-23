import React from 'react'

export default function Note(props) {
    return (
        <div className="note">
            <h1 >
                For a title with H1 {props.name}
            </h1>
            <p>{props.surname}</p>
            <p>{props.age}</p>
            <p>Content for Note.jsx</p>
        </div>
    )
}

