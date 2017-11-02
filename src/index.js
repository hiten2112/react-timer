import React from 'react';
import ReactDom from 'react-dom';
import App from './count-down/App';
import Timer from './timer/Timer'


ReactDom.render(
  <App />,document.getElementById('count-down')
)

ReactDom.render(
  <Timer />,document.getElementById('timer')
)
