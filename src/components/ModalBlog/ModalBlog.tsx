import styled from 'styled-components';
import { useState } from 'react';
import useGraphQLQuery from '../../hooks/useGraphQLQuery';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalCompL1Blog from './ModalCompL1Blog';
import '../animation.css';

interface IBlogContent {
  blog_data: IBlogData[];
}

export interface IBlogData {
  id: number;
  picture: {
    id: string;
  };
  picture_position: string;
  file: {
    id: string;
  };
  video: string;
  website: string;
  translations: {
    category: string;
    content: string;
    date: string;
    headline: string;
    languages_code: {
      code: string;
    };
    tags: string;
  }[];
}

export interface IBlogNav {
  filterProps: string[];
  filterState: string;
  title: string;
  setFilterState: Function;
}

export default function ModalBlog({ lang }: { lang: string }) {
  const debug = false;

  const [filterState, setFilterState] = useState('Alle');

  const configNav = {
    upDown: 0,
    pagItems: 4,
    navItems: [],
  };

  const configBlogNav: IBlogNav = {
    title: 'Blog',
    filterProps: ['Alle', 'Tengu', 'Taiji/Qigong', 'Bücher'],
    filterState: filterState,
    setFilterState: setFilterState,
  };

  const query = `query {
    blog_data {
        id
        picture {
          id
        }
        picture_position
        file {
          id
        }
        website
        video
        translations (filter: {languages_code: {code: {_eq: "${lang}"}}}) {
            languages_code {
                code
            }
            date
            tags
            category
            headline
            content
        }
    }
  }`;

  const contentBlog: IBlogContent = useGraphQLQuery(query);
  if (debug) console.log('ModalBlog/Results', contentBlog);

  return (
    <div
      className="modal fade"
      id="idModalBlog"
      tabIndex={-1}
      aria-labelledby="ModalBlogLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <ModalDialog className="modal-dialog d-flex flex-row-reverse align-items-center" id="modalDialog">
        <div className="modal-content">
          <div className="modal-row">
            <ModalInNavigation config={configNav} />
            {contentBlog && (
              <ModalCompL1Blog configBlogNav={configBlogNav} blogs={contentBlog.blog_data} />
            )}
          </div>
        </div>
      </ModalDialog>
    </div>
  );
}

const ModalDialog = styled.div`
  width: 100vw;
  max-width: 1440px;
  height: calc(100vh);
  z-index: 1051;
  overflow: hidden;
  margin: 0 auto;

  & .modal-content {
    background-color: rgba(0,0,0,0);
    border: none;

    & .modal-row {
      height: calc(100vh - 4px);
      margin: 2px;
      display: grid;
      grid-column-gap: 2px;
      grid-template-columns: 1fr 50px;
      grid-template-rows: 1fr 7fr 1fr;

      ${(props) => props.theme.breakpoints.mq[2]} {
        // bis 960 px
        grid-template-columns: 1fr 39px;
      },

      ${(props) => props.theme.breakpoints.mq[1]} {
        // bis 600 px
        grid-template-columns: 1fr 34px;
      },

      ${(props) => props.theme.breakpoints.mq[0]} {
        // bis 400px
        grid-template-columns: 1fr 29px;
      },
    },
  },
`;
