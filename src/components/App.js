import video from "../data/video.js";
import DisplayVideo from "./DisplayVideo.js";
import Information from "./Information";

function App() {
  console.log("Here's your data:", video);

  return (
    <>
      <DisplayVideo video={video} />
      <Information video={video} />
    </>
  );
}

export default App;
