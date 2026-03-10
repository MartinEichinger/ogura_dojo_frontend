import styled, { ThemeContext } from 'styled-components';
import { useContext, useEffect } from 'react';
import { clickUpDown, nextItem, onMount } from '../../helper/navigation-helper';
import useGraphQLQuery from '../../hooks/useGraphQLQuery';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import CompTxtStripTxt from '../CompTxtStripTxt/CompTxtStripTxt';
import '../animation.css';
import { IPage } from '../ModalPanziGong/ModalPanziGong';

export interface IContentQiGongInner {
  id: number;
  pages: IPage[];
}

export interface IContentQiGong {
  content_qigong: IContentQiGongInner[];
}

export default function ModalQiGong({ page, select }: { page: string; select: Function }) {
  const debug = true;

  const stats = {
    navItems: ['QiGong', 'Lehrer', 'Form'],
    modal: 'QiGong',
    page: page,
    allSubPages: [],
    subPage: '',
    animated: 0,
    upDown: 1,
  };
  const apdx = 'QG';

  const query = `query {
    content_qigong {
      id
      pages {
        id
        title
        subpages {
          id
          title
          pics {
            id
            directus_files_id {
              id
            }
          }
          translations {
            id
            content_item {
              id
              content
              video_item {
                video
              }
              two_column
            }
          }
        }
      }
    }
  }`;

  var contentQiGong: IContentQiGong = useGraphQLQuery(query);
  var contentQiGongPage: IContentQiGongInner[] = contentQiGong?.content_qigong;

  // destructure
  var themeContext = useContext(ThemeContext)!;

  themeContext.colors.bgTheme = themeContext.colors.bgBlue;
  themeContext.colors.bgTheme50 = themeContext.colors.bgBlue50;
  themeContext.colors.typoTheme = themeContext.colors.typoBlue;

  if (debug) console.log('ModalQiGong/render: ', contentQiGong, contentQiGongPage);

  useEffect(() => {
    onMount({ stats, apdx, select });
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <div
        className="modal fade"
        id="idModalQiGong"
        tabIndex={-1}
        aria-labelledby="ModalQiGongLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <ModalDialog
          className="modal-dialog d-flex flex-row-reverse align-items-center"
          id="modalDialog"
        >
          <div className="modal-content">
            <div className="modal-row">
              <ModalInNavigation
                clickUpDown={(dir: string) => clickUpDown(dir, stats, apdx)}
                nextItem={(button: string) => nextItem(button, stats, apdx)}
                config={stats}
                apdx={apdx}
                type={apdx}
              />
              <div className="content">
                <div className="csQiGongQG">
                  <CompTxtStripTxt content={contentQiGongPage?.[0].pages?.[0]} />
                </div>
                <div className="csLehrerQG d-none">
                  <CompTxtStripTxt content={contentQiGongPage?.[0].pages?.[1]} />
                </div>
                <div className="csFormQG d-none">
                  <CompTxtStripTxt content={contentQiGongPage?.[0].pages?.[2]} />
                </div>
              </div>
            </div>
          </div>
        </ModalDialog>
      </div>
    </>
  );
}

const ModalDialog = styled.div`
  width: 100vw;
  max-width: 1440px;
  height: 100vh;
  z-index: 1051;
  overflow: hidden;
  margin: 0 auto;

  & .modal-content {
    background-color: rgba(0, 0, 0, 0);
    border: none;

    & .modal-row {
      height: calc(100vh - 4px);
      margin: 2px;
      display: grid;
      grid-column-gap: 2px;
      grid-template-columns: 1fr 50px;
      grid-template-rows: 1fr 7fr 1fr;

      & .navItem {
        color: ${(props) => props.theme.colors.bgBlue50};

        &.active {
          color: ${(props) => props.theme.colors.typoBlue};
          border: 1px solid ${(props) => props.theme.colors.bgBlue};
        }
      }

      & .arrow {
        &.active {
          background-color: ${(props) => props.theme.colors.bgBlue};
        }
      }

      ${(props) => props.theme.breakpoints.mq[2]} {
        // bis 960 px
        grid-template-columns: 1fr 39px;
      }

      ${(props) => props.theme.breakpoints.mq[1]} {
        // bis 600 px
        grid-template-columns: 1fr 34px;
      }

      ${(props) => props.theme.breakpoints.mq[0]} {
        // bis 400px
        grid-template-columns: 1fr 29px;
      }

      & .content {
        height: 100%;
        grid-column: 1;
        grid-row: 2;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 6fr;

        & .csQiGongQG,
        .csLehrerQG,
        .csFormQG {
          grid-row: 1;
          grid-column: 1;
          display: grid;
          grid-template-columns: auto;
          grid-template-rows: 6fr;

          & .modal-strip {
            box-sizing: border-box;
            background-color: ${(props) => props.theme.colors.bgBlue};
          }
        }
      }
    }
  }
`;
