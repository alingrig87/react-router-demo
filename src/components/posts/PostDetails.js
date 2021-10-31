import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = (props) => {
	const params = useParams();
	return (
		<div>
			<h2>Post details for {params.postId}</h2>
		</div>
	);
};

export default PostDetails;
