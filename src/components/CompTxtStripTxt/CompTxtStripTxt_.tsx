import React from 'react';
import { IContentPage } from '../ModalPanziGong/ModalPanziGong';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const CompTxtStripTxt = ({ content, clickLeftRight }: { content: any; clickLeftRight?: any }) => {
  var debug = false;

  if (debug) console.log('CompTxtStripTxt__/content: ', content?.subpages);
  const contentNav = content?.subpages?.length > 1;
  return (
    <>
      {content?.subpages?.map((subpage: any, i: number) => {
        var two_column = subpage?.translations?.[0]?.content_item[1].two_column;
        if (debug) console.log('CompTxtStripTxt__/subpage', content.title, subpage.title, two_column);
        var contentText: string[] = [];
        contentText[0] = subpage?.translations?.[0]?.content_item[0].content;
        contentText[1] = subpage?.translations?.[0]?.content_item[1].content;
        var video_1_length = subpage?.translations?.[0]?.content_item[0].video_item?.length;
        var video_2_length = subpage?.translations?.[0]?.content_item[1].video_item?.length;

        if (video_1_length > 0 || video_2_length > 0) {
          // eslint-disable-next-line array-callback-return
          subpage?.translations?.[0]?.content_item.map((cont_item: any, i: number) => {
            const vids = cont_item?.video_item;
            console.log('vids: ', vids);
            // eslint-disable-next-line array-callback-return
            vids?.map((vid: any, j: number) => {
              console.log('video: ', vid, j);
              console.log('vide_text', contentText[i]);
              const replacement = `
              <iframe
                title="Panzi Gong Video"
                src='${vid.video}'
                allowFullScreen={true}
                key={${j}}
              ></iframe>
            `;
              contentText[i] = contentText[i].replace(`{video_${j}}`, replacement);
            });
          });
        }
        console.log('CompTxtStrpTxt/render: ', contentText);
        return (
          <div
            className={i > 0 ? subpage.title + ' modal-col d-out' : subpage.title + ' modal-col'}
            key={i}
          >
            <div className="modal-up d-flex flex-column flex-column-reverse flex-md-row align-items-end scroll_">
              <div
                className="d-flex flex-column w-100 w-md-50"
                dangerouslySetInnerHTML={{ __html: contentText[0] }}
              />
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
              className={
                two_column
                  ? 'modal-down d-flex flex-column flex-md-row scroll_'
                  : 'modal-down d-flex flex-column'
              }
              dangerouslySetInnerHTML={{ __html: contentText[1] }}
            />
          </div>
        );
      })}
    </>
  );
};

export default CompTxtStripTxt;
