import { useEffect, useState } from 'react';

//import { updateBlog, createBlog, deleteBlog } from '../../store/blogs';

const initialItem = {
  id: '',
  category: '',
  detail: '',
  date: '2020-01-01',
  file: '',
  pictPos: '50% 50%',
  picture: '',
  smallHeading: '',
  title: '',
  website: '',
  video: '',
};

export const useFormControls = ({ blogs, entries }) => {
  const debug = false;

  // STATES
  const [editData, setEditData] = useState({ edit: false, id: 0 });
  const [entryData, setEntryData] = useState(initialItem);
  const [changedData, setChangedData] = useState(initialItem);
  const [errors, setErrors] = useState({});
  const [save2validate, setSave2validate] = useState(false);

  if (debug) console.log('Blogs.controls: ', blogs, changedData, entries, errors);

  // Trigger save after validation results are stored
  useEffect(() => {
    if (save2validate) {
      let valid = formIsValid();
      //saveFormData(valid);
      if (valid) setChangedData(initialItem);
      setSave2validate(false);
    }
    // eslint-disable-next-line
  }, [save2validate]);

  // ENTRIES
  const clickSaveButton = () => {
    validate();
    setSave2validate(true);
  };

  const selectBlog = (item) => {
    if (debug) console.log('Select event: ', item);
    setEditData({ edit: true, id: item.id });
    setEntryData({
      ...item,
      picture: '',
      file: '',
    });
    setChangedData({
      ...item,
      picture: '',
      file: '',
    });
  };

  const disselectBlog = () => {
    if (debug) console.log('Disselect event');
    setEditData({ edit: false, id: 0 });
    setEntryData(initialItem);
    setChangedData(initialItem);
  };

  /*   const saveFormData = (save) => {
    setEditData({ edit: false, id: 0 });
    if (save) {
      if (debug) console.log('save data: ', changedData);
      if (changedData['id'] === '') {
        setEntryData(changedData);
        dispatch(createBlog(changedData));
      } else {
        setEntryData(changedData);
        dispatch(updateBlog(changedData));
      }
    } else {
      if (debug) console.log('dont save data: ', entryData);
      setChangedData(entryData);
    }
  }; */

  const onChangeBlog = (attr, val) => {
    if (debug) console.log('Blogs/onChangeBlog: ', attr, val);
    // concatenate pictPos_1 and pictPos_2
    if (attr.includes('pictPos')) {
      if (attr === 'pictPos_1') {
        var pictPos_2 =
          changedData && 'pictPos' in changedData ? changedData['pictPos'].split(' ')[1] : '50';
        pictPos_2 = pictPos_2.replace('%', '');
        attr = 'pictPos';
        val = `${val}% ${pictPos_2}%`;
      } else if (attr === 'pictPos_2') {
        var pictPos_1 =
          changedData && 'pictPos' in changedData ? changedData['pictPos'].split(' ')[0] : '50';
        pictPos_1 = pictPos_1.replace('%', '');
        attr = 'pictPos';
        val = `${pictPos_1}% ${val}%`;
      }
      console.log('pictPos: ', attr, val);
    }

    // update changedData Obj before set change
    const obj = {
      ...changedData,
      [attr]: val,
    };

    // set change
    setChangedData(obj);
    validate({ [attr]: val });
  };

  /*   const delBlogEntry = (item) => {
    dispatch(deleteBlog(item));
  }; */

  const validate = (fieldValues = changedData) => {
    let temp = { ...errors };

    // eslint-disable-next-line
    entries.map((x, i) => {
      if (x.name in fieldValues) {
        // validate length property
        if ('val_length' in x) {
          //let [idx] = Object.keys(fieldValues);
          let idx = x.name;
          temp[idx] = fieldValues[idx] ? '' : 'Notwendiges Feld';
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

    console.log('temp: ', temp);
    setErrors(temp);

    if (debug) console.log('BlogEntry/Validate, errors: ', errors);
  };

  const formIsValid = (fieldValues = changedData) => {
    const isValid = Object.values(errors).every((x) => x === '');

    if (debug) console.log('Blogs/formIsValid: ', isValid);
    return isValid;
  };

  return {
    onChangeBlog,
    formIsValid,
    // saveFormData,
    // delBlogEntry,
    validate,
    clickSaveButton,
    selectBlog,
    disselectBlog,
    editData,
    entryData,
    changedData,
    errors,
  };
};

// BLOGS
/*   const newEvent = () => {
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
  }; */

/*   const handleFormSubmit = (seminar) => {
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
  }; */

/*   const onChangeDate = (date) => {
    if (debug) console.log('Events/onChangeDate: ', date);
    const obj = {
      ...changedData,
      date: format(new Date(date), 'yyyy-MM-dd'),
    };
    setChangedData(obj);
  };
 */
