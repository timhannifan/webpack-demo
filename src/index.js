import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let element = component();

function component() {
  var comp = document.createElement('div');
  comp.id = "root"

  return comp;
}

document.body.appendChild(element);
ReactDOM.render(<App/>, document.getElementById('root'));

// if (module.hot) {
//   module.hot.accept('./App.js', function() {
//     document.body.removeChild(element);
//     element = component(); // Re-render the "component" to update the click handler
//     document.body.appendChild(element);
//     ReactDOM.render(<App/>, document.getElementById('root'));
//   });
// }