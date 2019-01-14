import React from "react"

function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>{props.question}</h3>
            <h3>Answer: {props.answer}</h3>
            <hr />
        </div>
    )
}

export default Joke
