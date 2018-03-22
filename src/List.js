import React, { Component } from 'react';
import './App.css';
import Content from './Content.js';

class List extends Component {
constructor(props) {
    super(props)
    this.state = { event: 0 }
     this.handleMostrarClick = this.handleMostrarClick.bind(this);
     this.handleOcultarClick = this.handleOcultarClick.bind(this);
  }
  handleMostrarClick(e) {
     this.setState({ event: 1 })
  }
  handleOcultarClick(e) {
     this.setState({ event: 0})
  }
  
  render() {
    var age = 18;
 if (this.state.event > 0) {
    return (
      <div className="App">
      <h1> Hola soy un componente!</h1>
        {
            this.props.listado.map((user) => {

                  return <Content key={ user.id }
                                  name={ user.login }
                                  age={ user.id }
                                   />
            })
          }
        <Content name = "Carlos angarita" age={age} />
        <p className="text-center">Desea ocultar sus props?</p>
        <button id="add" onClick={this.handleOcultarClick}>Si</button>
      </div>
    )}else {
      return <div>
       <h1> Hola soy un componente!</h1>
       <p className="text-center">Desea ver sus props?</p>
       <button id="add" onClick={this.handleMostrarClick}>Si</button>
       </div>
    }
    
  }
  
}

export default List;