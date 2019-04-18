import React from "react"
import './Button.css'


type Props = { size: string; }


export default function Button(props: Props) {

  return <div className={props.size + " button"} > button</div >
} 