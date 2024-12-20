import { Component } from 'react';

class ModalClassBasis extends Component {
  constructor(props) {
    super(props);

    this.mq = this.props.mq;
    this.colors = this.props.colors;

    this.style = {
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

          [this.mq[2]]: {
            // bis 960 px
            gridTemplateColumns: '1fr 39px',
          },

          [this.mq[1]]: {
            // bis 600 px
            gridTemplateColumns: '1fr 34px',
          },

          [this.mq[0]]: {
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
            [this.mq[2]]: {
              // bis 960 px
              gridTemplateColumns: '0.5fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.5fr',
            },
            [this.mq[1]]: {
              // bis 600 px
              gridTemplateColumns: '0.2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.2fr',
            },
            [this.mq[0]]: {
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
                color: this.colors.bgGrey,
                textShadow: `2px 0 0 ${this.colors.bgRed}, 0 2px 0 ${this.colors.bgRed}, -2px 0 0 ${this.colors.bgRed}, 0 -2px 0 ${this.colors.bgRed}`,
                position: 'relative',
                //paddingTop: '2vh',
                //paddingLeft: '2vh',

                [this.mq[0]]: {
                  fontSize: '8vh',
                },
              },
            },

            '& .tables': {
              gridRow: '3',
              gridColumn: '2/12',
              maxHeight: 'calc(80vh - 4px)',
              position: 'relative',
            },
          },
        },
      },
    };
  }
}

export default ModalClassBasis;
