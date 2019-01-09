import React from "react"

import Joke from "./Joke"
import Title from "./Title"

function App() {
    return (
        <div>
            <Title 
              title="Dog Jokes!"
            />
            <Joke 
              question="What do you call a Golden retriever at a costume party?" 
              answer="A Golden deceiver"
            />
            <Joke 
              question="What is a new movie coming out about a golden retriever who helps a deaf boy?" 
              answer="Ear bud."
            />
            <Joke 
              question="What do you get when you cross a border collie with a pit bull?" 
              answer="A dog that is smart enough to bury the bodies."
            />
            <Joke 
              question="What noise does a sheepdog make?" 
              answer="Baaaaa...rk."
            />
            <Joke 
              question="Did you hear about the new bra they call the Sheepdog?" 
              answer="It rounds them up and points them in the right direction."
            />
        </div>
    )
}

export default App
