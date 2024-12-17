import React from 'react';
import { IContentPage } from '../ModalPanziGong/ModalPanziGong';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const CompTxtStripTxt = ({ content, clickLeftRight }: { content: any; clickLeftRight?: any }) => {
  var debug = true;

  if (debug) console.log('CompTxtStripTxt__/content: ', content?.subpages);
  const contentNav = content?.subpages?.length > 1;

  return (
    <>
      {content?.subpages?.map((subpage: any, i: number) => {
        if (debug) console.log('CompTxtStripTxt__/subpage', content.title, subpage.title);

        return (
          <div
            className={i > 0 ? subpage.title + ' modal-col d-out' : subpage.title + ' modal-col'}
            key={i}
          >
            <div className="modal-up d-flex flex-column flex-column-reverse flex-md-row align-items-end scroll_">
              <div
                className="d-flex flex-column w-100 w-md-50"
                dangerouslySetInnerHTML={{ __html: subpage?.translations?.[0]?.content_item[0].content }}
              />
              {subpage?.translations?.[0]?.content_item[0].video && (
                <div className="videos d-flex flex-row justify-content-center align-items-center w-100 w-md-50">
                  <iframe
                    title="Panzi Gong Video"
                    src={subpage?.translations?.[0]?.content_item[0].video}
                    allowFullScreen={true}
                    key={i}
                  />
                </div>
              )}
            </div>

            <div
              className={
                contentNav
                  ? 'modal-strip d-flex flex-row justify-content-around align-items-center'
                  : 'modal-strip d-flex flex-row justify-content-around align-items-center'
              }
            >
              {contentNav && (
                <div className="navLeft" onClick={(e) => clickLeftRight('left')}>
                  <IconChevronLeft size={36} color={'white'} />
                </div>
              )}
              {subpage.pics.length && (
                <div className="pics d-flex flex-row justify-content-center align-items-center">
                  {subpage.pics.map((pic: any, i: any) => {
                    return (
                      <div
                        className={'img'}
                        key={i}
                        style={{
                          backgroundImage: `url('https://ogura-dojo-cms.directus.app/assets/${pic.directus_files_id.id}')`,
                          backgroundPosition: '50% 0%',
                        }}
                      ></div>
                    );
                  })}
                </div>
              )}
              {contentNav && (
                <div className="navRight" onClick={(e) => clickLeftRight('right')}>
                  <IconChevronRight size={36} color={'white'} />
                </div>
              )}
            </div>

            <div
              className="modal-down d-flex flex-column"
              dangerouslySetInnerHTML={{ __html: subpage?.translations?.[0]?.content_item[1].content }}
            />
          </div>
        );
      })}
    </>
  );
};

export default CompTxtStripTxt;
