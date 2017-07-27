import _ from 'lodash';
import printMe from './print.js';
import './style.css';

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('-----------------------------Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}

let element = component();

function component() {
  var element = document.createElement('div');
	var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'hot reload'], ' ');

  btn.innerHTML = 'click me';
  btn.onclick = printMe;

  element.appendChild(btn);


  return element;
}

document.body.appendChild(element);