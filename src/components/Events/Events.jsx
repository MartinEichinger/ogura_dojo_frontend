/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import { EventContactForm } from '../EventContactForm/EventContactForm';
import EventFormInfos from '../EventFormInfos/EventFormInfos';
import EventFormSchedule from '../EventFormSchedule/EventFormSchedule';
import { useCustomStyles } from './Events.style';
import { useFormControls } from './Events.controls';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Events = ({ events, colors, mq }) => {
  // constants
  const debug = false;
  if (debug) console.log('Events : ', events);

  // style
  //const classes = useStyles();
  const style = useCustomStyles({ mq, colors });

  // util data
  const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAI', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEZ'];

  const entries = [
    // part I
    { name: 'seminar_title', label: 'Seminar', id: '#title', val_length: 80, required: 'true' },
    { name: 'seminar_date', label: 'Termin', id: '#date' },
    { name: 'seminar_location', label: 'Ort', id: '#location', val_length: 80, required: 'true' },
    {
      name: 'seminar_organiser',
      label: 'Ausrichter/Trainer',
      id: '#organisator',
      val_length: 80,
      required: 'true',
    },
    {
      name: 'seminar_organiser',
      label: 'Ausrichter/Trainer',
      id: '#organisator',
      val_length: 80,
      required: 'true',
    },
    // part II
    {
      name: 'details',
      label: 'Weitere Infos',
      id: '#details',
      multiline: true,
      multilinerows: 5,
      val_length: 2047,
      required: 'true',
    },
    { name: 'authorized', label: 'Berechtigt', id: '#authorized', val_length: 40, required: 'true' },
    { name: 'cost', label: 'Gebühr', id: '#cost', val_length: 80, required: 'true' },
    {
      name: 'other',
      label: 'Sonstiges',
      id: '#other',
      multiline: true,
      val_length: 1023,
      required: 'true',
    },
    // part III
    { name: 'email', label: 'E-Mail', id: '#email', val_email: true },
    { name: 'fullName', label: 'Name', id: '#fullName', val_length: 40 },
  ];

  // methods
  const { selectEvent, onChangeEvent, formIsValid, handleFormSubmit, entryData, changedData, errors } =
    useFormControls({
      events,
      entries,
    });

  if (debug) console.log('Events/props : ', changedData, entryData);

  return (
    <React.Fragment>
      {events.length > 0 && (
        <div className="schedule d-flex flex-column scroll_" css={style}>
          <EventFormSchedule events={events} month={month} selectEvent={selectEvent} />
        </div>
      )}
      {events.length > 0 && (
        <div className="detail d-flex flex-column scroll_" css={style}>
          <EventFormInfos inFieldVal={entries.slice(0, 4)} changedData={changedData} />
          <div className="invitation d-flex row-direction">
            <p>Ausschreibung</p>
            {changedData?.invitation_to_tender ? (
              <a
                href={`https://ogura-dojo-cms.directus.app/assets/${changedData?.invitation_to_tender?.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <PictureAsPdfIcon />
              </a>
            ) : (
              '-'
            )}
          </div>
          <EventContactForm
            //style={classes.root2}
            inFieldVal={entries.slice(8, 10)}
            event={changedData.title}
            value={changedData}
            onChangeEvent={onChangeEvent}
            errors={errors}
            formIsValid={formIsValid}
            handleFormSubmit={handleFormSubmit}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default Events;
