import React from 'react';

const EventFormSchedule = ({ events, month, selectEvent }) => {
  const debug = false;
  if (debug) console.log('EventFormSchedule: ', events);
  return (
    <>
      {events.map((item, i) => {
        var d = new Date(item.seminar_date);
        return (
          <React.Fragment key={i}>
            <div className="block d-flex flex-row" onClick={() => selectEvent(item)}>
              {i % 2 === 0 && (
                <div className="date bgRed d-flex flex-column justify-content-center align-items-center">
                  <h1 className="big">{d.getDate()}</h1>
                  <h2>{month[d.getMonth()]}</h2>
                </div>
              )}
              {i % 2 === 1 && (
                <div className="date bgGreen d-flex flex-column justify-content-center align-items-center">
                  <h1 className="big">{d.getDate()}</h1>
                  <h2>{month[d.getMonth()]}</h2>
                </div>
              )}
              <div className="details d-flex flex-column align-items-stretch justify-content-between">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <h3 className="align-self-stretch">{item.seminar_title}</h3>
                </div>
                <div className="d-flex flex-row justify-content-start align-items-baseline">
                  {i % 2 === 0 && <i className="fas fa-map-marker-alt red"></i>}
                  {i % 2 === 1 && <i className="fas fa-map-marker-alt green"></i>}
                  {i % 2 === 0 && <h4 className="red">{item.seminar_location}</h4>}
                  {i % 2 === 1 && <h4 className="green">{item.seminar_location}</h4>}
                  <i className="fas fa-user"></i>
                  <h4>{item.seminar_organiser}</h4>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default EventFormSchedule;
