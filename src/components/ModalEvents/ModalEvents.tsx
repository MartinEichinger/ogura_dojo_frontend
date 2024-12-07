/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import useGraphQLQuery from '../../hooks/useGraphQLQuery';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalCompL1Events from './ModalCompL1Events';
import { clickUpDown, nextItem } from '../../helper/navigation-helper';
import '../animation.css';

export default function ModalEvents({ colors, mq, lang }: { colors: any; mq: string; lang: string }) {
  const debug = false;
  const style: any = {
    width: '100vw',
    maxWidth: '1440px',
    height: 'calc(100vh)',
    zIndex: '1051',
    overflow: 'hidden',
    margin: '0 auto',

    '& .modal-content': {
      backgroundColor: 'rgba(0,0,0,0)',
      border: 'none',

      '& .modal-row': {
        height: 'calc(100vh - 4px)',
        margin: '2px',
        display: 'grid',
        gridColumnGap: '2px',
        gridTemplateColumns: '1fr 50px',
        gridTemplateRows: '1fr 7fr 1fr',

        [mq[2]]: {
          // bis 960 px
          gridTemplateColumns: '1fr 39px',
        },

        [mq[1]]: {
          // bis 600 px
          gridTemplateColumns: '1fr 34px',
        },

        [mq[0]]: {
          // bis 400px
          gridTemplateColumns: '1fr 29px',
        },

        '& .inNavigation': {
          gridColumn: '2',
          gridRow: '2',
        },

        '& .imageBg': {
          gridColumn: '1 / -1',
          gridRow: '1 / -1',
          backgroundImage: 'url(./main_panzigong.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          borderRadius: '5px',
          boxShadow: 'inset 0px 25px 30px 30px white',
          filter: 'blur(4px)',
        },

        '& .modal-col': {
          gridRow: '2',
          gridColumn: '1',
          height: '100%',
          backgroundColor: 'white',
          borderRadius: '5px',
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          gridTemplateColumns: '1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr',
          [mq[2]]: {
            // bis 960 px
            gridTemplateColumns: '0.5fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.5fr',
          },
          [mq[1]]: {
            // bis 600 px
            gridTemplateColumns: '0.2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.2fr',
          },
          [mq[0]]: {
            // bis 400px
            gridTemplateColumns: '0.1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.1fr',
          },

          '& .heading': {
            gridRow: '1',
            gridColumn: '2/-1',
            maxHeight: 'calc(20vh-4px)',
            boxSizing: 'border-box',

            '& h1': {
              fontSize: 'calc(5rem + 2.5vw)',
              marginBottom: '1vh',
              color: colors.bgGrey,
              textShadow: `2px 0 0 ${colors.bgRed}, 0 2px 0 ${colors.bgRed}, -2px 0 0 ${colors.bgRed}, 0 -2px 0 ${colors.bgRed}`,
              position: 'relative',

              [mq[0]]: {
                fontSize: '8vh',
              },
            },
          },

          '& .tables': {
            gridRow: '2',
            gridColumn: '2/12',
            maxHeight: 'calc(80vh - 4px)',
            position: 'relative',
          },
        },
      },
    },
  };
  const configNav = {
    upDown: 0,
    pagItems: 4,
    navItems: [],
  };
  const content = {
    title: 'Termine',
  };

  const query = `query {
    event_data {
        translations (filter: {languages_code: {code: {_eq: "${lang}"}}}) {
            seminar_title
        }
        seminar_date
        seminar_location
        seminar_organiser
        invitation_to_tender {
            id
        }
    }
  }`;

  const contentEvents = useGraphQLQuery(query);
  if (debug) console.log('ModalEvents/Results', contentEvents);

  return (
    <>
      <div
        className="modal fade"
        id="idModalEvents"
        tabIndex={-1}
        aria-labelledby="ModalEventsLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div
          className="modal-dialog d-flex flex-row-reverse align-items-center"
          id="modalDialog"
          css={style}
        >
          <div className="modal-content">
            <div className="modal-row">
              <ModalInNavigation
                clickUpDown={clickUpDown}
                nextItem={nextItem}
                colors={colors}
                config={configNav}
                mq={mq}
                apdx
                type
              />
              {/* eslint-disable-next-line */}
              {contentEvents && (
                <ModalCompL1Events
                  colors={colors}
                  content={content}
                  mq={mq}
                  events={contentEvents.event_data}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
