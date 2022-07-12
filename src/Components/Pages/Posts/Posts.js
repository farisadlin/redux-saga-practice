/* eslint-disable multiline-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Posts () {
  const { posts, loadingPosts } = useSelector((state) => state.PostReducer);
  return (
    <div>
      {loadingPosts ? (
        <div className="loader">
          <div>Loading ...</div>
        </div>
      ) : (
        posts.map((item, key) => {
          return (
            <div className="posts" key={key}>
              <div lg={8} md={10} sm={12}>
                <Link to={`/${item.id}`}>
                  <div>
                    <div>
                      <div>{item.title}</div>
                      <div>{item.body}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
