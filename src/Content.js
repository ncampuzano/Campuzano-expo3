import React, { Component } from 'react';
import './App.css';

class Content extends Component {
    
    
   componentWillMount() {
    let mode;
    if (this.props.age > 70) {
      mode = 'Viejo';
    } else if (this.props.age < 18) {
      mode = 'Joven';
    } else {
      mode = 'Adulto';
    }
    this.setState({ mode });
  }    
  constructor(props){
      super();
      this.state = {
          event: 1    
      }
      this.handleShowClick = this.handleShowClick.bind(this);
      this.handleHideClick = this.handleHideClick.bind(this);
  }    
  handleShowClick(e){
      this.setState({event:1});
  }
  handleHideClick(e){
      this.setState({event:0});
  }
  render() {
    return (
      <div className="App">
            <div className={this.state.event > 0 ? "": "hide"}> 
                <h1>Tonces pelado?</h1>  
                <p>{this.props.key}</p>
                <p>{this.props.name} {this.props.age} {this.state.mode}</p>
            </div>
            <span><button onClick={this.handleHideClick}>Ocultar</button><button onClick={this.handleShowClick}>Mostrar</button></span>
           
            
      </div>
    );
  }
}

export default Content;