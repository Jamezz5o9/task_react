import {Component} from 'react';


class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            color : 'blue'
        }

    }

    changeColor = () => {
        this.setState({color:"brown"})
    }


    render(){
        return (
            <div>
                <h1 style={{color: this.state.color}}>Banke is a good girl</h1>          
                <button
                onClick={this.changeColor}
                type="button">
                    style={{
                        backgroundColor: this.state.color,
                        width: '70px',
                        height: '40px',
                    }}
                    Click me 
                </button>
            </div>
        )
    }
}
export default Counter