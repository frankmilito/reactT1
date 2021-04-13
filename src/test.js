import React from 'react'
import pic1 from './images/pic01.jpg'

class Test extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.countIncrease = this.countIncrease.bind(this)
    }

    countIncrease = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count} </h1>
                <button onClick={this.countIncrease}>Change</button>
            </div>
        )
    }
}
export default Test 