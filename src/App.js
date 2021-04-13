import React from 'react'
import Joke from './Joke'
import jokeData from './JokeData'
// import Footer from './Footer'
function App() {
    const JokeComponent = jokeData.map(function (joke) {
        return (
            <Joke question={joke.question} punchline={joke.punchline} />
        )
    })
    return (
        <div>
            <Joke question='Where are you going' punchline='Down from the top' />
            <Joke question='What did the moon say to the beer' punchline='Cant have it all at full moon' />
            <Joke question='What goes up but never comes down' punchline='Beer prices' />

            <Joke punchline='This is for tessing pusrposes' />
            {JokeComponent}
        </div>
    )
}

export default App