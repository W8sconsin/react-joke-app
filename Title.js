import React from "react"

function Title(props) {
    return(
        <div>
            <h1 className="centered">{props.title}</h1>
            <hr />
        </div>
    )
}

export default Title
