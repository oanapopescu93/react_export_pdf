import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.name_pdf)
    }

    render () {        
        return(
            <React.Fragment>
                <div onClick={this.handleClick}>{this.props.button_name}</div>              
            </React.Fragment>
        );
    }
  }
  
  export default Button;