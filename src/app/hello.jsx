import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
class Hello extends React.Component {
  render() {
    return (
      <div>
      <h1>Veggie</h1>
      </div>
      
      );
  }
}
ReactDOM.render(<Hello/>, document.getElementById('hello'));