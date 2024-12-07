/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import { Component } from 'react';
import { connect } from 'react-redux';
import { authStatus } from './store/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './components/Navigation/Navigation';
import CardsKarate from './components/Cards/CardsKarate';
import ModalKarate from './components/ModalKarate/ModalKarate';
import ModalPanziGong from './components/ModalPanziGong/ModalPanziGong';
import ModalQiGong from './components/ModalQiGong/ModalQiGong';
import ModalTraining from './components/ModalTraining/ModalTraining';
import ModalBlog from './components/ModalBlog/ModalBlog';
import ModalEvents from './components/ModalEvents/ModalEvents';
import ModalLogin from './components/ModalLogin/ModalLogin';
import Footer from './components/Footer/Footer';
import ModalImpressum from './components/ModalImpressum/ModalImpressum';

class App extends Component {
  constructor(props) {
    super(props);
    this.debug = false;
    this.authStatus = this.props.authStatus;

    // BREAKPOINTS
    this.breakpoints = [400, 600, 960, 1280, 1920];
    //this.breakpoints = [430, 576, 678, 1023, 1320];
    this.mq = this.breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

    this.lang = 'de-DE'; // 'en-US' 'de-DE' 'fr-FR'
    this.state = {
      pageTraining: 'Training',
      pageKarate: 'TenguRyu',
      pagePanziGong: 'PanziGong',
      pageQiGong: 'QiGong',
    };

    this.styleApp = {
      height: '100vh',
      margin: '0px 0px 100px',
      padding: '0px',

      '& .bg': {
        zIndex: '1030',
        backgroundColor: 'white',
      },

      '& .Frame': {
        marginTop: '40px',
        marginBottom: '200px',
        minWidth: '390px',

        '& .Content': {
          maxWidth: '1440px',
          margin: '0px auto',
        },
      },
    };

    this.colors = {
      bgGreen50: 'rgba(10, 121, 0, 0.5)',
      bgGreen: 'rgba(10, 121, 0, 1)', //HSL: 115, 100, 24 //#0A7900
      bgBlue50: 'rgba(23,85,118,0.5)',
      bgBlue: 'rgba(23,85,118,1)',
      bgGrey: 'rgba(232, 232, 232, 1)',
      bgWhite50: 'rgba(255,255,255,0.5)',
      bgWhite75: 'rgba(255,255,255,0.75)',
      bgWhite: 'rgba(255,255,255,1)',
      bgRed: 'rgba(121, 0, 0, 1)', //HSL: 0, 100, 24 //#790000
      bgRedLight: 'hsl(0,100%,36%)',
      bgRed20: 'hsl(0,100%,20%)',
      bgRedSolid: 'hsl(0,100%,12%)',
      bgRed50: 'rgba(121, 0, 0, 0.5)',
      typoGrey: 'rgba(64, 64, 64, 1)',
      typoGreen: 'rgba(10, 121, 0, 1)',
      typoBlue: 'rgba(23,85,118,1)',
      typoRed: 'rgba(121, 0, 0, 1)',
      shadowGrey: 'rgba(122,122,122,1)',
    };

    this.contentCards = [
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
  }

  componentDidMount() {
    this.authStatus();
  }

  selectpage = (page, param) => {
    if (this.debug) console.log('App/selectpage', page, param);
    this.setState({ [param]: page });
  };

  renderCards = () => {
    if (this.debug) console.log('App/renderCards');
    return this.contentCards.map((content, i) => {
      return <CardsKarate props={content} colors={this.colors} mq={this.mq} keys={i} key={i} />;
    });
  };

  render() {
    if (this.debug) console.log('App/render');

    return (
      <div className="App d-flex flex-column" css={this.styleApp}>
        <ToastContainer />
        <Navigation colors={this.colors} select={this.selectpage} mq={this.mq} />
        <ModalKarate colors={this.colors} page={this.state.pageKarate} mq={this.mq} />
        <ModalPanziGong colors={this.colors} mq={this.mq} />
        <ModalQiGong colors={this.colors} page={this.state.pageQiGong} mq={this.mq} />
        <ModalTraining colors={this.colors} page={this.state.pageTraining} mq={this.mq} />
        <ModalBlog colors={this.colors} mq={this.mq} lang={this.lang} />
        <ModalEvents colors={this.colors} mq={this.mq} />
        <ModalLogin />
        <ModalImpressum colors={this.colors} mq={this.mq} />
        <div className="Frame bg">
          <div className="Content d-flex flex-row flex-wrap justify-content-center">
            {this.renderCards()}
          </div>
        </div>
        <div className="Placeholder">p</div>
        <Footer colors={this.colors} select={this.selectpage} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authStatus: () => dispatch(authStatus()),
    dispatch,
  };
};

export default connect(null, mapDispatchToProps)(App);
