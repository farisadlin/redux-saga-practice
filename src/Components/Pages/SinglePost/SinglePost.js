import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPostDetails } from 'Redux/Store/Posts/Actions';
import { useParams } from 'react-router-dom';
import PostDetail from './PostDetail';

function SinglePost () {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetails(params.id));
  }, [params.id]);

  return (
    <div className="single-post">
      <PostDetail />
    </div>
  );
}
export default SinglePost;
