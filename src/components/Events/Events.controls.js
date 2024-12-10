import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateEvent, createEvent, deleteEvent } from '../../store/events';
import { sendEmail } from '../../store/email';

//import { format } from 'date-fns';
const defaultEntry = {
  authorized: '-',
  cost: '-',
  date: '2020-01-01',
  details: '-',
  id: '-',
  location: '-',
  organisator: '-',
  other: '-',
  title: 'Aktuell keine neuen Termine geplant',
};

export const useFormControls = ({ events, entries }) => {
  const debug = false;

  // Find index of first event dataset which is younger than today
  var idx = events.findIndex((event, i) => {
    var today = new Date();
    var event_date = new Date(event.seminar_date);
    return event_date > today;
  });

  // if no event is planned, the default Entry should be used
  const changedDataDefaultEntry = idx > -1 ? events[idx] : defaultEntry;

  // STATES
  const [editData, setEditData] = useState(false);
  const [entryData, setEntryData] = useState(events[0]);
  const [changedData, setChangedData] = useState(changedDataDefaultEntry); //events[idx]);
  const [errors, setErrors] = useState({});

  if (debug) console.log('Events.controls: ', idx, events, changedData, entries, errors);

  const dispatch = useDispatch();

  // EVENTS
  const newEvent = () => {
    const item = {
      authorized: 'z.B. nur CRB Mitglieder',
      cost: 'z.B. 5 €',
      date: '2021-01-01',
      details: 'z.B. was ist mitzubringen oder Details zum Seminar',
      id: 'none',
      location: 'z.B. Traunreut, Sonnenschule',
      organisator: 'z.B. Uli Geuder',
      other: 'z.B. was ist sonst noch interessant',
      title: 'Neuer Event',
    };

    if (debug) console.log('New event: ', item.title);
    setChangedData(item);
    setEditData(true);
  };

  const selectEvent = (item) => {
    if (debug) console.log('Select event: ', item.title);
    setEntryData(item);
    setChangedData(item);
  };

  const delEvent = (item) => {
    dispatch(deleteEvent(item));
  };

  // ENTRIES
  const saveFormData = (save) => {
    setEditData(false);
    if (save) {
      if (debug) console.log('save data: ', changedData);
      if (changedData['id'] === 'none') {
        setEntryData(changedData);
        dispatch(createEvent(changedData));
      } else {
        setEntryData(changedData);
        dispatch(updateEvent(changedData));
      }
    } else {
      if (debug) console.log('dont save data: ', entryData);
      setChangedData(entryData);
    }
  };

  const onChangeEvent = (attr, val) => {
    if (debug) console.log('Events/onChangeEvent: ', attr, val);
    const obj = {
      ...changedData,
      [attr]: val,
    };
    setChangedData(obj);
    validate({ [attr]: val });
  };

  const onChangeDate = (attr, val) => {
    if (debug) console.log('Events/onChangeDate: ', val);
    const obj = {
      ...changedData,
      [attr]: val,
      //date: format(new Date(date), 'yyyy-MM-dd'),
    };
    setChangedData(obj);
  };

  const validate = (fieldValues = changedData) => {
    let temp = { ...errors };

    // eslint-disable-next-line
    entries.map((x, i) => {
      if (x.name in fieldValues) {
        // validate length property
        if ('val_length' in x) {
          let [idx] = Object.keys(fieldValues);
          // error message if field is required and no entry
          if (fieldValues[idx] || x.required === 'false') {
            temp[idx] = '';
          } else {
            temp[idx] = 'Notwendiges Feld';
          }

          // check length
          if (fieldValues[idx])
            temp[idx] =
              fieldValues[idx].length > x.val_length
                ? `Eingabe zu lang (max. ${x.val_length} Zeichen)`
                : '';
        } else if ('val_email' in x) {
          if ('email' in fieldValues) {
            temp.email = fieldValues.email ? '' : 'This field is required.';
            if (fieldValues.email)
              temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                ? ''
                : 'Email is not valid.';
          }
        }
      }
    });

    //if ('fullName' in fieldValues) temp.fullName = fieldValues.fullName ? '' : 'This field is required.';

    setErrors({
      ...temp,
    });
  };

  const formIsValid = (fieldValues = changedData) => {
    const isValid = Object.values(errors).every((x) => x === '');

    if (debug) console.log('Events/formIsValid: ', isValid);
    return isValid;
  };

  const handleFormSubmit = (seminar) => {
    if (debug)
      console.log(
        'ContactFormControls/sendEmail: ',
        changedData['email'],
        changedData['fullName'],
        seminar
      );
    const email = changedData['email'];
    const sender = changedData['fullName'];
    const obj = {
      ...changedData,
      email: '',
      fullName: '',
    };
    setChangedData(obj);
    dispatch(sendEmail({ email, sender, seminar }));
  };

  return {
    newEvent,
    selectEvent,
    delEvent,
    saveFormData,
    onChangeEvent,
    onChangeDate,
    setEditData,
    formIsValid,
    handleFormSubmit,
    editData,
    entryData,
    changedData,
    errors,
  };
};
