import React, { useState } from 'react'
import './filter.scss'


import Dropdown from '@pluralsight/ps-design-system-dropdown'
import Radio from '@pluralsight/ps-design-system-radio'
import Theme from '@pluralsight/ps-design-system-theme'

import Dialog from '../dialog/'

function Filter(props){

    const [dialog,setDialog] = useState(true)
    const [value, setValue] = React.useState('newest')
    const [valueLevel, setValueLevel] = React.useState('all')

    return(
        <div className="filter">
            <div className="filter--container">
                <div className="filter--header">Sort by</div>
                <div className="filter--group">
                    <Radio.Group name="controlled" value={value}>
                        <Radio.Button value="author" label="Author" />
                        <Radio.Button value="completed" label="Completed" />
                        <Radio.Button value="incompleted" label="Incompleted" />
                        <Radio.Button value="newest" label="Newest" />
                        <Radio.Button value="oldest" label="Oldest" />
                        <Radio.Button value="az" label="Title A-Z" />
                        <Radio.Button value="za" label="Title Z-A" />
                    </Radio.Group>
                </div>
                <div className="filter--header">Content Types</div>
                <div className="filter--group">
                    <Dialog data={props.content} />
                </div>
                <div className="filter--header">Skill Level</div>
                <div className="filter--group">
                    <Radio.Group name="controlled" value={valueLevel}>
                        <Radio.Button value="all" label="All" />
                        <Radio.Button value="beginner" label="Beginner" />
                        <Radio.Button value="intermediate" label="Intermediate" />
                        <Radio.Button value="advanced" label="Advanced" />
                    </Radio.Group>
                </div>
            </div>
        </div>
    )
}

export default Filter