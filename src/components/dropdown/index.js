import React, { useEffect, useRef, useState} from 'react'
import './dropdown.scss'

import { CaretDownIcon  } from '@pluralsight/ps-design-system-icon'
import Button from '@pluralsight/ps-design-system-button'
import Theme from '@pluralsight/ps-design-system-theme'

import Checkbox from '../checkbox/'

function Dropdown(props){

    const ref = useRef()
    const [active, setActive] = useState(false)

    useOutsideClick(ref, () => {
        if(active) setActive(false)
    })
    
    return(
        <div 
            className="dropdown"
            onClick={() => { setActive(true) }}
            ref={ref}
        >
            {props.label}
            <CaretDownIcon color={CaretDownIcon.colors.textIconLowOnDark} className="dropdown--arrow" />
            {active && (
                <Theme name={Theme.names.light}>
                    <div className="dropdown--menu">
                        {props.options.map((item,index) => (
                            <Checkbox 
                                name={item.name}
                                value={item.name}
                                label={item.label} 
                                key={index} 
                            />
                        ))}
                        <div className="dropdown--action">
                            <Button appearance={Button.appearances.primary}>Apply</Button>
                        </div>
                    </div>
                </Theme>
            )}
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

export default Dropdown