import React from "react";
import {IYouTubePlayer} from "../../models/components/IYouTubePlayer";
import YouTube from 'react-youtube';

export const YouTubePlayer: React.FC<IYouTubePlayer> = props => {
    return (
        <YouTube className="w-100" videoId={props.idVideo} onReady={event => event.target.pauseVideo()} />
    )
}