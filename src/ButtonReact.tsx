import React from "react";

interface Props {
    size?:string
}

const ButtonReact: React.FunctionComponent<Props> = (props) => {
    return (
        <button className={`button ${props.size}`}>
            {props.children}
        </button>
    )
}

export default ButtonReact