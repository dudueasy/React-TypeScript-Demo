import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import ButtonReactFunctionComponent from './ButtonReactFunctionComponent';
import ButtonReactClassComponent from './ButtonReactClassComponent';
import './index.css';


//  可以在事件处理函数中, 通过指定 泛型变量 t 来 定义 事件的类型.
const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('a <ButtonReact/> is clicked')
    console.log(e)
    console.log(e.currentTarget.style)
}

// 也可以给事件处理函数定义类型, 并传入泛型变量 t, 这样 ts 就能推断出 事件 的类型.
const yetAnotherClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log('yet another button is clicked ')
    console.log(e.currentTarget.style)
    console.log("e.currentTarget: \n", e.currentTarget)
    console.log('e.target: \n', e.target)
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

        <div>
            <p>
                <span className="header-description">
                以下是 Button:React.ClassComponent 组件
                </span>
            </p>
            <ButtonReactClassComponent
                yyy={1}
                onClick={yetAnotherClickHandler}
            >
                <span>这是一个类组件</span>
            </ButtonReactClassComponent>
        </div>
    </Fragment>
    ,
    document.getElementById('root')
);