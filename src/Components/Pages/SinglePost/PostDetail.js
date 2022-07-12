import React from 'react';
import { useSelector } from 'react-redux';

const PostDetail = () => {
  const { post, loadingPostDetails } = useSelector(
    (state) => state.PostReducer
  );

  return (
    <div>
      {loadingPostDetails
        ? (
          <div className="loader">
            <div>Loading ...</div>
          </div>
        )
        : (
          <div className="posts">
            <div lg={8} md={10} sm={12}>
              <h1>{post.title}</h1>
              <div>{post.body}</div>
            </div>
          </div>
        )}
    </div>
  );
};

export default PostDetail;
