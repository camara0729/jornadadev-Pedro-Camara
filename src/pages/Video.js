import React, { useRef, useState } from "react"
import "./Video.css"
import VideoFooter from "./components/footer/VideoFooter"

function Video() {

    const videoRef = useRef(null)
    const [play, setplay] = useState(false)

    function handdleStart() {
        if (play) {
            videoRef.current.pause()
            setplay(false)
        }
        else {
            videoRef.current.play()
            setplay(true)
        }
    }

    return (
        <div className="video">
            <video
                className="videoPlayer"
                ref={videoRef}
                onClick={handdleStart}
                loop
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
            ></video>
            {/* Side bar */}
            <VideoFooter/>
        </div>
    )
}

export default Video


