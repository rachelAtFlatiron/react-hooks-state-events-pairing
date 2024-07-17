import React from "react";

function Comment({ curComment }) {
	return (
		<>
			<strong>{curComment.user}</strong>
			<p>{curComment.comment}</p>
		</>
	);
}

export default Comment;
