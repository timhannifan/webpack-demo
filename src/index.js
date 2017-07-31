import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Root from './components/Root';
import appReducer from './reducers';

let element = component();
const store = createStore(appReducer);

function component() {
  var comp = document.createElement('div');
  comp.id = "root"

  return comp;
}

document.body.appendChild(element);

render(
	<Root store={store}/>, 
	document.getElementById('root')
)