/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import Events from '../Events/Events';

const ModalCompL1Events = ({
  colors,
  content,
  mq,
  events,
}: {
  colors: any;
  content: any;
  mq: string;
  events: any;
}) => {
  const debug = false;

  // destructure
  events = events.map((item: any) => {
    return { seminar_title: item.translations[0].seminar_title, ...item };
  });

  if (debug) console.log('ModalComp_L1_Events: ', events, events.length);

  return (
    <div className="modal-col">
      <div className="imageBg"></div>
      <div className="heading d-flex flex-row justify-content-between align-items-center">
        <h1 className="bigger">{content.title}</h1>
      </div>
      <div className="tables d-flex flex-column flex-lg-row flex-lg-wrap align-items-center align-items-lg-stretch justify-content-lg-around ">
        {events.length > 0 && <Events events={events} colors={colors} mq={mq} />}
      </div>
    </div>
  );
};

export default ModalCompL1Events;
