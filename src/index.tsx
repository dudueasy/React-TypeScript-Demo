import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import ButtonReactFunctionComponent from './ButtonReactFunctionComponent';
import './index.css';


const clickHandler = (e: React.MouseEvent) => {
    console.log('a <ButtonReact/> is clicked')
    console.log(e)
}


const anotherClickHandler: React.MouseEventHandler = (e) => {
    console.log('another <ButtonReact/> is clicked')
    console.log(e)
}


ReactDOM.render(
    <Fragment>
        <div>Hello World
            <div>
                <Button size="small">small</Button>
            </div>
            <div>
                <Button>normal</Button>
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
                <ButtonReactFunctionComponent
                    size="big" onClick={clickHandler}
                >
                    <span>这是一个 ButtonReact</span>
                </ButtonReactFunctionComponent>
            </div>

            <div>
                <ButtonReactFunctionComponent
                    size="small" onClick={anotherClickHandler}
                >
                    <span>这是 另一个 ButtonReact</span>
                </ButtonReactFunctionComponent>
            </div>
        </div>
    </Fragment>
    ,
    document.getElementById('root')
);