export const useCustomStyles = ({ mq, colors }) => {
  const debug = false;

  if (debug) console.log('Events.style: ', mq, colors);

  return {
    width: '47%',
    height: '100%',
    fontFamily: 'Lato, sans-serif',
    paddingTop: '3vh',
    //overflow: 'auto',

    [mq[2]]: {
      // bis 960px
      width: '90%',
      marginBottom: '1vh',
      height: '50%',
    },
    [mq[1]]: {
      // bis 600px
      width: '95%',
    },
    [mq[0]]: {
      // bis 400px
      width: '100%',
    },

    '&.schedule': {
      borderRadius: '5px',
      backgroundColor: 'rgba(255,255,255,0.5)',

      '& .block': {
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom: '2vh',
        borderRadius: '5px',
        position: 'relative',
        cursor: 'pointer',

        '&:hover, &:active, &:focus, &.active': {
          backgroundColor: colors.bgGreen50,
        },

        '& .date': {
          marginLeft: '5%',
          width: '25%',
          //backgroundColor: colors.bgRed,
        },

        '& .details': {
          height: '100%',
          width: '70%',
          padding: '1vh',

          '& h3': {
            fontWeight: 'bold',
            // 16px to 24px
            fontSize: '1.5rem',

            [mq[3]]: {
              // bis 1280
              fontSize: 'calc(1rem + 0.625vw)',
            },
          },

          '& h4': {
            fontWeight: 'bold',
            margin: '1vh',
            // 10px to 12px
            fontSize: '0.75rem',

            [mq[3]]: {
              // bis 1280
              fontSize: 'calc(0.625rem + 0.15625vw)',
            },
          },
        },

        '& h1': {
          // 56px to 72px
          fontSize: '4.5rem',
          lineHeight: '3.75rem',

          [mq[3]]: {
            // bis 1280
            fontSize: 'calc(3.25rem + 1.5625vw)',
            lineHeight: 'calc(2.75rem + 1.25vw)',
          },
          color: 'rgba(255,255,255,1)',
          marginBottom: '0px',
          padding: '1vh 1vh 0.25vh 1vh',
          textAlign: 'center',
          textShadow: 'none',
        },
        '& h2': {
          // 32px to 48px
          fontSize: '3rem',
          lineHeight: '2.5rem',

          [mq[3]]: {
            // bis 1280
            fontSize: 'calc(2rem + 1.25vw)',
            lineHeight: 'calc(1.75rem + 1.25vw)',
          },
          color: 'rgba(255,255,255,1)',
          marginBottom: '0px',
          padding: '0.25vh 1vh 1vh 1vh',
          textAlign: 'center',
        },
      },

      '& button': {
        position: 'absolute',
        bottom: '3.5vh',
        left: '3.5vh',
      },
    },

    '&.detail': {
      borderRadius: '5px',
      backgroundColor: 'rgba(255,255,255,0.5)',
      padding: '2vh',

      '& .invitation': {
        marginTop: '16px',
        marginBottom: '32px',

        '& p': {
          marginBottom: '0px',
          marginRight: '16px',
        },
      },

      '& h3': {
        textDecoration: 'underline',
        margin: '1vh 0vh',
      },

      '& i': {
        cursor: 'pointer',
      },

      '& button': {
        cursor: 'pointer',
        borderRadius: '5px',
        padding: '3px',
        '&.red': {
          border: `1px solid ${colors.bgRed}`,
          color: 'white',
        },
        '&.green': {
          border: `1px solid ${colors.bgGreen}`,
          color: 'white',
        },
      },
    },
  };
};
