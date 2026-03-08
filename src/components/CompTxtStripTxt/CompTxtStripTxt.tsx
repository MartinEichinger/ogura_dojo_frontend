import styled from 'styled-components';
import { IPage, ISubpage, IContentItem, IPic, IVideoItem } from '../ModalPanziGong/ModalPanziGong';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const backendPath = process.env.REACT_APP_BACKEND_PATH!;

const CompTxtStripTxt = ({ content, clickLeftRight }: { content: IPage; clickLeftRight?: Function }) => {
  var debug = false;

  if (debug) console.log('CompTxtStripTxt__/content: ', content?.subpages);
  const contentNav = content?.subpages?.length > 1;
  return (
    <>
      {content?.subpages?.map((subpage: ISubpage, i: number) => {
        var two_column = subpage?.translations?.[0]?.content_item[1].two_column;
        if (debug) console.log('CompTxtStripTxt__/subpage', content.title, subpage.title, two_column);
        var contentText: string[] = [];
        contentText[0] = subpage?.translations?.[0]?.content_item[0].content;
        contentText[1] = subpage?.translations?.[0]?.content_item[1].content;
        var video_1_length = subpage?.translations?.[0]?.content_item[0].video_item?.length;
        var video_2_length = subpage?.translations?.[0]?.content_item[1].video_item?.length;

        if (video_1_length > 0 || video_2_length > 0) {
          // eslint-disable-next-line array-callback-return
          subpage?.translations?.[0]?.content_item.map((cont_item: IContentItem, i: number) => {
            const vids = cont_item?.video_item;
            // eslint-disable-next-line array-callback-return
            vids?.map((vid: IVideoItem, j: number) => {
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
        return (
          <ModalCol
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
                <NavLeftRight
                  className="navLeft"
                  onClick={clickLeftRight && (() => clickLeftRight('left'))}
                >
                  <IconChevronLeft size={36} color={'white'} />
                </NavLeftRight>
              )}
              {subpage.pics.length && (
                <div className="pics d-flex flex-row justify-content-center align-items-center">
                  {subpage.pics.map((pic: IPic, i: number) => {
                    return (
                      <div
                        className={'img'}
                        key={i}
                        style={{
                          backgroundImage: `url('${backendPath}/assets/${pic.directus_files_id.id}')`,
                          backgroundPosition: '50% 0%',
                        }}
                      ></div>
                    );
                  })}
                </div>
              )}
              {contentNav && (
                <NavLeftRight
                  className="navRight"
                  onClick={clickLeftRight && (() => clickLeftRight('right'))}
                >
                  <IconChevronRight size={36} color={'white'} />
                </NavLeftRight>
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
          </ModalCol>
        );
      })}
    </>
  );
};

const ModalCol = styled.div`
  grid-row: 1;
  grid-column: 1;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1.5vh minmax(17vh, 1fr) 1.5vh auto;

  &.d-out {
    transform: translateX(-2000px);
    opacity: 0;
  }

  & .bg-heading {
    position: absolute;
    z-index: 0;
    font-size: 15vh;
    color: ${(props) => props.theme.colors.bgGrey};
  }

  & h1 {
    margin-bottom: 1vh;
    position: relative;
    z-index: 1;
  }

  & h2 {
    margin-bottom: 2vh;
    position: relative;
    z-index: 1;
  }

  & p {
    margin: 0vh 15px 0vh 0px;
    text-align: justify;
    position: relative;
    z-index: 1;
  }

  & .modal-up {
    box-sizing: border-box;
    max-height: calc(40vh - 2px);
    background-color: white;
    border-radius: 5px;
    padding: 2vh 0.5vh 2vh 2vh;
    grid-row: 1;

    & .videos {
      position: relative;
      padding-bottom: 25%;
      height: 0;
      max-height: 36vh;

      ${(props) => props.theme.breakpoints.mq[2]} {
        padding-bottom: 56.25%;
      }

      & iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 36vh;
      }
    }
  }

  & .modal-strip {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.bgRed};
    margin: 5px 0px;
    grid-row: 3;
    overflow: hidden;

    & .pics {
      height: 100%;
      overflow: hidden;

      & .img {
        height: calc(100% - 2vh);
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0px 0.5vh;
        width: 330px;
      }
    }
  }

  & .modal-down {
    box-sizing: border-box;
    max-height: calc(40vh - 2px);
    background-color: white;
    border-radius: 5px;
    padding: 2vh 0.5vh 2vh 2vh;
    grid-row: 5;

    & .vids {
      height: 400px;

      ${(props) => props.theme.breakpoints.mq[3]} {
        // bis 1280 px
        height: 285px;
      }

      & iframe {
        top: 0;
        left: 0;
        width: 550px;
        height: 100%;
        max-height: 36vh;
        margin: 0px 25px 25px 0px;

        ${(props) => props.theme.breakpoints.mq[3]} {
          // bis 1280 px
          width: 500px;
        }

        ${(props) => props.theme.breakpoints.mq[2]} {
          // bis 960 px
          width: 400px;
        }

        ${(props) => props.theme.breakpoints.mq[1]} {
          // bis 600 px
          width: 400px;
        }

        ${(props) => props.theme.breakpoints.mq[0]} {
          // bis 400px
          width: 300px;
        }
      }
    }
  }
`;

const NavLeftRight = styled.div`
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    & svg {
      stroke: rgba(200, 200, 200, 1);
    }
  }
`;

export default CompTxtStripTxt;
