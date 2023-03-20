import React, { useState } from "react";
import Comments from "./Comments";

const VideoDisplay = ({ embedUrl, title, views, createdAt, upvotes, downvotes, comments, commentState, setCommentState, videoDataState, setVideoDataState }) => {    

    const handleVoteClick = (event) => {
        let currentVotes = videoDataState[event.target.name];
        setVideoDataState((prevState) => {
            return {...prevState, [event.target.name]: currentVotes + 1}
        })
    }

    return (
        <div className="App">
            <iframe
                width="919"
                height="525"
                // src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h2>{title}</h2>
            <p><span>{views} Views</span> | <span>{createdAt}</span></p>
            <button name="upvotes" onClick={(event) => handleVoteClick(event)}>{upvotes} 👍</button>
            <button name="downvotes" onClick={(event) => handleVoteClick(event)}>{downvotes} 👎</button>
            <br></br><br></br>
            <button onClick={() => setCommentState(!commentState)}>{commentState ? "Hide Comments" : "Show Comments"}</button>
            <h2>Comments</h2>
        </div>
    )
}

export default VideoDisplay;