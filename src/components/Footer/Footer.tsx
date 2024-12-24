/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import { IColors } from '../../App';

const Footer = ({ colors, select, mq }: { colors: IColors; select: Function; mq: string[] }) => {
  // DEBUG
  const debug = false;

  // STYLE
  const styleFooter = {
    color: colors.typoGrey,
    fontFamiliy: 'Lato, cursive',
    padding: '20px',
    zIndex: '1000',
    minWidth: '390px',
    backgroundColor: colors.bgGrey,

    [mq[0]]: {
      padding: '5px',
    },

    '& .container-fluid': {
      padding: '0px',

      '& .content': {
        '& .body': {
          width: '75%',

          [mq[2]]: {
            width: '80%',
          },

          [mq[1]]: {
            width: '90%',
          },

          [mq[0]]: {
            width: '100%',
          },

          '& img': {
            marginTop: '15px',
            marginRight: '15px',
            height: '80px',
          },
        },
      },
    },

    '& i': {
      width: '48px',
      height: '48px',
    },

    '& .column': {
      marginTop: '15px',
      marginRight: '25px',
    },

    '& button': {
      backgroundColor: 'rgba(0,0,0,0)',
      border: 'none',
      outline: 'none',
    },
  };

  const contentFooter = {
    heading: 'Ogura Dojo - Tengu Ryu Karate, Panzi Gong, Taiji Quan, Qigong im Herzen des Chiemgaus',
    'link-group': [
      {
        heading: 'Ogura Dojo',
        items: [
          {
            title: 'Training',
            target: '#idModalTraining',
            link: () => selectpage('Training', 'pageTraining'),
          },
          { title: 'Wir', target: '#idModalTraining', link: () => selectpage('Wir', 'pageTraining') },
          { title: 'Blog', target: '#idModalBlog' },
          { title: 'Termine', target: '#idModalEvents' },
        ],
      },
      {
        heading: 'Tengu Ryu',
        items: [
          {
            title: 'Tengu Ryu',
            target: '#idModalKarate',
            link: () => selectpage('TenguRyu', 'pageKarate'),
          },
          { title: 'Lehrer', target: '#idModalKarate', link: () => selectpage('Lehrer', 'pageKarate') },
          {
            title: 'Centre de Recherche Budo',
            target: 'url',
            link: () => selectpage('http://tengu.fr/', 'url'),
          },
        ],
      },
      {
        heading: 'Panzi Gong',
        items: [
          {
            title: 'Panzi Gong',
            target: '#idModalPanziGong',
            link: () => selectpage('PanziGong', 'pagePanziGong'),
          },
          {
            title: 'Lehrer',
            target: '#idModalPanziGong',
            link: () => selectpage('Lehrer', 'pagePanziGong'),
          },
          {
            title: 'Form',
            target: '#idModalPanziGong',
            link: () => selectpage('Form', 'pagePanziGong'),
          },
        ],
      },
      /*       {
        heading: 'Taiji Quan',
        items: [{ title: '- leer -' }],
      }, */
      {
        heading: 'Qi Gong',
        items: [
          {
            title: 'Qi Gong',
            target: '#idModalQiGong',
            link: () => selectpage('QiGong', 'pageQiGong'),
          },
          {
            title: 'Lehrer',
            target: '#idModalQiGong',
            link: () => selectpage('Lehrer', 'pageQiGong'),
          },
          {
            title: 'Form',
            target: '#idModalQiGong',
            link: () => selectpage('Form', 'pageQiGong'),
          },
        ],
      },
      {
        heading: 'Allgemein',
        items: [
          { title: 'Impressum', target: '#idModalImpressum' },
          {
            title: 'Login',
            target: 'url',
            link: () => selectpage('https://ogura-dojo-cms.directus.app/', 'url'),
          },
        ],
      },
    ],
  };

  const selectpage = (page: string, param: string) => {
    if (debug) console.log('Footer/selectpage', page);
    if (param === 'url') {
      window.open(page, '_blank');
    } else {
      select(param, page);
    }
  };

  return (
    <footer className="Footer fixed-bottom mt-auto py-3" css={styleFooter}>
      <div className="container-fluid">
        <div className="content d-flex flex-column align-items-center">
          <h2>{contentFooter.heading}</h2>
          <div className="body d-flex flex-row justify-content-around">
            <a href="https://www.tustraunreut.de/" target="_blank" rel="noreferrer">
              <img src="./TusTraunreutLogo.avif" alt="" />
            </a>
            {contentFooter['link-group'].map((entry, i) => {
              return (
                <div className="column d-flex flex-column align-items-start" key={i}>
                  <h3>{entry.heading}</h3>
                  {entry.items.map((item, i) => {
                    return (
                      <button
                        className="small"
                        data-bs-toggle={item.target !== 'url' ? 'modal' : null}
                        data-bs-target={item.target}
                        onClick={item.link}
                        key={i}
                      >
                        {item.title}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;