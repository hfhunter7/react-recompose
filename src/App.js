import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor( props ) {
        super(props);
        this.state = { counter: 0 };
        this.handleCount = this.handleCount.bind(this);
    }

    handleCount(count){
        this.setState({
            counter: this.state.counter + count
        })
    }

    render() {
        const { counter } = this.state;
        return (
            <div className="App">
                Count : {counter}
                <button onClick={() => this.handleCount(1)}>Increase</button>
                <button onClick={() => this.handleCount(-1)}>Decrease</button>
            </div>
        );
    }
}

export default App;
