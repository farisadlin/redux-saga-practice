import React, { useEffect } from 'react';
import Posts from 'Components/Pages/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from 'Redux/Store/Posts/Actions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="home">
      <Posts />
    </div>
  );
};

export default Home;
