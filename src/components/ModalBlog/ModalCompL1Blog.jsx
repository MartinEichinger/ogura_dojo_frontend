/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import BlogNav from '../BlogNav/BlogNav';
import BlogEntry from '../BlogEntry/BlogEntry';

var dataReady = false;

const ModalCompL1Blog = ({ colors, content, blogs }) => {
  const debug = false;

  if (blogs.length > 0) dataReady = true;
  if (debug) console.log('ModalComp_L1_Blogs: ', blogs, blogs.length, dataReady);

  return (
    <div className="modal-col">
      <h1 className="bigger">{content.title}</h1>
      <BlogNav filterProps={content.filterProps} colors={colors} />
      <div className="table scroll_">{dataReady && <BlogEntry blogs={blogs} colors={colors} />}</div>
    </div>
  );
};

export default ModalCompL1Blog;
