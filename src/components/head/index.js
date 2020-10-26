import React from 'react'
import './head.scss'

import TextInput from '@pluralsight/ps-design-system-textinput'
import {SearchIcon} from '@pluralsight/ps-design-system-icon'

function Head(){
    return(
        <section className="head">
            <div className="head--container">
                <h1 className="head--title">Bookmarks</h1>
                <TextInput
                    appearance={TextInput.appearances.subtle}
                    className="head--search"
                    icon={<SearchIcon />}
                    placeholder="Search"
                />
            </div>
        </section>
    )
}

export default Head