import React from 'react'
import './nav.scss'

import {HomeIcon, BrowseIcon, PathIcon, ChannelIcon, BookmarkIcon, SearchIcon, QNAIcon} from '@pluralsight/ps-design-system-icon'
import TextInput from '@pluralsight/ps-design-system-textinput'

function Nav(){
    return(
        <nav className="nav">
            <div className="nav--item">
                <HomeIcon size={HomeIcon.sizes.medium} />
                <div className="nav--label">Home</div>
            </div>
            <div className="nav--item">
                <BrowseIcon size={BrowseIcon.sizes.medium} />
                <div className="nav--label">Browse</div>
            </div>
            <div className="nav--search">
                <TextInput
                    appearance={TextInput.appearances.subtle}
                    icon={<SearchIcon />}
                    placeholder="Search..."
                    className="nav--searchInput"
                />
            </div>
            <div className="nav--item">
                <PathIcon size={PathIcon.sizes.medium} />
                <div className="nav--label">Paths</div>
            </div>
            <div className="nav--item">
                <ChannelIcon size={ChannelIcon.sizes.medium} />
                <div className="nav--label">Channels</div>
            </div>
            <div className="nav--item active">
                <BookmarkIcon size={BookmarkIcon.sizes.medium} />
                <div className="nav--label">Bookmarks</div>
            </div>
            <div className="nav--item">
                <QNAIcon size={QNAIcon.sizes.medium} />
                <div className="nav--label">Q&amp;A</div>
            </div>
             
        </nav>
    )
}

export default Nav