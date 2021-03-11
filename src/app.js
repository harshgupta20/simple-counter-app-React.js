import React from 'react';

import Counter from './counter';

class App extends React.Component{
    
    state = {
        UserInput : 0,
        TextColor : ''
    }

    onClickbtnHandler1 = () => {
        this.setState({
            UserInput : this.state.UserInput + 1
        })
    }

    onClickbtnHandler2 = () => {
        this.setState({
            UserInput : this.state.UserInput - 1
        })
    }

    valueReset = () => {
        this.setState({
            UserInput: 0
        })
    }

    render(){

        let TextColor = {};

        const abc = () => {
            if(this.state.UserInput > 0){
                return 'green'
            }
            else if(this.state.UserInput < 0){
                return 'red'
            }
            else{
                return 'white'
            }
        }

        return(
            <>
            {/* <h1>Hello I am in class components</h1> */}
            <p onClick={this.valueReset}>Click me <span>⌛</span> To Reset the Number</p>
            <Counter numUpdate={this.state.UserInput} TextColor={abc()} OnClickAdd={this.onClickbtnHandler1} OnClickMinus={this.onClickbtnHandler2}/>
            </>
        )
    }
}

export default App;