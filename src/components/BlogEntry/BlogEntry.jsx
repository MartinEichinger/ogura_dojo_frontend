/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import CombiButton from '../CompCombiButton/CompCombiButton';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../store/filter';

const BlogEntry = ({ blogs, colors }) => {
  const debug = false;
  const filterState = useSelector(selectFilter);

  if (debug) console.log('BlogEntry: ', blogs);
  return (
    <React.Fragment>
      {blogs.map((item, i) => {
        return filterState === 'Alle' || item.translations?.[0].category === filterState ? (
          <div className="blog-card d-flex flex-column" key={i}>
            <div className="d-flex flex-row justify-content-between align-items-baseline">
              <h5 className="text-center w-100 green regular">
                {item.translations?.[0]?.date} +++ {item.translations?.[0]?.tags}
              </h5>
            </div>
            <div className="body d-flex flex-row">
              <div
                style={{
                  backgroundImage: `url("https://ogura-dojo-cms.directus.app/assets/${item.picture?.id}")`,
                  backgroundPosition: item.picture_position,
                }}
                className="image"
              ></div>
              <div className="text d-flex flex-column justify-content-center">
                <h4 className="text-center green">{item.translations?.[0]?.category}</h4>
                <p className="linie text-center"></p>
                <h2 className="text-center smaller">{item.translations?.[0]?.headline}</h2>
                <p className="linie text-center"></p>
                <p className="text-center small">{item.translations?.[0]?.content}</p>
              </div>
            </div>
            <CombiButtonBE
              colors={colors}
              links={[
                `https://ogura-dojo-cms.directus.app/assets/${item.file?.id}`,
                item.website,
                item.video,
              ]}
            />
          </div>
        ) : (
          ''
        );
      })}
    </React.Fragment>
  );
};

export default BlogEntry;

// STYLED COMPONENTS
const CombiButtonBE = styled(CombiButton)`
  margin: -16px auto 0;
  width: inherit;
  //font-family: Roboto, Helvetica, Arial, sans-serif;

  #ButtonGroup {
    padding: 0px;
    width: 150px;

    .select {
      //padding: 0.5rem;
    }

    .descr {
      font-size: 12px;
      //font-size: calc(.44643vw + 5.5px);
      padding: 0.5rem;
    }
  }

  #List {
    padding: 0px;

    button i {
      padding: 5px 0px;
    }
  }
`;
