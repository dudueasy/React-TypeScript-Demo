import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import ButtonReact from './ButtonReact';
import './index.css';


ReactDOM.render(
    <Fragment>
        <div >Hello World
            <div>
                <Button size="small">small</Button>
            </div>
            <div>
                <Button >normal</Button>
            </div>
            <div>
                <Button size="big">big</Button>
            </div>

            <div>
                <Button size="big">
                    <span>这个按钮接收了一个 span 元素</span>
                </Button>
            </div>




            <div>
                <ButtonReact size="big">
                    <span>这是一个 ButtonReact</span>
                </ButtonReact>
            </div>
        </div>
    </Fragment>
    ,
    document.getElementById('root')
);