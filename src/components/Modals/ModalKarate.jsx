/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { Component } from 'react';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';

import '../animation.css';

class ModalKarate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 1340,
      height: 300,
    };

    this.debug = false;
    this.apdx = 'Karate';

    this.form = React.createRef();
    this.stats = {
      allPages: ['TenguRyu', 'Lehrer'],
      page: this.props.page,
      allSubPages: ['Habersetzer', 'Ogura', 'Otsuka'],
      subPage: 'Habersetzer',
      animated: 0,
    };

    // BREAKPOINTS
    this.mq = this.props.mq;

    // STYLES
    this.bgGrey = this.props.colors?.bgGrey;
    this.bgWhite = this.props.colors?.bgWhite;
    this.bgRed = this.props.colors?.bgRed;
    this.typoRed = this.props.colors?.typoRed;
    this.typoGrey = this.props.colors?.typoGrey;
    this.typoGreen = this.props.colors?.typoGreen;
    this.shadowGrey = this.props.colors?.shadowGrey;

    this.styleModalDialog = {
      width: '100vw',
      maxWidth: '1440px',
      height: 'calc(100vh - 3.5rem)', // 2rem
      zIndex: '1051',
      position: 'relative',
      overflow: 'hidden',
      margin: '1.75vh auto',

      '& .modal-content': {
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',

        '& .modal-row': {
          width: '100%',

          '& .TenguRyu, .Lehrer': {
            width: '100%',
            position: 'absolute',

            '& .Habersetzer': {
              top: 'calc( 96vh - 1.75rem)',
              position: 'relative',
            },

            '& .Ogura': {
              top: '0vh',
              position: 'relative',
            },

            '& .Otsuka': {
              top: 'calc( -1 * (96vh - 1.75rem))',
              position: 'relative',
            },

            '& .d-out': {
              transform: 'translateX(-2000px)',
            },

            '& .navLeft, .navRight': {
              cursor: 'pointer',
            },

            '& .modal-col': {
              width: 'calc(100% - 51px)',

              [this.mq[2]]: {
                width: 'calc(100% - 39px)',
              },

              [this.mq[1]]: {
                width: 'calc(100% - 34px)',
              },

              [this.mq[0]]: {
                width: 'calc(100% - 29px)',
              },

              '& .bg-heading': {
                position: 'absolute',
                zIndex: '0',
                fontSize: '15vh',
                color: this.bgGrey,
              },

              '& h1': {
                fontSize: '4vh',
                marginBottom: '1vh',
                fontWeight: 'bold',
                position: 'relative',
                zIndex: '1',
              },

              '& h2': {
                fontSize: '2vh',
                fontWeight: 'bold',
                color: this.typoRed,
                marginBottom: '2vh',
                position: 'relative',
                zIndex: '1',
              },

              '& p': {
                fontSize: '1.8vh',
                margin: '0vh 15px 0vh 0px',
                textAlign: 'justify',
                position: 'relative',
                zIndex: '1',
              },

              '& .modal-up': {
                height: '35vh',
                backgroundColor: 'white',
                borderRadius: '5px',
                padding: '2vh',
              },

              '& .modal-strip': {
                height: '20vh',
                backgroundColor: this.bgRed,
                margin: '2vh 0px',
                position: 'relative',
                overflow: 'hidden',

                '& .pics': {
                  height: '100%',
                  overflow: 'hidden',
                },

                '& .img': {
                  height: 'calc(100% - 10px)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  margin: '5px 2.5px',
                  width: '330px',
                },

                '& .num1': {
                  backgroundImage: 'url(karate_pic_1.jpg)',
                },
                '& .num2': {
                  backgroundImage: 'url(karate_pic_2.jpg)',
                },
                '& .num3': {
                  backgroundImage: 'url(karate_pic_3.jpg)',
                },
                '& .num4': {
                  backgroundImage: 'url(karate_pic_4.jpg)',
                },
                '& .num5': {
                  backgroundImage: 'url(karate_pic_5.jpg)',
                },
                '& .num6': {
                  backgroundImage: 'url(karate_pic_6.jpg)',
                },
                '& .num7': {
                  backgroundImage: 'url(karate_pic_7.jpg)',
                },
                '& .num8': {
                  backgroundImage: 'url(karate_pic_8.jpg)',
                },
                '& .num9': {
                  backgroundImage: 'url(karate_pic_9.jpg)',
                },
                '& .num10': {
                  backgroundImage: 'url(karate_pic_10.jpg)',
                },
                '& .num11': {
                  backgroundImage: 'url(karate_pic_11.jpg)',
                },
                '& .num12': {
                  backgroundImage: 'url(karate_pic_12.jpg)',
                },
                '& .num13': {
                  backgroundImage: 'url(karate_pic_13.jpg)',
                },
                '& .num14': {
                  backgroundImage: 'url(karate_pic_14.jpg)',
                },
                '& .num15': {
                  backgroundImage: 'url(karate_pic_15.jpg)',
                },
              },

              '& .modal-down': {
                height: '35vh',
                backgroundColor: 'white',
                borderRadius: '5px',
                padding: '2vh',
              },
            },
          },
        },
      },
    };

    this.contentNav = {
      upDown: 1,
      navItems: ['TenguRyu', 'Lehrer'],
    };
  }

  componentDidMount() {
    if (this.debug) console.log('ModalKarate/compDidMount');
    //window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateDimensions);
    document.getElementById('idModalKarate').addEventListener('shown.bs.modal', this.onShowModal);
    document.getElementById('idModalKarate').addEventListener('hidden.bs.modal', this.onHideModal);
    document.querySelector(`.TenguRyu`).addEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.Lehrer`).addEventListener('animationend', this.onAnimationEnd);
  }

  componentWillUnmount() {
    if (this.debug) console.log('ModalKarate/compDidMount');
    //window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateDimensions);
    document.getElementById('idModalKarate').removeEventListener('shown.bs.modal', this.onShowModal);
    document.getElementById('idModalKarate').removeEventListener('hidden.bs.modal', this.onHideModal);
    document.querySelector(`.TenguRyu`).removeEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.Lehrer`).removeEventListener('animationend', this.onAnimationEnd);
  }

  onAnimationEnd = () => {
    this.stats.animated = 0;
    document.querySelector('.modal').scrollTo(0, 4);
    if (this.debug) console.log('ModalKarate/onAnimationEnd', this.stats.animated);
  };

  onShowModal = () => {
    if (this.debug) console.log('ModalKarate/onShowModal');
    this.updateDimensions();
    this.updateHx();
    this.stats.page = this.props.page;
    var page = this.stats.page;
    if (this.debug) console.log('ModalTraining/onShowModal', this.stats);
    if (page === 'Lehrer') {
      document.querySelector('.TenguRyu').classList.add('d-none');
      document.querySelector('.Lehrer').classList.remove('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.add('active');
      document.querySelector(`.downArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.LehrerBtn`).classList.add('active');
      document.querySelector(`.TenguRyuBtn`).classList.remove('active');
    } else if (page === 'TenguRyu') {
      document.querySelector('.TenguRyu').classList.remove('d-none');
      document.querySelector('.Lehrer').classList.add('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.downArrow` + this.apdx).classList.add('active');
      document.querySelector(`.LehrerBtn`).classList.remove('active');
      document.querySelector(`.TenguRyuBtn`).classList.add('active');
    }
  };

  onHideModal = () => {
    if (this.debug) console.log('ModalKarate/onHideModal');
    // reset single pages
    document.querySelector('.TenguRyu').classList.remove('slide-out-top');
    document.querySelector('.TenguRyu').classList.remove('slide-in-bottom');
    document.querySelector('.Lehrer').classList.remove('slide-out-top');
    document.querySelector('.Lehrer').classList.remove('slide-in-bottom');
    document.querySelector('.Lehrer').classList.add('d-none');

    // reset stored value for active page
    this.stats.page = 'TenguRyu';

    // reset navigation
    document.querySelector('.TenguRyuBtn').classList.add('active');
    document.querySelector('.LehrerBtn').classList.remove('active');
  };

  clickUpDown = (dir) => {
    if (this.debug) console.log('ModalKarate/clickUpDown', dir);

    // find index of current page
    var idx = this.stats.allPages.findIndex((item) => {
      return item === this.stats.page;
    });

    // trigger nextItem with requested page
    if (idx === 0 && dir === 'down') {
      this.nextItem(this.stats.allPages[idx + 1]);
    } else if (idx === 0 && dir === 'up') {
      this.stats.animated = 0;
      return 0;
    } else if (idx === this.stats.allPages.length - 1 && dir === 'up') {
      this.stats.animated = 1;
      this.nextItem(this.stats.allPages[idx - 1]);
    } else if (idx === this.stats.allPages.length - 1 && dir === 'down') {
      this.stats.animated = 0;
      return 0;
    } else if (dir === 'up') {
      this.stats.animated = 1;
      this.nextItem(this.stats.allPages[idx - 1]);
    } else if (dir === 'down') {
      this.stats.animated = 1;
      this.nextItem(this.stats.allPages[idx + 1]);
    }
  };

  nextItem = (button) => {
    if (this.debug) console.log('ModalKarate/nextItem', button);
    // identify the page to be shown
    document.querySelector(`.${this.stats.page}`).classList.remove('slide-in-bottom');
    document.querySelector(`.${this.stats.page}Btn`).classList.remove('active');
    document.querySelector(`.${this.stats.page}`).classList.add('slide-out-top');

    this.stats.page = button;

    try {
      document.querySelector(`.${this.stats.page}`).classList.remove('d-none');
    } catch (e) {}

    document.querySelector(`.${this.stats.page}`).classList.remove('slide-out-top');
    document.querySelector(`.${this.stats.page}Btn`).classList.add('active');
    document.querySelector(`.${this.stats.page}`).classList.add('slide-in-bottom');

    // check if end of list start or end -> in case reset arrow from active
    var idx = this.stats.allPages.findIndex((item) => {
      return item === this.stats.page;
    });

    if (idx === 0) {
      document.querySelector(`.upArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.downArrow` + this.apdx).classList.add('active');
    } else if (idx === this.stats.allPages.length - 1) {
      document.querySelector(`.upArrow` + this.apdx).classList.add('active');
      document.querySelector(`.downArrow` + this.apdx).classList.remove('active');
    } else {
      document.querySelector(`.upArrow` + this.apdx).classList.add('active');
      document.querySelector(`.downArrow` + this.apdx).classList.add('active');
    }
  };

  updateHx = () => {
    if (this.debug) console.log('ModalKarate/updateHx');
    // H1
    this.styleModalDialog['& .modal-content']['& .modal-row']['& .TenguRyu, .Lehrer']['& .modal-col'][
      '& h1'
    ].fontSize = 20 * (((this.state.width / 1340) * this.state.height) / 300) + 18 + 'px';

    // H2
    this.styleModalDialog['& .modal-content']['& .modal-row']['& .TenguRyu, .Lehrer']['& .modal-col'][
      '& h2'
    ].fontSize = 8 * (((this.state.width / 1340) * this.state.height) / 300) + 12 + 'px';

    // p
    this.styleModalDialog['& .modal-content']['& .modal-row']['& .TenguRyu, .Lehrer']['& .modal-col'][
      '& p'
    ].fontSize = 6 * (((this.state.width / 1340) * this.state.height) / 300) + 14 + 'px';
  };

  updateDimensions = () => {
    var w = document.querySelector('.scroll_').offsetWidth;
    var h = document.querySelector('.scroll_').offsetHeight;
    if (w !== 0)
      this.setState({
        width: w,
        height: h,
      });
    if (this.debug) console.log('ModalKarate/updateDimensions', w, h);
  };

  clickLeftRight = (dir) => {
    // find index of current page
    var idx = this.stats.allSubPages.findIndex((item) => {
      return item === this.stats.subPage;
    });
    if (this.debug) console.log('ModalKarate/clickLeftRight', dir, idx);

    // trigger nextItem with requested page
    if (idx === 0 && dir === 'left') {
      this.nextSubItem(this.stats.allSubPages[this.stats.allPages.length - 1]);
    } else if (idx === this.stats.allSubPages.length - 1 && dir === 'right') {
      this.nextSubItem(this.stats.allSubPages[0]);
    } else if (dir === 'left') {
      this.nextSubItem(this.stats.allSubPages[idx - 1]);
    } else if (dir === 'right') {
      this.nextSubItem(this.stats.allSubPages[idx + 1]);
    }
  };

  nextSubItem = (button) => {
    if (this.debug) console.log('ModalKarate/nextSubItem', button, this.stats.subPage);

    // identify the page to be shown
    document.querySelector(`.${this.stats.subPage}`).classList.remove('slide-in-right');
    document.querySelector(`.${this.stats.subPage}`).classList.add('slide-out-left');

    this.stats.subPage = button;

    document.querySelector(`.${this.stats.subPage}`).classList.remove('d-out');
    document.querySelector(`.${this.stats.subPage}`).classList.remove('slide-out-left');
    document.querySelector(`.${this.stats.subPage}`).classList.add('slide-in-right');
  };

  render() {
    if (this.debug) console.log('ModalKarate/render', this.state.width, this.state.height);
    this.updateHx();

    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="idModalKarate"
          tabIndex="-1"
          aria-labelledby="ModalKarateLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
        >
          <div
            className="modal-dialog d-flex flex-row-reverse align-items-center"
            id="modalDialog"
            css={this.styleModalDialog}
          >
            <div className="modal-content">
              <div className="modal-row d-flex flex-row h-100 align-items-center">
                <ModalInNavigation
                  clickUpDown={this.clickUpDown}
                  nextItem={this.nextItem}
                  colors={this.props.colors}
                  config={this.contentNav}
                  mq={this.mq}
                  apdx="Karate"
                />
                <div className="TenguRyu">
                  <div className="modal-col d-flex flex-column h-100">
                    <div className="modal-up">
                      <h1>karate-do</h1>
                      <h2>„Es ablehnen zu kämpfen, es ablehnen zu unterliegen...“</h2>
                      <div className="scroll_ h22">
                        <p>
                          Ursprüngliches Ziel von Karate war es eine bedrohliche Situation zu überstehen.
                          Dazu war es notwendig seine vorhandenen körperlichen und geistigen Fähigkeiten
                          optimal zu nutzen. Von entscheidender Bedeutung war sicher ein gutes
                          Selbstbewußtsein und die nötige Entschlossenheit. Bewegungen im Karate basieren
                          auf physikalischen Grundgesetzen, dies sollte man bei seinen Techniken optimal
                          für sich ausnutzen. Geistig sollte man konzentriert und trotzdem flexibel sein.
                          Optimalen Erfolg verspricht wahrscheinlich nur das harmonische Zusammenspiel
                          sehr vieler physischer, psychischer und mentaler Faktoren. Daher ist absolute
                          Perfektion nicht zu erreichen.
                        </p>
                      </div>
                    </div>
                    <div className="modal-strip">
                      <div className="pics d-flex flex-row justify-content-center">
                        <div className="img num1"></div>
                        <div className="img num8"></div>
                        <div className="img num9"></div>
                      </div>
                    </div>
                    <div className="modal-down">
                      <h1>tengu-ryu</h1>
                      <div className="scroll_ h26">
                        <p>
                          Im Karate gibt es unterschiedliche Schulen (ryu's). Tengu-Ryū oder
                          Tengu-no-michi (wörtlich: „Weg des Tengu“) ist ein rein defensiver Stil der
                          klassischen japanischen Kampfkünste (Budo). Initiiert wurde dieser Stil 1995
                          von dem französischen Kampfkunst- experten Roland Habersetzer. Er umfasst drei
                          Kompetenzbereiche: Tengu-Ryū Karatedo (ohne Waffen), Tengu-Ryū Kobudo
                          (traditionelle Waffen), Tengu-Ryū Hojutsu (moderne Waffen). 2006 wurde dieser
                          Stil in Japan durch die japanische Karatemeister Ogura Tsuneyoshi und Ōtsuka
                          Tadahiko anerkannt. Das heißt, Hanshi Habersetzer ist der erste Soke dieses
                          Stils. Tengu-Ryū ist eine Synthese der traditionellen japanischen Kriegskünste,
                          die auf kulturellen und nicht auf wettkämpferischen Kriterien beruhen, mit dem
                          Ziel der persönlichen Verwirklichung im körperlichen Bereich (Techniken) wie im
                          mentalen Bereich (Ethik). Dieser Stil der Kriegskunst integriert sowohl die
                          klassischen als auch die modernen Entwicklungen mit oder ohne Waffen. Tengu-Ryū
                          ist der Versuch, die Kampfkunst im 21. Jahrhundert neu zu definieren.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Lehrer d-none">
                  <div className="Habersetzer modal-col d-flex flex-column h-100">
                    <div className="modal-up">
                      <h1 className="red center">Roland Habersetzer</h1>
                      <div className="scroll_ h26">
                        <p>
                          <span className="fw-bold">Roland Habersetzer </span>
                          praktiziert seit 1957 die Kampfkünste und wurde 1961 einer der ersten
                          Karate-Schwarzgurte Frankreichs. Zu Recht gilt er als Spezialist der
                          Kampfkünste Japans (Bude) und Chinas (Wushu). Er ist Inhaber ver- schiedener
                          französischer, japanischer und chinesischer Diplome. 1992 erhielt er in Japan
                          vom O-Sensei Ogura Tsune- yoshi (geb. 1921, vom Gembunkan-Dojo; Ogura Sensei
                          war Schüler von Yamaguchi Gogen, 1909-1989, und von Gima Makoto, 1897-1998) den
                          8. Dan-Grad und den Titel „Shihan". Im April 2006 wurde dann zum „Hanshi" mit
                          dem Titel eines „Soke" (Gründungsmeister) ernannt für seinen eigenen Stil
                          „Tengu-no-michi". Diese Grade und Titel wurden bestätigt von Otsuka Tadahiko
                          vom Gojukensha in Tokyo, eines anderen Meisters, mit Beziehungen zu Goju-ryu,
                          Naha-te und Shuri-te und direkter Schüler von Higa Yuchoku (1910-1994), der ihn
                          zum „Hanshi" ernannte. Das geschah als Anerkennung und Belohnung seiner
                          einzigartigen Missionsarbeit und der sicheren Wirkung, womit auch die Bedeutung
                          betont wird, die Roland Habersetzer den 49 Jahren seiner Kampfkunstpraxis und
                          seines Einsatzes für die echte Tradition geben wollte, indem er die drei Stufen
                          „Shu", „Ha", „Li" respektierte.
                        </p>
                      </div>
                    </div>
                    <div className="modal-strip d-flex flex-row justify-content-around align-items-center">
                      <div className="navLeft" onClick={(e) => this.clickLeftRight('left')}>
                        <img src="./icon_left.png" alt="icon left" />
                      </div>
                      <div className="pics d-flex flex-row justify-content-center">
                        <div className="img num4"></div>
                        <div className="img num5"></div>
                        <div className="img num6"></div>
                      </div>
                      <div className="navRight" onClick={(e) => this.clickLeftRight('right')}>
                        <img src="./icon_right.png" alt="icon right" />
                      </div>
                    </div>
                    <div className="modal-down">
                      <div className="scroll_ h31">
                        <p>
                          Und damit wird, letztendlich, auch sein eigenes, praktisches Konzept in den
                          Kampfkünsten, sein „Tengu-Weg („Tengu-no-michi"), legitimiert. Bereits 1968 hat
                          er mit seiner außergewöhlichen Verbreitungsarbeit begonnen. Mit ungefähr 70
                          Veröffentlichungen bis heute (*), ist er wohl der Autor des wichtigsten Werkes
                          der Welt über die Kampf- künste, eine Quelle der Geschichte, der Technik und
                          der Pädagogik in allen französisch sprechenden Ländern und in vielen anderen.
                          Nachdem er 10 Jahre lang eine der Triebfedern des jungen französischen
                          Karateverbandes war, zu- ständig für den ganzen östlichen Teil des Landes,
                          gründete er 1974 das Budoforschungszentrum (CRB), ein inter- nationales und
                          unabhängiges Organ für zahllose Budokas, die sich vor allem um die geistige
                          Zukunft der Kampf- künste des fernen Ostens sorgen, denn er war schnell und
                          tief enttäuscht von der sportlichen Entwicklung einer Sache, die er als eine
                          Kunst und einen kulturellen Ausdruck betrachtete. In diesem Rahmen und in einer
                          Vielzahl von Lehrgängen und Konferenzen in der ganzen Welt, als auch in einer
                          Serie von technischen Handbüchern und ge- schichtlichen Veröffentlichungen, die
                          er als Pionierwerke verfaßt hat, hat er einen starken Weg geschaffen, der
                          zurück führt zu den traditionellen Werten dieser Künste, ohne jemals von seiner
                          Überzeugung abzuweichen.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="Ogura modal-col d-flex flex-column h-100 d-out">
                    <div className="modal-up">
                      <h1 className="red center">Ogura Tsuneyoshi</h1>
                      <div className="scroll_ h26">
                        <p>
                          <span>Ogura Tsuneyoshi</span> (* 1924; † 2007) war ein japanischer
                          Karatemeister (Shotokan, Gōju ryū) aus Kōfu, 10. Dan. Durch seine Mutter war er
                          okinawaischer Abstammung und Nachfahre von Takeda Shingen, Herr von Kōfu durch
                          seinen Vater, aber keiner seiner Eltern oder Großeltern praktizierte die
                          Kriegskünste. Ogura Tsuneyoshi war insbesondere Schüler von Gima Makoto und von
                          Yamaguchi Gōgen. Gima Makoto übermittelte ihm die antiken Formen zahlreicher
                          Kata mit ihren kriegerischen (Bunkai), energetischen und therapeutischen
                          Anwendungen. 1944 gründete er die Gembukai-Schule (Gembukan dōjō) in Kōfu und
                          in den 70er Jahren das Kokusai Karatedo Kobudo Sihikko Kyokai (Internationale
                          Vereinigung zur Verbreitung von Karatedo und Kobudo), die er zu entwickeln
                          versuchte im Verlauf seiner zahlreichen Seminare in Frankreich wie in Europa
                          und Zentralamerika. Ausgehend von einem Konzept, das schon von Yagi Meitoku
                          entwickelt wurde, brachte Ogura Sensei eine Reihe von sechs Fukiyu-Kata heraus,
                          die ein Training mit Partner ermöglichen (Futari-bunkai, San-nin-bunkai,
                          Go-nin-bunkai), die er in der Folge bis auf zehn erhöhte (in der Tat erlauben
                          die vielen möglichen Kombinationen etwa 125 Verkettungen auf dem Prinzip der
                          Grundlage). Ogura Tsuneyoshi gilt als ein „Meister im Schatten“, d.h., sein
                          Wirken erfolgte vorwiegend im Verborgenen, unter Ausschluss der Öffentlichkeit,
                          und sein Name ist in den offiziellen Genealogien des Karatedō selten zu finden.
                        </p>
                      </div>
                    </div>
                    <div className="modal-strip d-flex flex-row justify-content-around align-items-center">
                      <div className="navLeft" onClick={(e) => this.clickLeftRight('left')}>
                        <img src="./icon_left.png" alt="icon left" />
                      </div>
                      <div className="pics d-flex flex-row justify-content-center">
                        <div className="img num10"></div>
                        <div className="img num11"></div>
                        <div className="img num12"></div>
                      </div>
                      <div className="navRight" onClick={(e) => this.clickLeftRight('right')}>
                        <img src="./icon_right.png" alt="icon right" />
                      </div>
                    </div>
                    <div className="modal-down">
                      <div className="scroll_ h31">
                        <p>
                          Freund der letzten lebenden Karate- und Kobudo-Meister, von Sakagami Ryusho bis
                          zu Matayoshi Shinpō, bedeutender Kalli- graph, war er einer der allerletzten
                          Empfänger der geschriebenen und mündlichen Quellen, welche die historischen und
                          techni- schen Entwicklungen der Kunst der „Leeren Hand“ (Karate, Tode),
                          insbesondere eines Teils der Archive von Mabuni Kenwa (1889–1952, Gründer des
                          Shitō ryū), in welchem sich auch ein Originalexemplar des Bubishi befindet. Von
                          1973 an war er der letzte Lehrer von Roland Habersetzer gewesen (damals schon
                          4. Dan in Frankreich), dem er 1992 den 8. Dan und dann 2006 den 9. Dan
                          zuerkannte, mit dem Titel des Hanshi und dem des Sōke für sein eigenes Konzept
                          der Kampfpraxis, den „Voie Tengu“ (Weg des Tengu, Tengu-no-Michi), der sich auf
                          drei Kompetenz-Bereiche aufteilt: Tengu-ryu Karatedo, Tengu-ryu Kobudo, Tengu-
                          ryu hojutsu. Pierre Portocarrero, dem Ogura Sensei gleichermaßen einen
                          Shihan-Grad verliehen hat, was ihn anbetrifft und mit Zustimmung von Sensei
                          Habersetzer, sich entschieden in Frankreich die klassische Schule des Meisters
                          von Kofu zu verfolgen, die er Gembukan-tode-ryu genannt hat. Sein Sohn Hisanori
                          Ogura hat seit 2007 die Leitung des Dōjō von Kofu übernommen, wo er die
                          Synthese lehrt, die von seinem Vater geschaffen wurde, dass Gembukan Karatedo.
                          Ogura Tsuneyoshi war auch Shintō- Priester. Darüber hinaus hat er einige Zeit
                          bei den Yamabushi (er studierte also Ninjutsu vom Koga-ryu von Fujita Saiko)
                          verbracht und wurde durch sie in das Shingon eingeführt, eine esoterische
                          Strömung des Buddhismus. Der Umfang und der Eklektizismus seiner Kenntnisse in
                          den Budo-Künsten war außerordentlich. Er hatte gleichermaßen die chinesischen
                          Künste studiert, insbesondere den Stil des „weißen Kranich“ von Fujian
                          (Baihequan), und das Kendo und Iaido von Omori-ryu praktiziert.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="Otsuka modal-col d-flex flex-column h-100 d-out">
                    <div className="modal-up">
                      <h1 className="red center">Ōtsuka Tadahiko</h1>
                      <div className="scroll_ h26">
                        <p>
                          Ōtsuka Tadahiko (* 10. Juni 1940; † 27. November 2012) war ein japanischer
                          Karatemeister (Gōju ryū), 9. Dan, und Meister des Taijiquan
                          (Yang-Stil/Pekingstil). Tadahiko war der Kancho (Direktor/Leiter) der
                          Kampfkunstschule Gōjūkensha und Referenzmeister im Gōjū-Ryū, Naha-te und
                          Shuri-te, direkter Schüler von Higa Yuchoko (1910–1994), der ihn zum Hanshi
                          ernannt hatte. Er hatte das Karate-Studium 1955 in Tokio begonnen, unter der
                          Leitung von Ichikawa Sosui, einem Experten des okinawanischen Zweigs des
                          Gōjū-Ryū und Schüler von Izumigawa Kanki, der bei Higa Seiko (1898–1966) und
                          Toyama Kanken (1888–1966) gelernt hatte. Im Jahr 1967 machte Ōhtsuka Tadahiko
                          die Bekanntschaft von Yang-Ming-Shi (1924–2005), der in Japan unter dem Namen
                          Yo Meiji bekannt ist. Dieser lehrte ihn die kleine Form des Taijiquan, die 24er
                          Form, die als Peking-Form bekannt ist, welche er seither weit verbreitet hat,
                          zusammen mit seiner Ehefrau Ōhtsuka Kazuko, in Japan, Australien und Europa
                          (die japanische Bezeichnung für die Form aus Peking ist Taikyokuken). In der
                          Folge hatte er gleichermaßen Ba-gua und Xing-yi bei O Ju-kin (Wang Shu Chin)
                          aus Taiwan studiert, welcher mehrere Jahre in Japan zugebracht hatte. Im Alter
                          von 30 Jahren wurde er einer der jüngsten 6. Dan in Japan. 1970 gründete er
                          unter der Anleitung seines Lehrers, Ichikawa Sosui, seine eigene Organisation
                          namens Gōjūkensha. Der Name seiner Kampfkunstschule Gōjūkensha setzt sich aus
                          vier Schriftzeichen 剛柔拳舎 zusammen.
                        </p>
                      </div>
                    </div>
                    <div className="modal-strip d-flex flex-row justify-content-around align-items-center">
                      <div className="navLeft" onClick={(e) => this.clickLeftRight('left')}>
                        <img src="./icon_left.png" alt="icon left" />
                      </div>
                      <div className="pics d-flex flex-row justify-content-center">
                        <div className="img num13"></div>
                        <div className="img num14"></div>
                        <div className="img num15"></div>
                      </div>
                      <div className="navRight" onClick={(e) => this.clickLeftRight('right')}>
                        <img src="./icon_right.png" alt="icon right" />
                      </div>
                    </div>
                    <div className="modal-down">
                      <div className="scroll_ h31">
                        <p>
                          Dabei steht Gō (剛) für hart, jū (柔) für weich, ken (拳) für Faust und sha
                          (舎) für Ort des Lernens. Darüber hinaus haben ihn seine ständigen historischen
                          Recherchen auf Okinawa (insbesondere bei Tokashiki Iken) und bis in die
                          chinesische Provinz Fujian (wo er bei verschiedenen Gelegenheiten in Begleitung
                          seiner Frau Experten des Taijiquan traf wie Zhu Tian Cai, Feng Zhiqiang und
                          Chen Xiai Wang) dazu geführt sich weiter mit dem Text des Bubishi vertraut zu
                          machen, dessen Existenz bis dahin nur ganz vertraulich und vage gewesen war.
                          Von ihm stammt auch die erste vollständige Übersetzung des Bubishi aus dem
                          Chinesischen ins Japanische. Er hat sich auch für den Erhalt und die
                          Verbreitung alter Formen (klassische Kata mit chinesischem Ursprung, auch
                          „Koryū-Kata“ genannt) eingesetzt. Dazu gehören Formen wie z.B. Passai, Sochin,
                          Unsu und Jitte. Die Formen haben allerdings sehr wenig mit den Formen wie sie
                          heute in den großen japanischen Stilen wie z. B. im Shotokan ausgeführt werden
                          gemeinsam. Die Übertragungslinie geht von Ohtsuka Tadahiko – Higa Yuchoko –
                          Chibana Chōshin (Aragaki) – Itosu Ankō bis auf Matsumura Sōkon zurück. Ohtsuka
                          Tadahiko lehrte auch besonders die Kata Happoren und Rokkishu, welche er vor
                          dem Vergessenwerden bewahrt hat, und in Europa an seinen Schüler den
                          französischen Kampfkunstexperten Roland Habersetzer, mit dessen Centre de
                          Recherche Budo – Institut Tengu er intensive Beziehungen pflegte, weitergegeben
                          hat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalKarate;
