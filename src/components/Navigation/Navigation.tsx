import styled from 'styled-components';
import '../animation.css';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import Bookshop from '../Bookshop/Bookshop';

export default function Navigation({ select }: { select: Function }) {
  const debug = false;
  let navCardWidth = 'calc(100vw - 4px)';

  const [state, setState] = useState({
    viewWidth: 1600,
    width: 1280,
    height: 300,
  });

  useEffect(() => {
    if (debug) console.log('Navigation/compDidMount');
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    /* eslint-disable */
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      document.querySelector('.navbar')!.classList.add('slide-in-top');
      document.querySelector('.navbar')!.classList.remove('slide-out-top', 'invisible');
      document.querySelector('.navbarCard')!.classList.add('slide-out-top');
      document.querySelector('.navbarCard')!.classList.remove('slide-in-top');
    } else {
      document.querySelector('.navbar')!.classList.remove('slide-in-top');
      document.querySelector('.navbar')!.classList.add('slide-out-top');
      document.querySelector('.navbarCard')!.classList.remove('slide-out-top');
      document.querySelector('.navbarCard')!.classList.add('slide-in-top');
    }
  };

  const updateDimensions = () => {
    const app = document.querySelector<HTMLElement>('.App')!;
    setState({
      viewWidth: app.offsetWidth,
      width: document.querySelector<HTMLElement>('.Cards')!.offsetWidth,
      height: document.querySelector<HTMLElement>('.navbarCard')!.offsetHeight,
    });
  };

  const updateHx = () => {
    if (state.viewWidth > 1280) {
      navCardWidth = `${state.viewWidth - 40}px`;
    } else if (state.viewWidth > 600) {
      navCardWidth = `${state.viewWidth - 40}px`;
    } else if (state.viewWidth > 400) {
      navCardWidth = `${state.viewWidth - 20}px`;
    } else if (state.viewWidth <= 400) {
      navCardWidth = `${state.viewWidth}px`;
    }

    /*     navCardMarginLeft = state.viewWidth > 1320 ? `${(state.viewWidth - 1280) / 2}px` : '20px';
    navCardMarginRight = state.viewWidth > 1320 ? `${(state.viewWidth - 1280) / 2}px` : '20px'; */
  };

  const selectpage = (page: string) => {
    if (debug) console.log('Navigation/selectpage', page);
    select('pageTraining', page);
  };

  updateHx();

  return (
    <React.Fragment>
      <NavBar className="navbar navbar-dark fixed-top invisible d-flex flex-column">
        <div className="block d-flex flex-row justify-content-center">
          <a href="http://www.tengu.fr" target="_blank" rel="noreferrer">
            {/* <img src="./OguraDojoLogo.png" alt="" /> */}
          </a>
          <div className="center d-flex flex-column justify-content-center">
            <h1>Ogura Dojo</h1>
            <h3>Karate, Panzi Gong, Taiji, Qigong im Herzen des Chiemgaus</h3>
          </div>
        </div>
      </NavBar>

      <NavBarCard className="navbarCard slide-in-top" state={state} navCardWidth={navCardWidth}>
        <div className="d-flex flex-row ">
          <img className="align-self-center" src="./OguraDojoLogo.png" alt="" />
          <hr />
          <div className="text d-flex flex-column justify-content-around">
            <h1 className="title">Willkommen im Ogura Dojo</h1>
            <h2>Tengu Ryu Karate, Panzi Gong, Taiji Quan, Qigong</h2>
            <div className="btnNav d-flex flex-row justify-content-around flex-wrap">
              <button
                data-bs-toggle="modal"
                data-bs-target="#idModalTraining"
                onClick={() => selectpage('Training')}
              >
                Training
              </button>
              <button
                data-bs-toggle="modal"
                data-bs-target="#idModalTraining"
                onClick={() => selectpage('Wir')}
              >
                Wir
              </button>
              <button data-bs-toggle="modal" data-bs-target="#idModalBlog">
                Blog
              </button>
              <button data-bs-toggle="modal" data-bs-target="#idModalEvents">
                Termine
              </button>
              <Modal>
                <Modal.Button>Büchershop</Modal.Button>
                <ModalContent title={'Büchershop'}>
                  <Bookshop />
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </NavBarCard>
    </React.Fragment>
  );
}

