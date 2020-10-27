import React, { useState } from 'react'
import './content.scss'

import Row from '@pluralsight/ps-design-system-row'
import Button from '@pluralsight/ps-design-system-button'
import Icon from '@pluralsight/ps-design-system-icon'
import { IqIcon, BookmarkFillIcon, LabsIcon, InteractiveIcon, MoreIcon, PathIcon, VideoIcon, ProjectIcon,  } from '@pluralsight/ps-design-system-icon'


function Content(props){
    const [render, setRender] = useState(false)
    return(
        <div className="content">
            <div className="content--container">
                {props.data.map((item, index) =>{
                    
                    let { iconProps, customIcon } = {}

                    iconProps = {
                        className: 'content--type',
                        size: VideoIcon.sizes.small
                    }
                    
                    customIcon = (function(symbol){
                        switch(symbol){
                            case 'path':
                                return <PathIcon { ...iconProps } />
                            case 'lab':
                                return <LabsIcon { ...iconProps } />
                            case 'interactive':
                                return <InteractiveIcon { ...iconProps } />
                            case 'project':
                                return <ProjectIcon { ...iconProps } />
                            case 'skilliq':
                                return <IqIcon { ...iconProps } />
                            case 'guide':
                                return  <Icon size={VideoIcon.sizes.small} className="content--type custom">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 5.25C4 5.11193 4.11193 5 4.25 5H19.75C19.8881 5 20 5.11193 20 5.25V6.75C20 6.88807 19.8881 7 19.75 7H4.25C4.11193 7 4 6.88807 4 6.75V5.25ZM4 9.25C4 9.11193 4.11193 9 4.25 9H19.75C19.8881 9 20 9.11193 20 9.25V10.75C20 10.8881 19.8881 11 19.75 11H4.25C4.11193 11 4 10.8881 4 10.75V9.25ZM4 13.25C4 13.1119 4.11193 13 4.25 13H19.75C19.8881 13 20 13.1119 20 13.25V14.75C20 14.8881 19.8881 15 19.75 15H4.25C4.11193 15 4 14.8881 4 14.75V13.25ZM4 17.25C4 17.1119 4.11193 17 4.25 17H15.75C15.8881 17 16 17.1119 16 17.25V18.75C16 18.8881 15.8881 19 15.75 19H4.25C4.11193 19 4 18.8881 4 18.75V17.25Z" fill="white" fillOpacity="0.95"/>
                                            </svg>
                                        </Icon>
                                
                            default:
                                return <VideoIcon { ...iconProps } />
                        }
                    })(item.type)

                    let customMeta = item.metadata1

                    if(!render){
                        let customRow = <Row.Text> {customIcon} {item.metadata1[0]} </Row.Text>
                        customMeta.shift()
                        customMeta.unshift(customRow)
                        setRender(true)
                    }

                    let rowProps = {
                        actionBar:[
                            <Button size={Button.sizes.small} appearance={Button.appearances.flat} key="bookmark" icon={<BookmarkFillIcon />} />,
                            <Button size={Button.sizes.small} appearance={Button.appearances.flat} key="more" icon={<MoreIcon />} />
                        ],
                        actionBarVisible: true,
                        className: 'content--item',
                        image: <Row.Image src={item.image} />,
                        key: index,
                        title: item.title,
                        metadata1: customMeta,
                        progress: 0
                    }

                    if(item.metadata2.length){
                        let meta2 = [
                            <Row.Text>
                                <strong>{item.metadata2[0].label}:</strong>&nbsp;
                                {
                                    item.metadata2[0].children.map((i, n) => {
                                        let comma = ''
                                        if(n < (item.metadata2[0].children.length - 1)){ comma = ', '}
                                        return(<Row.Text key={n}><Row.TextLink><a href="#">{i}</a></Row.TextLink>{comma}</Row.Text>)
                                    })
                                }
                            </Row.Text>
                        ]
                        
                        rowProps.metadata2 = meta2;
                    }

                    return(
                        <Row { ...rowProps } />
                    )
                })}
            </div>
        </div>
    )
}

export default Content