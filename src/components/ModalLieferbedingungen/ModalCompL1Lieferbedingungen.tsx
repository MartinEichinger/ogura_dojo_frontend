import styled from 'styled-components';
import { IContentLieferbedingungen } from './ModalLieferbedingungen';

const ModalCompL1Lieferbedingungen = ({ content }: { content: IContentLieferbedingungen }) => {
  const debug = false;

  if (debug) console.log('ModalComp_L1_Lieferbedingungen: ', content);

  return (
    <ModalCol className="modal-col">
      <div className="imageBg"></div>
      <h1 className="bigger">{content.title}</h1>
      <div className="impressum scroll_">
        <div
          dangerouslySetInnerHTML={{
            __html: content?.lieferbedingungen?.translations?.[0]?.lieferbedingungen,
          }}
        />
      </div>
    </ModalCol>
  );
};

const ModalCol = styled.div`
  grid-row: 2;
  grid-column: 1;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;

  ${(props) => props.theme.breakpoints.mq[2]} {
    // bis 960 px
    grid-template-columns: 0.5fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.5fr;
  }

  ${(props) => props.theme.breakpoints.mq[1]} {
    // bis 600 px
    grid-template-columns: 0.2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.2fr;
  }

  ${(props) => props.theme.breakpoints.mq[0]} {
    // bis 400px
    grid-template-columns: 0.1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.1fr;
  }

  & .imageBg {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    background-image: url(./main_panzigong.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    box-shadow: inset 0px 25px 30px 30px white;
    filter: blur(4px);
  }

  & .bigger {
    grid-row: 1;
    grid-column: 1/-1;
    max-height: calc(20vh - 4px);
    box-sizing: border-box;
    margin: 0;
    color: ${(props) => props.theme.colors.bgGrey};
    textshadow:
      2px 0 0 ${(props) => props.theme.colors.bgRed},
      0 2px 0 ${(props) => props.theme.colors.bgRed},
      -2px 0 0 ${(props) => props.theme.colors.bgRed},
      0 -2px 0 ${(props) => props.theme.colors.bgRed};
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 2vh;
    padding-left: 2vw;
  }

  & .impressum {
    grid-row: 3;
    grid-column: 2/12;
    max-height: calc(80vh - 4px);
    position: relative;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.bgWhite50};
    padding: 1vh;
    margin-bottom: 1vh;
    border-radius: 5px;

    & h2 {
      margin-top: 1vh;
      font-size: 36px;

      ${(props) => props.theme.breakpoints.mq[2]} {
        // bis 960 px
        font-size: 34px;
      }

      ${(props) => props.theme.breakpoints.mq[1]} {
        // bis 600 px
        font-size: 32px;
      }

      ${(props) => props.theme.breakpoints.mq[0]} {
        // bis 400px
        font-size: 28px;
      }
    }

    & h3 {
      font-size: 30px;
      margin: 1vh 0vh;

      ${(props) => props.theme.breakpoints.mq[2]} {
        // bis 960 px
        font-size: 28px;
      }

      ${(props) => props.theme.breakpoints.mq[1]} {
        // bis 600 px
        font-size: 26px;
      }

      ${(props) => props.theme.breakpoints.mq[0]} {
        // bis 400px
        font-size: 24px;
      }
    }

    & p {
      margin: 0;
      font-size: 20px;

      ${(props) => props.theme.breakpoints.mq[2]} {
        // bis 960 px
        font-size: 18px;
      }

      ${(props) => props.theme.breakpoints.mq[1]} {
        // bis 600 px
        font-size: 16px;
      }

      ${(props) => props.theme.breakpoints.mq[0]} {
        // bis 400px
        font-size: 16px;
      }
    }
  }
`;

export default ModalCompL1Lieferbedingungen;
