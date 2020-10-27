import React, { useEffect, useRef, useState} from 'react'
import './dialog.scss'

import { CaretDownIcon  } from '@pluralsight/ps-design-system-icon'
import Button from '@pluralsight/ps-design-system-button'
import Theme from '@pluralsight/ps-design-system-theme'

import Checkbox from '../checkbox'

function Dialog(props){

    const ref = useRef()
    const [active, setActive] = useState(false)

    useOutsideClick(ref, () => {
        if(active) setActive(false)
    })
    
    return(
        <div 
            className="dialog"
            onClick={() => { setActive(true) }}
            ref={ref}
        >
            <div className="dialog--menu">
                <div className="dialog--item border">
                    <input type="checkbox" checked="true" />
                    All
                </div>
                {props.data.map((item,index) => {
                    if(item === "skilliq"){
                        item = "Skill IQ"
                    }else if(item === "interactive"){
                        item = "Interactive Courses"
                    }
                    return(
                        <div className="dialog--item">
                            <input type="checkbox" checked="true" />
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function useOutsideClick(ref, callback){
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        }
    })
}

export default Dialog