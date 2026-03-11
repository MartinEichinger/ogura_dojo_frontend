import styled from 'styled-components';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalCompL1Lieferbedingungen from './ModalCompL1Lieferbedingungen';
import useGraphQLQuery from '../../hooks/useGraphQLQuery';
import '../animation.css';

export interface IContentLieferbedingungen {
  title: string;
  lieferbedingungen: {
    id: number;
    translations: {
      lieferbedingungen: string;
    }[];
  };
}

export default function ModalLieferbedingungen({ lang }: { lang: string }) {
  // Debugging
  const debug = false;

  const query = `query {
    content_lieferbedingungen {
      id
      translations (filter: {languages_code: {code: {_eq: "${lang}"}}}) {
        lieferbedingungen
      }
  }
  }`;

  const contentLieferbedingungen = useGraphQLQuery(query);

  const configNav = {
    upDown: 0,
    pagItems: 4,
    navItems: [],
  };

  const configContent: IContentLieferbedingungen = {
    title: 'Lieferbedingungen',
    lieferbedingungen: contentLieferbedingungen?.content_lieferbedingungen[0],
  };

  if (debug) console.log('ModalLieferbedingungen/Results', contentLieferbedingungen);

  return (
    <>
      <div
        className="modal fade"
        id="idModalLieferbedingungen"
        tabIndex={-1}
        aria-labelledby="ModalLieferbedingungenLabel"
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
              <ModalCompL1Lieferbedingungen content={configContent} />
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
