import React from "react"
import './Button.css'

type Props = {
    size?: string;
    children?: string | JSX.Element;
}

export default function Button(props: Props) {
    return (
        <button className={props.size + " button"} >
            {props.children}
        </button>
    )
} 