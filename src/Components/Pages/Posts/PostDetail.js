import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostDetail = ({ data, key }) => {
  const { id, title } = data;
  return (
    <div className="posts-wrapper" key={key}>
      <ul>
        <Link to={`/${id}/${title}`}>
          <div className='posts-wrapper__img-wrapper'>
            <img src='https://doodleipsum.com/300/outline?i=0f6382a3dc3198624686f4dce990cd88'/>
          </div>
        </Link>
        <li className='posts-wrapper__title'>{title}</li>
        {/* <li className='posts-wrapper__content'>{body}</li> */}
        {/* <button className='posts-wrapper__button'>Read More</button> */}
      </ul>
    </div>
  );
};

PostDetail.propTypes = {
  data: PropTypes.object,
  key: PropTypes.number
};

export default PostDetail;
