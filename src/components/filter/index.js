import React, { useState } from 'react'
import './filter.scss'


import Dropdown from '@pluralsight/ps-design-system-dropdown'
import Theme from '@pluralsight/ps-design-system-theme'

import Dialog from '../dialog/'

function Filter(props){

    const [dialog,setDialog] = useState(true)

    return(
        <div className="filter">
            <div className="filter--container">
            <span className="filter--label">Filter by:</span>
                <Theme name={Theme.names.dark}>
                    <Dialog data={props.content} />
                    <Dropdown 
                        className="filter--dropdown"
                        placeholder="Skill level"
                        appearance={Dropdown.appearances.subtle}
                        menu={
                            <React.Fragment>
                                <Dropdown.Item>All</Dropdown.Item>
                                <Dropdown.Item>Beginner</Dropdown.Item>
                                <Dropdown.Item>Intermediate</Dropdown.Item>
                                <Dropdown.Item>Advanced</Dropdown.Item>
                            </React.Fragment>
                        }
                    />
                    <Dropdown 
                        className="filter--dropdown"
                        placeholder="Date range"
                        appearance={Dropdown.appearances.subtle}
                        menu={
                            <React.Fragment>
                                <Dropdown.Item>All time</Dropdown.Item>
                                <Dropdown.Item>Past 6 months</Dropdown.Item>
                                <Dropdown.Item>Past year</Dropdown.Item>
                                <Dropdown.Item>Past 2 years</Dropdown.Item>
                            </React.Fragment>
                        }
                    />
                </Theme>
                <span className="filter--label">Sort by:</span>
                <Theme name={Theme.names.dark}>
                    <Dropdown 
                        className="filter--dropdown"
                        placeholder="Newest"
                        appearance={Dropdown.appearances.subtle}
                        menu={
                            <React.Fragment>
                                <Dropdown.Item>Author</Dropdown.Item>
                                <Dropdown.Item>Completed</Dropdown.Item>
                                <Dropdown.Item>Incompleted</Dropdown.Item>
                                <Dropdown.Item>Newest</Dropdown.Item>
                                <Dropdown.Item>Oldest</Dropdown.Item>
                                <Dropdown.Item>Title A-Z</Dropdown.Item>
                                <Dropdown.Item>Title Z-A</Dropdown.Item>
                            </React.Fragment>
                        }
                    />
                </Theme>
            </div>
        </div>
    )
}

export default Filter