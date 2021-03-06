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
            Content type
            <CaretDownIcon color={CaretDownIcon.colors.textIconLowOnDark} className="dialog--arrow" />
            {active && (
                <Theme name={Theme.names.light}>
                    <div className="dialog--menu">
                        {props.data.map((item,index) => {
                            if(item === "skilliq"){
                                item = "Skill IQ"
                            }else if(item === "interactive"){
                                item = "Interactive Courses"
                            }
                            return(
                                <div className="dialog--item">
                                    <input type="checkbox" />
                                    {item}
                                </div>
                            )
                        })}
                        <div className="dialog--action">
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

export default Dialog