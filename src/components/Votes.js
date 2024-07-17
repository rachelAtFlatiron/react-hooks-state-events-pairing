import { useState } from "react";

// View -> Event -> State
function Votes({ upvotes, downvotes }) {
    const [ups, setUps] = useState(upvotes)
    const [downs, setDowns] = useState(downvotes)

    const handleDownvote = () => {
        setDowns(prev => prev + 1)
    }

    const handleUpvote = () => {
        setUps(prev => prev + 1)
    }
	return (
		<div>
			<button onClick={handleUpvote}>{ups} 👍</button>
			<button onClick={handleDownvote}>{downs} 👎</button>
		</div>
	);
}

export default Votes;
