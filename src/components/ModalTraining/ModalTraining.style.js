import { Component } from 'react';

class ModalClassStyle extends Component {
  constructor(props) {
    super(props);
    this.mq = this.props.mq;
    this.colors = this.props.colors;
    this.debug = true;

    // Generell
    this.styleAll = {
      width: '100vw',
      maxWidth: '1440px',
      height: '100vh',
      zIndex: '1051',
      overflow: 'hidden',
      margin: '0 auto',

      '& .span_vis': {
        display: 'block',

        [this.mq[1]]: {
          display: 'none',
        },
      },

      '& .modal-content': {
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',

        '& .modal-row': {
          //width: '100%',
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
            //maxHeight: '100vh',
          },

          '& .content': {
            //position: 'relative',
            height: '100%',
            gridColumn: '1',
            gridRow: '2',
            display: 'grid',
            gridTemplateColumns: 'auto',
            gridTemplateRows: '6fr',

            '& .Training, .Wir': {
              //height: '100%',
              gridRow: '1',
              gridColumn: '1',
              display: 'grid',
              gridTemplateColumns: 'auto',
              gridTemplateRows: '6fr',

              '& .modal-col': {
                //position: 'relative',
                gridRow: '1',
                gridColumn: '1',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: '5px',
                display: 'grid',
                gridTemplateColumns: '1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr',

                '& .bg-training': {
                  gridColumn: '1 / -1',
                  gridRow: '1 / -1',
                  backgroundImage: 'url(./training_pic_1.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '5px',
                  boxShadow: 'inset 0px 25px 30px 30px white',
                  filter: 'blur(4px)',
                },

                '& h1': {
                  fontSize: 'calc(10vh)',
                  color: 'white',
                  textShadow: `0px 0px 5px ${this.colors.bgRed}`,
                  position: 'relative',
                  paddingLeft: '2vh',
                  marginBottom: '0',
                },

                '& h2': {
                  fontSize: '2vh',
                  fontWeight: 'bold',
                  color: this.colors.typoRed,
                  marginBottom: '0.5vh',
                  position: 'relative',
                  textAlign: 'center',
                  textShadow: '0 0 2px white',
                },

                '& h5': {
                  fontSize: '1.25vh',
                  fontWeight: 'bold',
                  color: this.colors.bgWhite,
                  marginBottom: '0.5vh',
                  position: 'relative',
                  textAlign: 'center',
                },

                '& p': {
                  fontSize: '1.8vh',
                  margin: '0vh 15px 0vh 0px',
                  textAlign: 'justify',
                  position: 'relative',
                  zIndex: '1',
                },
              },
            },
          },
        },
      },
    };

    // WIR
    this.styleWir = {
      '& .Wir': {
        '& .modal-col': {
          gridTemplateRows: 'auto 1fr auto 1fr auto',

          '& .bg-training': {},

          '& .big': {
            gridColumn: '1/-1',
            gridRow: '1',
            maxHeight: '20vh',
            boxSizing: 'border-box',
          },

          '& .rect': {
            gridColumn: '2/12',
            gridRow: '3',
            backgroundColor: 'rgba(255,255,255,0.7)',
            position: 'relative',
            borderRadius: '5px',
            padding: '1vh',
            margin: '1vh',
            overflow: 'auto',
            maxHeight: '28vh',
            boxSizing: 'border-box',
          },

          '& .cards': {
            gridColumn: '2/12',
            gridRow: '5',
            position: 'relative',
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: '5px',
            padding: '1vh',
            margin: '1vh',
            overflow: 'auto',
            maxHeight: '48vh',
            boxSizing: 'border-box',

            '& .body': {
              height: '320px',
              width: '250px',
              borderRadius: '5px',
              position: 'relative',
              margin: '5px',

              '& .image': {
                width: '100%',
                height: '55%',
                borderRadius: '5px',
                backgroundSize: 'cover',
                //backgroundImage: 'url(./training_pic_2.png)',
              },

              '& .text': {
                width: '100%',
                height: '42%',
                borderRadius: '5px',
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            },
          },
        },
      },
    };

    // TRAINING
    this.styleTraining = {
      '& .Training': {
        '& .modal-col': {
          gridTemplateColumns: '1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr',
          gridTemplateRows: 'auto 1fr auto 1fr auto 1fr auto 1fr auto',

          '& .bg-training': {},

          '& .big': {
            gridColumn: '1 / -1',
            gridRow: '1',
            maxHeight: 'calc(20vh - 4px)',
            boxSizing: 'border-box',
          },

          '& .circle': {
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: '125px',
            aspectRatio: '1/1',
            margin: '1vh',
            position: 'relative',
            maxHeight: '18vh',
            maxWidth: '20vw',
            boxSizing: 'border-box',
            gridColumn: '2/4',
            alignSelf: 'center',

            '&:nth-of-type(2)': {
              gridRow: '3',
            },
            '&:nth-of-type(4)': {
              gridRow: '5',
            },
            '&:nth-of-type(6)': {
              gridRow: '7',
            },
            '&:nth-of-type(8)': {
              gridRow: '9',
            },

            [this.mq[1]]: {
              // bis 600 px
              gridColumn: '1/3',
              '& p': {
                display: 'none',
              },
            },
          },

          '& .rect': {
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: '5px',
            padding: '1vh',
            margin: '1vh',
            overflow: 'auto',
            position: 'relative',
            maxHeight: '18vh',
            boxSizing: 'border-box',
            gridColumn: '4/12',

            '&:nth-of-type(3)': {
              gridRow: '3',
            },
            '&:nth-of-type(5)': {
              gridRow: '5',
            },
            '&:nth-of-type(7)': {
              gridRow: '7',
            },
            '&:nth-of-type(9)': {
              gridRow: '9',
            },

            [this.mq[1]]: {
              // bis 600 px
              gridColumn: '3/-1',
            },
          },
        },
      },
    };

    // Sum
    this.style = { ...this.styleAll, ...this.styleWir, ...this.styleTraining };

    if (this.debug) console.log('ModalTraining.style: ', this.style);
  }
}

export default ModalClassStyle;