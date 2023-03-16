import Buttons from "./Buttons";

const Information = ({ video }) => {
    return (
        <div>
            <h1 className="title">
                {video.title}
            </h1>
            <h2 className="views">
                {video.views} Views | {video.createdAt}
            </h2>
            <Buttons upVotes={video.upvotes} downVotes={video.downvotes} />
        </div>
    )
}

export default Information