/* eslint-disable multiline-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import 'Styles/posts.css';
import Loading from 'Utilities/Loading';
import PostDetail from './PostDetail';

export default function Posts () {
  const { posts, loadingPosts } = useSelector((state) => state.PostReducer);
  return (
    <div className='posts-container'>
      {loadingPosts ? (
        <Loading />
      )
        : posts.map((item, key) => <PostDetail data={item} key={key} />)
      }
    </div>
  );
}
