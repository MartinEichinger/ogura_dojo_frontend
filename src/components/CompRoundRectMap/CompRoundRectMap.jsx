import React from 'react';

const CompRoundRectMap = ({ map }) => {
  return (
    <React.Fragment>
      <div className="circle d-flex flex-row align-items-center justify-content-center">
        <img src="wo_24px_outlined.svg" alt="" />
        <p className="red bold">{map.title}</p>
      </div>
      <div className="rect d-flex flex-row scroll_">
        <div className="tab w50 d-flex align-items-center">
          <p>{map.address}</p>
        </div>
        <div className="tab w50 frameless">
          <iframe
            title="training"
            src={map.src}
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CompRoundRectMap;
