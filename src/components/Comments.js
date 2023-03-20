import React, { useState } from "react";

const Comments = ({ videoDataState, setVideoDataState, commentObj }) => {

    const [isCommentDisplayed, setIsCommentDisplayed] = useState(true);

    const handleCommentVote = (event) => {
        const updatedComment = videoDataState.comments.map((comObj) => {
            if(comObj.id == event.target.id) {
                return {...comObj, [event.target.name]: comObj[event.target.name] + 1};
            }
            return comObj;
        })
        setVideoDataState({...videoDataState, comments: updatedComment})
    }
  
    const handleCommentRemove = () => {
        setIsCommentDisplayed(!isCommentDisplayed)
    }

    return (
        <div style={{textAlign: "center"}}>
            {isCommentDisplayed ?
            <div>
                <h4>{commentObj.user}</h4>
                <p>{commentObj.comment}</p>
                <button id={commentObj.id} name="upvotes" onClick={(event) => handleCommentVote(event)}>{commentObj.upvotes}👍</button>
                <button id={commentObj.id} name="downvotes" onClick={(event) => handleCommentVote(event)}>{commentObj.downvotes}👎</button>
                <br></br>
            </div>
            : null}
            <button type="button" name="displayed" onClick={handleCommentRemove}>{isCommentDisplayed ? "Remove Comment" : "Display Comment"}</button>
        </div>
    )
}

export default Comments;