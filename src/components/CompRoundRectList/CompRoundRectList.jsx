import React from 'react';

const CompRoundRectList = ({ list }) => {
  return (
    <React.Fragment>
      <div className="circle d-flex flex-row align-items-center justify-content-center">
        <img src="geld_24px_outlined.svg" alt="" />
        <p className="red bold">{list.title}</p>
      </div>
      <div className="rect scroll_">
        <div className="tab-row d-flex flex-row">
          {list.items.map((item, i) => {
            return (
              <div className="tab w33" key={i}>
                <p className="bold underline">
                  {item.heading[0]}
                  <span className="span_vis">{item.heading[1]}</span>
                </p>
                {item.listing.map((it, i) => {
                  return <p key={i}>{it}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CompRoundRectList;
