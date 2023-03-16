import React, { useState } from "react"

const Buttons = ({ upVotes, downVotes }) => {
    const [voteButtons, setVoteButtons] = useState({
        upVote: upVotes,
        downVote: downVotes
    });

    const updateDislikeButton = () => {
        setVoteButtons(voteButtons => {
            let currentVotes = Number(voteButtons.downVote);
            return { ...voteButtons, downVote: currentVotes + 1 };
        })
    }

    const updateLikeButton = () => {
        setVoteButtons(voteButtons => {
            let currentVotes = Number(voteButtons.upVote)
            return { ...voteButtons, upVote: currentVotes + 1};
        })
    }

    return (
        <div className="buttons-div">
            <button className="upVote" name="upVote" onClick={updateLikeButton}>{voteButtons.upVote}👍</button>
            <button className="downVote" name="downVote" onClick={updateDislikeButton}>{voteButtons.downVote}👎</button>
        </div>
    )
}

export default Buttons