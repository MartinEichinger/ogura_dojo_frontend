import styled from 'styled-components';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import Navigation from './components/Navigation/Navigation';
import CardsKarate from './components/Cards/CardsKarate';
import ModalKarate from './components/ModalKarate/ModalKarate';
import ModalPanziGong from './components/ModalPanziGong/ModalPanziGong';
import ModalQiGong from './components/ModalQiGong/ModalQiGong';
import ModalTraining from './components/ModalTraining/ModalTraining';
import ModalBlog from './components/ModalBlog/ModalBlog';
import ModalEvents from './components/ModalEvents/ModalEvents';
import Footer from './components/Footer/Footer';
import ModalImpressum from './components/ModalImpressum/ModalImpressum';
import ModalLieferbedingungen from './components/ModalLieferbedingungen/ModalLieferbedingungen';

export interface IColors {
  bgGreen50: string;
  bgGreen: string;
  bgBlue50: string;
  bgBlue: string;
  bgGrey: string;
  bgWhite50: string;
  bgWhite75: string;
  bgWhite: string;
  bgRed: string;
  bgRedLight: string;
  bgRed20: string;
  bgRedSolid: string;
  bgRed50: string;
  typoGrey: string;
  typoGreen: string;
  typoBlue: string;
  typoRed: string;
  shadowGrey: string;
  bgTheme?: string;
  bgTheme50?: string;
  typoTheme?: string;
}

interface IState {
  pageTraining: string;
  pageKarate: string;
  pagePanziGong: string;
  pageQiGong: string;
}
function App() {
  const debug = false;

  const lang = 'de-DE'; // 'en-US' 'de-DE' 'fr-FR'
  const [state, setState] = useState<IState>({
    pageTraining: 'Training',
    pageKarate: 'TenguRyu',
    pagePanziGong: 'PanziGong',
    pageQiGong: 'QiGong',
  });

  const contentCards = [
    {
      img: 'main_karate.jpg',
      modal: '#idModalKarate',
      heading: 'Tengu Ryu Karate',
      headingTwo: '„Es ablehnen zu kämpfen, es ablehnen zu unterliegen...“',
      para: 'Ein vollständiger Weg der Kriegskunst oder der Geist einer Tradition. Lernen und Verbessern des Verhaltens eines freien Individuums unter Einhaltung der Achtung vor dem Leben, den Anderen, dem Gesetz ...',
      keywords:
        'Roland Habersetzer - Kampfkunst im 21. Jh. - Selbstverteidigung - Waffen - Koshiki Kata',
      pos: '50% 20%',
    },
    {
      img: 'main_panzigong.jpg',
      modal: '#idModalPanziGong',
      heading: 'Panzi Gong',
      headingTwo: '„Gesundheitsübung mit der Tellerdrehung“',
      para: 'Der menschliche Körper wird mit zunehmendem Alter immer schwächer und anfälliger. Dies ist ein Naturgesetz, das man nicht ändern kann. Aber man kann den Alterungsprozess nach hinten verschieben und somit die Geschwindigkeit des Alterns verlangsamen.',
      keywords: 'Prof. Ding Hongyu - Tellerdrehung - Gesundheitsübung - Nanjing Universität',
      pos: '50% 20%',
    },
    /* {
        img: 'main_taiji.jpg',
        modal: '#idModalTaiji',
        heading: 'Taiji Quan',
        headingTwo: '„Je höher der Grad  der Entspannung, desto höher ist die Kampfkunst“',
        para: 'Aus sanften und weichen Übungen entsteht Härte; aus langsamen Übungen entsteht Schnelligkeit; aus Entspannung entsteht Kraft. Das kann nicht jeder so akzeptieren. Mit anderen Worten: Sanft zähmt hart; aus langsam entsteht schnell; mit Schwäche das Stärkere bewältigen.',
        keywords: 'Yang Taiji - Chen Taiji - Faust - Schwert - Fächer',
        pos: '50% 20%',
      }, */
    {
      img: 'main_qigong.jpg',
      modal: '#idModalQiGong',
      heading: 'Qigong',
      headingTwo: '„Wenn man leben will, muss man sich auch bewegen.“',
      para: 'Im Volksmund in China sagt man „HuoDong“ (Huo – leben, Dong – bewegen). Qigong gehört zu Chinas altem Kulturerbe. Qigong differenziert sich in „DongGong“ (dynamisch, bewegend) und „JingGong“ (ruhig, still). Beides wird in den Übungen praktiziert. Für Qigong-Übende sind nicht bestimmte Gesetze und Methoden festgelegt – naturgemäß ist wichtigste Methode und Regel die Übung selbst..',
      keywords: 'Kulturerbe - Gesundheitsübungen - leben und bewegen',
      pos: '60% 40%',
    },
    {
      img: 'main_training.jpg',
      modal: '#idModalTraining',
      heading: 'Training',
      headingTwo: '- Beginn / Probetraining jederzeit möglich -',
      table: [
        { head: 'Taiji', day: 'Montag', time: '18:30 - 20:00' },
        { head: 'Karate', day: 'Montag', time: '20:00 - 22:00' },
        { head: 'Karate', day: 'Freitag', time: '20:00 - 22:00' },
      ],
      keywords: 'Werner-von-Siemens Mittelschule - Martin-Luther-Straße - 83301 Traunreut',
      pos: '45% 40%',
    },
  ];

  const selectpage = (param: string, page: string) => {
    if (debug) console.log('App/selectpage', param, page, state);
    setState({ ...state, [param]: page });
  };

  const renderCards = () => {
    if (debug) console.log('App/renderCards');
    return contentCards.map((content, i) => {
      return <CardsKarate props={content} keys={i} key={i} />;
    });
  };
  if (debug) console.log('App/render: ', state);

  return (
    <AppBody className="App d-flex flex-column">
      <ToastContainer />
      <Navigation select={selectpage} />
      <ModalKarate page={state.pageKarate} select={selectpage} />
      <ModalPanziGong page={state.pagePanziGong} select={selectpage} />
      <ModalQiGong page={state.pageQiGong} select={selectpage} />
      <ModalTraining page={state.pageTraining} select={selectpage} />
      <ModalBlog lang={lang} />
      <ModalEvents lang={lang} />
      <ModalImpressum lang={lang} />
      <ModalLieferbedingungen lang={lang} />
      {/* <ModalDatenschutz lang={lang} /> */}
      <div className="Frame bg">
        <div className="Content d-flex flex-row flex-wrap justify-content-center">{renderCards()}</div>
      </div>
      <div className="Placeholder">p</div>
      <Footer select={selectpage} />
    </AppBody>
  );
}

const AppBody = styled.div`
  height: 100vh !important;
  margin: 0px 0px 100px;
  padding: 0px;

  & .bg {
    z-index: 1030;
    background-color: white;
  }

  & .Frame {
    margin-top: 40px;
    margin-bottom: 200px;
    min-width: 390px;

    & .Content {
      max-width: 1440px;
      margin: 0px auto;
    }
  }
`;

export default App;
