import styled from 'styled-components';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalCompL1Datenschutz from './ModalCompL1Datenschutz';
import useGraphQLQuery from '../../hooks/useGraphQLQuery';
import '../animation.css';

export interface IContentDatenschutz {
  title: string;
  datenschutz: {
    id: number;
    translations: {
      datenschutz: string;
    }[];
  };
}

export default function ModalDatenschutz({ lang }: { lang: string }) {
  // Debugging
  const debug = true;

  const query = `query {
    content_datenschutz {
      id
      translations (filter: {languages_code: {code: {_eq: "${lang}"}}}) {
        datenschutz
      }
  }
  }`;

  const contentDatenschutz = useGraphQLQuery(query);

  const configNav = {
    upDown: 0,
    pagItems: 4,
    navItems: [],
  };

  const configContent: IContentDatenschutz = {
    title: 'Datenschutz',
    datenschutz: contentDatenschutz?.content_datenschutz[0],
  };

  if (debug) console.log('ModalDatenschutz/Results', contentDatenschutz);

  return (
    <>
      <div
        className="modal fade"
        id="idModalDatenschutz"
        tabIndex={-1}
        aria-labelledby="ModalDatenschutzLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <ModalDialog
          className="modal-dialog d-flex flex-row-reverse align-items-center"
          id="modalDialog"
        >
          <div className="modal-content">
            <div className="modal-row">
              <ModalInNavigation config={configNav} />
              {/* eslint-disable-next-line */}
              <ModalCompL1Datenschutz content={configContent} />
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
  height: calc(100vh);
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
    }
  }
`;
