import React from 'react';

const CompRoundRectText = ({ text }) => {
  return (
    <React.Fragment>
      <div className="circle d-flex flex-row align-items-center justify-content-center">
        <img src="was_24px_outlined.svg" alt="" />
        <p className="red bold">{text.title}</p>
      </div>
      <div className="rect d-flex align-items-center scroll_">
        <p>{text.text}</p>
      </div>
    </React.Fragment>
  );
};

export default CompRoundRectText;
