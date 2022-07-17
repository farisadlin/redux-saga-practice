import React from 'react';
import ReactLoading from 'react-loading';
import 'Styles/utilities.css';
import PropTypes from 'prop-types';

const Loading = ({ type = 'spin', color = 'blue' }) => {
  const props = { type, color };
  return (
    <div className='loading-wrapper'>
      <ReactLoading className='loading' {...props}/>
    </div>
  );
};

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string
};

export default Loading;
