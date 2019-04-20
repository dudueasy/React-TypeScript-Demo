import React from "react";

interface Props {
    size?: string;
    onClick?: React.MouseEventHandler<this>;
}

const ButtonReact: React.FunctionComponent<Props> = (props) => {
    return (
        <button className={`button ${props.size}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default ButtonReact