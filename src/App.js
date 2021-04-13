import React from 'react'
import Joke from './Joke'
import jokeData from './JokeData'
import TodoItems from './TodoItems'
import todos from './TodoData'
import Test from './test'
// import Footer from './Footer'
class App extends React.Component {
    // const JokeComponent = jokeData.map(function (joke) {
    //     return (
    //         <Joke question={joke.question} punchline={joke.punchline} />
    //     )
    // })
    constructor() {
        super()
        // this.state = {
        //     todoData: todos
        // }
    }
    render() {

        // const myTodo = this.state.todoData.map(function (todo) {
        //     return <TodoItems name={todo.name} key={todo.id} completed={todo.completed} />
        // })
        return (
            <div>
                {/* <Joke question='Where are you going' punchline='Down from the top' />
                <Joke question='What did the moon say to the beer' punchline='Cant have it all at full moon' />
                <Joke question='What goes up but never comes down' punchline='Beer prices' />
    
                <Joke punchline='This is for tessing pusrposes' />
                {JokeComponent} */}
                {/* {myTodo} */}
                <Test />
            </div>
        )
    }
}

export default App