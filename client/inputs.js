import React from 'react';

export default class Inputs extends React.Component {
    state = {
        inputValue : ''
    };

    render() {
         return (
        <div>
            <input
                type="text"
                value={this.state.inputValue}
                style={{width: 205, height: 40}}
                placeholder="Enter new list name"
                onChange={(e)=> this.setState({inputValue : e.target.value}) }
            />
            <button 
                style={{width: 40, height: 40, backgroundColor: 'green', color: 'white', borderRadius: 20}}
                onClick={()=> {
                    this.props.callback(this.state.inputValue);
                    this.setState({inputValue : ''});
                }}
            >
                +
            </button>
        </div>
    )
    }
};