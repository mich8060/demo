import React, { useState} from 'react'
import './checkbox.scss'


function CustomCheckbox(props){

    const [checked,setChecked] = useState(false)
    const onChange = () => {
        console.log("clicked");
        setChecked(!checked)
    }

    console.log("Loaded");

    return(
        <div className="checkbox" data="text"
        onClick={() => { 
            onChange()
        }}>
            <input className="checkbox--box" type="checkbox" name={props.name} value={props.name} checked={checked} />
            <div className="checkbox--custom">
            <svg role="img" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon fill="#FFFFFF" points="6.89667458 13 2.62114014 8.72446556 4.12826603 7.21733967 6.89667458 9.97505938 12.871734 4 14.3788599 5.51781473"></polygon>
            </svg>
            </div>
            <span className="checkbox--label">{props.label}</span>
        </div>
    )
}

export default CustomCheckbox