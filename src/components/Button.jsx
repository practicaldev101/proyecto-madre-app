import React,{Component} from "react";
import './Button.css';

export default class Button extends Component{
    constructor(props){
        super(props);

        this.state = {
            active: false
        }
    }
    
    onClick = ()=>{
        this.setState({active: !this.state.active})
        this.props.onClick()
    }

    render(){
        if (this.state.active){
            return null;
        }
        else{
            return(
                <button className='Board__button' type='submit' onClick={this.onClick}>
                    {this.props.text}
                </button>
            )
        }
        
    }
}