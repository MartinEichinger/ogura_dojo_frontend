import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faFile, faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const CombiButton = ({ colors, className, links }) => {
  const [visible, setVisible] = useState(0);
  const [item, setItem] = useState(0);
  const debug = false;

  const toggleVisible = () => {
    if (visible === true) {
      setVisible(false);
    } else if (visible === false) {
      setVisible(true);
    } else if (visible === 0) {
      setVisible(true);
    }
  };

  const unsetVisible = () => {
    setVisible(false);
  };

  const onSetItem = (item) => {
    setItem(item);
    unsetVisible();
  };

  const list = ['ARTIKEL LESEN', 'WEBSEITE', 'VIDEO SEHEN'];
  //const icons = ['far fa-file', 'fas fa-at', 'far fa-circle-play'];
  const icons = [faFile, faAt, faCirclePlay];
  const isAvailable = [links[0] !== null, links[1] !== null, links[2] !== null];
  const countAvailable = isAvailable.filter(Boolean).length;
  const firstAvailable = isAvailable.indexOf(true);

  if (debug) console.log('List: ', list);
  if (debug) console.log('Links: ', links);
  if (debug) console.log('Icons: ', icons);
  if (debug) console.log('isAvailable: ', isAvailable);
  if (debug) console.log('countAvailable: ', countAvailable);
  if (debug) console.log('firstAvailable: ', firstAvailable);

  return (
    <Container className={className}>
      <ButtonGroup id="ButtonGroup" className="button d-flex flex-row" colors={colors} visible={visible}>
        <Buttn
          className="select"
          onClick={() => toggleVisible()}
          onBlur={() => setTimeout(() => unsetVisible(), 200)}
          colors={colors}
          disabled={countAvailable <= 1}
        >
          {countAvailable === 0 && <FontAwesomeIcon icon={icons[0]} size="2x" />}
          {countAvailable === 1 && <FontAwesomeIcon icon={icons[0]} size="2x" />}
          {visible === true && countAvailable > 1 && <FontAwesomeIcon icon={faCaretUp} size="2x" />}
          {visible === 0 && countAvailable > 1 && <FontAwesomeIcon icon={faCaretDown} size="2x" />}
          {visible === false && countAvailable > 1 && <FontAwesomeIcon icon={faCaretDown} size="2x" />}
        </Buttn>
        <a href={links[item]} target="_blank" rel="noreferrer">
          <Buttn className="descr" colors={colors} onClick={() => unsetVisible()}>
            {list[item]}
          </Buttn>
        </a>
      </ButtonGroup>

      <List
        id="List"
        className={
          (visible === false && 'list d-flex flex-column slide-out-topII') ||
          (visible === true && 'list d-flex flex-column slide-in-topII') ||
          (visible === 0 && 'list d-flex flex-column outside')
        }
      >
        {isAvailable[0] === true && (
          <Buttn colors={colors} onClick={() => onSetItem(0)}>
            {/* <i className={icons[0]}></i> */}
            <FontAwesomeIcon icon={icons[0]} size="1x" />
          </Buttn>
        )}
        {isAvailable[1] === true && (
          <Buttn colors={colors} onClick={() => onSetItem(1)}>
            <FontAwesomeIcon icon={icons[1]} size="1x" />
          </Buttn>
        )}
        {isAvailable[2] === true && (
          <Buttn colors={colors} onClick={() => onSetItem(2)}>
            <FontAwesomeIcon icon={icons[2]} size="1x" />
          </Buttn>
        )}
      </List>
    </Container>
  );
};

export default CombiButton;

// animation slide-in-top
const slide_in_topII = keyframes`
  0% {
    transform: translateY(-150%);
    opacity: 0;
  }
  75% {
    transform: translateY(-40%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// animation slide-out-top
const slide_out_topII = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  25% {
    transform: translateY(-40%);
    opacity: 0;
  }
  100% {
    transform: translateY(-150%);
    opacity: 0;
  }
`;

const Container = styled.div`
  margin: 30px;
  width: 172px;
  height: 43.3px;
  border-radius: 8px;

  .slide-in-topII {
    -webkit-animation: ${slide_in_topII} 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: ${slide_in_topII} 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .slide-out-topII {
    -webkit-animation: ${slide_out_topII} 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    animation: ${slide_out_topII} 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }

  .outside {
    transform: translateY(-150%);
    opacity: 0;
  }
`;

const List = styled.div`
  width: 36px;
  position: relative;
  z-index: 99;

  button {
    border-top: 1px solid white;
  }
`;

const ButtonGroup = styled.div`
  position: relative;
  z-index: 100;
  border-radius: 8px;
  height: inherit;
  width: inherit;

  &:focus {
    border: 2px solid grey;
  }

  &:hover {
    box-shadow: none;
  }

  a {
    width: calc(150px - 36px);

    &:hover {
      text-decoration: none;
    }
  }

  .select {
    width: 36px;
    height: 100%;
    color: white;
    padding: 5px 10px;
    box-shadow: none !important;
    ${({ visible }) =>
      visible === true ? 'border-radius: 8px 0px 0px 0px' : 'border-radius: 8px 0px 0px 8px'};
  }

  .descr {
    box-shadow: none !important;
    color: white;
    height: 100%;
    width: inherit;
    border-left: 1px solid ${({ colors }) => colors.bgRedSolid};
    padding: 5px 10px;
    border-radius: 0px 8px 8px 0px;
  }
`;

const Buttn = styled(Button)`
  background-color: ${({ colors }) => colors.bgRed};
  border: 1px solid ${({ colors }) => colors.bgRed50};
  min-width: 36px;
  letter-spacing: inherit;
  color: white !important;
  border-radius: 0px;

  &:hover {
    background-color: ${({ colors }) => colors.bgRed20};
    color: white;
  }

  i {
    font-size: 20px;
  }
`;