const ModalContent = styled(Modal.Content)`
  & h2 {
    font-size: 96px;
    color: ${(props) => props.theme.colors.typoBlue};
  }
`;
const NavBar = styled.div`
  background-color: white;
  box-shadow: 10px 10px 25px 0px ${(props) => props.theme.colors.shadowGrey};
  z-index: 1032;

  & .block {
    height: 100px;
    width: calc(100vw - 40px);

    & button {
      background-color: rgba(0, 0, 0, 0);
      border: none;
      outline: none;
    }

    & a {
      & img {
        width: 170px;
      }
    }

    & .center {
      font-family: Lato, cursive;

      & h1 {
        text-align: center;
        font-weight: bold;
        color: ${(props) => props.theme.colors.typoGrey};

        ${(props) => props.theme.breakpoints.mq[1]} {
          fontsize: 24px;
        }
      }

      & h3 {
        font-weight: bold;

        text-align: center;
        color: ${(props) => props.theme.colors.typoGrey};

        ${(props) => props.theme.breakpoints.mq[1]} {
          display: none;
        }
      }
    }
  }
`;

const NavBarCard = styled.div<{
  state: any;
  navCardWidth: string;
}>`
  top: 40px;
  position: relative;
  width: ${(props) => props.navCardWidth};
  max-width: 1280px;
  height: 300px;
  box-shadow: 10px 10px 25px 0px ${(props) => props.theme.colors.shadowGrey};
  border: none;
  outline: none;
  border-radius: 5px;
  margin: 20px 20px;
  margin-left: ${(props) =>
    props.state.viewWidth > 1340 ? `${(props.state.viewWidth - 1280) / 2}px` : '20px'};
  margin-right: ${(props) => (props.state.viewWidth > 1340 ? `calc((100vw - 1280px) / 2)` : '20px')};
  background-color: white;
  background-size: cover;
  font-family: Lato, cursive;
  z-index: 1032;

  ${(props) => props.theme.breakpoints.mq[2]} {
    height: 300px;
    margin: 20px 20px;
  }

  ${(props) => props.theme.breakpoints.mq[1]} {
    height: 250px;
    margin: 15px 10px;
  }

  ${(props) => props.theme.breakpoints.mq[0]} {
    width: calc(100vw);
    height: 200px;
    min-width: 390px;
    margin: 10px 0px;
    box-shadow: 5px 5px 15px 0px ${(props) => props.theme.colors.shadowGrey};
  }

  & button {
    width: 135px;
    position: relative;
    background-color: ${(props) => props.theme.colors.bgWhite};
    color: ${(props) => props.theme.colors.bgRed};
    border-left: 1px solid white;
    border-right: 1px solid white;
    border-top: 1px solid white;
    border-bottom: 1px solid ${(props) => props.theme.colors.bgRed};
    border-radius: 25px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 1.75vh;
    padding: 1px 6px;
    text-align: center;

    ${(props) => props.theme.breakpoints.mq[3]} {
      width: 100px;
      padding: 1px 6px;
    }

    ${(props) => props.theme.breakpoints.mq[2]} {
      width: 70px;
      padding: 1px 3px;
    }

    ${(props) => props.theme.breakpoints.mq[1]} {
      width: 55px;
      padding: 1px 3px;
    }

    &:hover {
      background-color: rgba(121, 0, 0, 0.5);
      border: 1px solid ${(props) => props.theme.colors.bgRed};
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
    }

    &:active {
      font-weight: bold;
      background-color: ${(props) => props.theme.colors.bgRed};
      color: ${(props) => props.theme.colors.bgWhite};
      border: 1px solid ${(props) => props.theme.colors.bgWhite};
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
    }
  }

  & img {
    width: 420px;

    ${(props) => props.theme.breakpoints.mq[2]} {
      width: 35vw;
      height: 30vw;
    }

    ${(props) => props.theme.breakpoints.mq[0]} {
      width: 130px;
      height: 110px;
    }
  }

  & hr {
    height: 300px;
    border: 1px solid ${(props) => props.theme.colors.typoGrey};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    opacity: 1;

    ${(props) => props.theme.breakpoints.mq[1]} {
      height: 250px;
    }

    ${(props) => props.theme.breakpoints.mq[0]} {
      height: 200px;
    }
  }

  & .text {
    height: 300px;
    width: 100%;
    padding: 20px;

    ${(props) => props.theme.breakpoints.mq[2]} {
      height: 300px;
      padding: 15px;
    }

    ${(props) => props.theme.breakpoints.mq[1]} {
      height: 250px;
    }

    ${(props) => props.theme.breakpoints.mq[0]} {
      height: 200px;
      padding: 10px;
    }

    & h1 {
      font-weight: bold;
      text-align: left;
      color: ${(props) => props.theme.colors.typoGrey};
    }

    & h2 {
      font-weight: bold;
      text-align: left;
      color: ${(props) => props.theme.colors.typoGrey};
    }
  }
`;
