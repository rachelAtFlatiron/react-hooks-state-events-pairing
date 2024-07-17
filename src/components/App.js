import video from "../data/video.js";
import Votes from "./Votes.js";
import Comment from "./Comment.js";
function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src= {video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
        <p>{video.views} Views | Updated {video.createdAt} </p>
        <Votes upvotes={video.upvotes} downvotes={video.downvotes}/>
        <h2>Comments</h2>

        {
          video.comments.map(curComment => <Comment curComment={curComment} />)
        }
    </div>
  );
}

export default App;
