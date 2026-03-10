import styled, { ThemeContext } from 'styled-components';
import { useContext, useEffect } from 'react';
import { clickUpDown, nextItem, onMount } from '../../helper/navigation-helper';
import useGraphQLQuery from '../../hooks/useGraphQLQuery';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import CompTxtStripTxt from '../CompTxtStripTxt/CompTxtStripTxt';
import '../animation.css';

export interface IVideoItem {
  video: string;
}

export interface IPic {
  id: number;
  directus_files_id: {
    id: string;
  };
}

export interface IContentItem {
  id: number;
  content: string;
  two_column: boolean;
  video_item: IVideoItem[];
}

export interface ISubpage {
  id: number;
  title: string;
  pics: IPic[];
  translations: {
    id: number;
    content_item: IContentItem[];
  }[];
}

export interface IPage {
  id: number;
  title: string;
  subpages: ISubpage[];
}

export interface IContentPanziGong {
  content_panzigong: {
    id: number;
    pages: IPage[];
  }[];
}

export interface IStats {
  navItems: string[];
  modal: string;
  page: string;
  allSubPages: string[];
  subPage: string;
  animated: number;
  upDown: number;
}

export default function ModalPanziGong({ page, select }: { page: string; select: Function }) {
  const debug = false;

  const stats: IStats = {
    navItems: ['PanziGong', 'Lehrer', 'Form'],
    modal: 'PanziGong',
    page: page,
    allSubPages: [],
    subPage: '',
    animated: 0,
    upDown: 1,
  };
  const apdx = 'PG';

  const query = `query {
    content_panzigong {
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

  var contentPanziGong: IContentPanziGong = useGraphQLQuery(query);
  var contentPanziGongPage: IPage[] = contentPanziGong?.content_panzigong[0].pages;

  if (debug) console.log('ModalPanziGong/Results', stats, contentPanziGong);

  // destructure
  var themeContext = useContext(ThemeContext)!;

  themeContext.colors.bgTheme = themeContext.colors.bgGreen;
  themeContext.colors.bgTheme50 = themeContext.colors.bgGreen50;
  themeContext.colors.typoTheme = themeContext.colors.typoGreen;

  useEffect(() => {
    onMount({ stats, apdx, select });
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <div
        className="modal fade"
        id="idModalPanziGong"
        tabIndex={-1}
        aria-labelledby="ModalPanziGongLabel"
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
                type="PG"
              />
              <div className="content">
                <div className="csPanziGongPG">
                  {contentPanziGong && <CompTxtStripTxt content={contentPanziGongPage?.[0]} />}
                </div>
                <div className="csLehrerPG d-none">
                  {contentPanziGong && <CompTxtStripTxt content={contentPanziGongPage?.[1]} />}
                </div>
                <div className="csFormPG d-none">
                  {contentPanziGong && <CompTxtStripTxt content={contentPanziGongPage?.[2]} />}
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
        color: ${(props) => props.theme.colors.bgGreen50};

        &.active {
          color: ${(props) => props.theme.colors.typoGreen};
          border: 1px solid ${(props) => props.theme.colors.bgGreen};
        }
      }

      & .arrow {
        &.active {
          background-color: ${(props) => props.theme.colors.bgGreen};
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

        & .csPanziGongPG,
        .csLehrerPG,
        .csFormPG {
          grid-row: 1;
          grid-column: 1;
          display: grid;
          grid-template-columns: auto;
          grid-template-rows: 6fr;

          & .modal-strip {
            box-sizing: border-box;
            background-color: ${(props) => props.theme.colors.bgGreen};
          }
        }
      }
    }
  }
`;
