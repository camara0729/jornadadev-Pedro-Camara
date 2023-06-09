import React, { useState } from 'react'
import "./VideoSidebar.css"
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function VideoSidebar({ likes, messages, shares }) {

    const [liked, setLiked] = useState(false)

    function handdleLike() {
        setLiked(!liked)
    }

    return (
        <div className='videoSidebar'>
            <div
                className='videoSidebarOptions'
                onClick={handdleLike}
            >
                {liked ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large' />}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className='videoSidebarOptions'>
                <ChatIcon />
                <p>{messages}</p>
            </div>
            <div className='videoSidebarOptions'>
                <ShareIcon />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar