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
        <div>
            <p>
                <span className="header-description"> 以下是自定义的 Button 组件: </span>
            </p>
            <Button size="small">small</Button>
            <Button>normal</Button>
            <Button size="big">big</Button>
            <Button size="big">
                <span>这个按钮接收了一个 span 元素</span>
            </Button>
        </div>

        <div>
            <p>
                <span className="header-description">
                以下是 Button:React.FunctionComponent 组件
                </span>
            </p>
            <ButtonReactFunctionComponent
                size="big" onClick={clickHandler}
            >
                <span> 这是一个函数组件 </span>
            </ButtonReactFunctionComponent>

            <ButtonReactFunctionComponent
                size="small" onClick={anotherClickHandler}
            >
                <span> 这是另一个函数组件 </span>
            </ButtonReactFunctionComponent>
        </div>

    </Fragment>
    ,
    document.getElementById('root')
);