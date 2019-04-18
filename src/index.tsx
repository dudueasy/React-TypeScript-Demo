import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import './index.css';


ReactDOM.render(
  <Fragment>
    <div >Hello World
      <div><Button size="small"/> small button</div>
      <div><Button size=""/> normal button</div>
      <div><Button size="big" /> big button </div>
    </div>
  </Fragment>
  ,
  document.getElementById('root')
);