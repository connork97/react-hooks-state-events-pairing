import React, { useState } from "react";
import video from "../data/video.js";
import Comments from "./Comments";
import FilterComments from "./FilterComments";


import VideoDisplay from "./VideoDisplay";

function App() {

  // Adding Upvote/Downvote State to original data provided via copy

  const updatedVideo = {...video};

  const updatedComments = updatedVideo.comments.map((comment) => {
    return {...comment, upvotes: 0, downvotes: 0}
  });

  updatedVideo.comments = updatedComments;

  // Global States

  // Base State and Data for All Components
  const [videoDataState, setVideoDataState] = useState(updatedVideo);

  // State for Keeping All Comments Displayed or Hiding them
  const [commentState, setCommentState] = useState(true);

  // State for Searching by Username
  const [commentSearchState, setCommentSearchState] = useState("");
  
  // State for Sorting Comments via Dropdown
  const [sortCommentsState, setSortCommentsState] = useState(true);

    const renderComments = videoDataState.comments.map((com) => {
    const commentObj = com;
    const popularity = com.upvotes - com.downvotes;
    const user = com.user;
    const comment = com.comment;
    const searchedUser = user.toLowerCase().includes(commentSearchState);
    const commentsComponent = 
    <Comments 
      videoDataState={videoDataState}
      setVideoDataState={setVideoDataState}
      commentObj={commentObj}
      key={comment}
    />
    if (commentState && searchedUser && sortCommentsState === true) {
      return commentsComponent;
    } else if (commentState && searchedUser && sortCommentsState === "most" && popularity >= 0) {
      console.log("we're searching for most");
      return commentsComponent;
    } else if (commentState && searchedUser && sortCommentsState === "least" && popularity <= 0) {
      console.log("we're searching for least");
      return commentsComponent;
    }
  })

  // The Components that Actually Render on the Page
  return (
    <>
      <VideoDisplay 
        embedUrl={videoDataState.embedUrl}
        title={videoDataState.title}
        views={videoDataState.views}
        createdAt={videoDataState.createdAt}
        upvotes={videoDataState.upvotes}
        downvotes={videoDataState.downvotes}
        comments={videoDataState.comments}
        videoDataState={videoDataState}
        setVideoDataState={setVideoDataState}
        commentState={commentState}
        setCommentState={setCommentState} 
      />
      <FilterComments
        videoDataState={videoDataState}
        setVideoDataState={setVideoDataState}
        setCommentSearchState={setCommentSearchState}
        setSortCommentsState={setSortCommentsState}
      />
      {renderComments}
    </>
  );
}

export default App;
