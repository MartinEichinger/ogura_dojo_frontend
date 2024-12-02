/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import CombiButton from '../CompCombiButton/CompCombiButton';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../store/filter';

const BlogEntry = ({ blogs, colors }) => {
  const filterState = useSelector(selectFilter);

  return (
    <React.Fragment>
      {blogs.map((item, i) => {
        return filterState === 'Alle' || item.category === filterState ? (
          <div className="blog-card d-flex flex-column" key={i}>
            <div className="d-flex flex-row justify-content-between align-items-baseline">
              <h5 className="text-center w-100 green regular">
                {item.date} +++ {item.smallHeading}
              </h5>
            </div>
            <div className="body d-flex flex-row">
              <div
                style={{
                  backgroundImage: `url(${item.picture})`,
                  backgroundPosition: item.pictPos,
                }}
                className="image"
              ></div>
              <div className="text d-flex flex-column justify-content-center">
                <h4 className="text-center green">{item.category}</h4>
                <p className="linie text-center"></p>
                <h2 className="text-center smaller">{item.title}</h2>
                <p className="linie text-center"></p>
                <p className="text-center small">{item.detail}</p>
              </div>
            </div>
            <CombiButtonBE colors={colors} links={[item.file, item.website, item.video]} />
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
