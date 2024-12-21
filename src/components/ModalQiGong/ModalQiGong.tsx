/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import { clickUpDown, nextItem } from '../../helper/navigation-helper';
import useGraphQLQuery from '../../hooks/useGraphQLQuery';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import CompTxtStripTxt from '../CompTxtStripTxt/CompTxtStripTxt_';
import '../animation.css';

export default function ModalQiGong({ colors, page, mq }: { colors: any; page: string; mq: string[] }) {
  const debug = true;

  const stats = {
    navItems: ['QiGong', 'Lehrer', 'Form'],
    page: page,
    allSubPages: [],
    subPage: '',
    animated: 0,
    upDown: 1,
  };
  const apdx = 'QG';

  const style: any = {
    width: '100vw',
    maxWidth: '1440px',
    height: '100vh',
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

        [mq[2]]: {
          // bis 960 px
          gridTemplateColumns: '1fr 39px',
        },

        [mq[1]]: {
          // bis 600 px
          gridTemplateColumns: '1fr 34px',
        },

        [mq[0]]: {
          // bis 400px
          gridTemplateColumns: '1fr 29px',
        },

        '& .inNavigation': {
          gridColumn: '2',
          gridRow: '2',
        },

        '& .content': {
          height: '100%',
          gridColumn: '1',
          gridRow: '2',
          display: 'grid',
          gridTemplateColumns: 'auto',
          gridTemplateRows: '6fr',

          '& .csQiGongQG, .csLehrerQG, .csFormQG': {
            gridRow: '1',
            gridColumn: '1',
            display: 'grid',
            gridTemplateColumns: 'auto',
            gridTemplateRows: '6fr',

            '& .navLeft, .navRight': {
              cursor: 'pointer',
            },

            '& .modal-col': {
              gridRow: '1',
              gridColumn: '1',
              height: '100%',
              display: 'grid',
              gridTemplateColumns: 'auto',
              gridTemplateRows: 'auto 1.5vh minmax(17vh, 1fr) 1.5vh auto',

              '&.d-out': {
                transform: 'translateX(-2000px)',
                opacity: '0',
              },

              '& .bg-heading': {
                position: 'absolute',
                zIndex: '0',
                fontSize: '15vh',
                color: colors.bgGrey,
              },

              '& h1': {
                marginBottom: '1vh',
                position: 'relative',
                zIndex: '1',
              },

              '& h2': {
                color: colors.typoBlue,
                marginTop: '1vh',
                marginBottom: '1vh',
                position: 'relative',
                zIndex: '1',
              },

              '& p': {
                margin: '0vh 15px 0vh 0px',
                textAlign: 'justify',
                position: 'relative',
                zIndex: '1',
              },

              '& .modal-up': {
                boxSizing: 'border-box',
                maxHeight: 'calc(40vh - 2px)',
                backgroundColor: 'white',
                borderRadius: '5px',
                padding: '2vh 0.5vh 2vh 2vh',
                gridRow: '1',
              },

              '& .modal-strip': {
                boxSizing: 'border-box',
                backgroundColor: colors.bgBlue,
                margin: '5px 0px',
                gridRow: '3',
                overflow: 'hidden',

                '& .pics': {
                  height: '100%',
                  overflow: 'hidden',

                  '& .img': {
                    height: 'calc(100% - 2vh)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    margin: '0px 0.5vh',
                    width: '330px',
                  },

                  '& .num1': {
                    backgroundImage: 'url(qigong_pic_1.jpg)',
                    backgroundPosition: '75% 35%',
                  },
                  '& .num2': {
                    backgroundImage: 'url(qigong_pic_2.jpg)',
                    backgroundPosition: '50% 40%',
                  },
                  '& .num3': {
                    backgroundImage: 'url(qigong_pic_3.jpg)',
                    backgroundPosition: '50% 50%',
                  },
                  '& .num4': {
                    backgroundImage: 'url(qigong_pic_4.jpg)',
                    backgroundPosition: '12% 75%',
                  },
                  '& .num5': {
                    backgroundImage: 'url(qigong_pic_5.jpg)',
                    backgroundPosition: '50% 50%',
                  },
                  '& .num6': {
                    backgroundImage: 'url(qigong_pic_6.jpg)',
                    backgroundPosition: '50% 5%',
                  },
                  '& .num7': {
                    backgroundImage: 'url(qigong_pics_7.jpg)',
                    backgroundPosition: '50% 30%',
                  },
                  '& .num8': {
                    backgroundImage: 'url(qigong_pics_8.jpg)',
                    backgroundPosition: '50% 30%',
                  },
                  '& .num9': {
                    backgroundImage: 'url(qigong_pics_9.jpg)',
                    backgroundPosition: '50% 30%',
                  },
                },
              },

              '& .modal-down': {
                boxSizing: 'border-box',
                maxHeight: 'calc(40vh - 2px)',
                backgroundColor: 'white',
                borderRadius: '5px',
                padding: '2vh 0.5vh 2vh 2vh',
                gridRow: '5',

                '& .vids': {
                  height: '400px',

                  [mq[3]]: {
                    // bis 1280 px
                    height: '285px',
                  },

                  '& iframe': {
                    //position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '550px',
                    height: '100%',
                    maxHeight: '36vh',
                    margin: '0px 25px 25px 0px',

                    [mq[3]]: {
                      // bis 1280 px
                      width: '500px',
                    },

                    [mq[2]]: {
                      // bis 960 px
                      width: '400px',
                    },

                    [mq[1]]: {
                      // bis 600 px
                      width: '400px',
                    },

                    [mq[0]]: {
                      // bis 400px
                      width: '300px',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  const query = `query {
    content_qigong {
      id
      pages {
        id
        title
        subpages {
          id
          title
          pics {
            id
            directus_files_id {
              id
            }
          }
          translations {
            id
            content_item {
              id
              content
              video_item {
                video
              }
              two_column
            }
          }
        }
      }
    }
  }`;

  var contentQiGong = useGraphQLQuery(query);

  // destructure
  colors.bgTheme = colors.bgBlue;
  colors.bgTheme50 = colors.bgBlue50;
  colors.typoTheme = colors.typoBlue;

  contentQiGong = contentQiGong?.content_qigong;

  if (debug) console.log('ModalQiGong/render: ', contentQiGong);

  return (
    <>
      <div
        className="modal fade"
        id="idModalQiGong"
        tabIndex={-1}
        aria-labelledby="ModalQiGongLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div
          className="modal-dialog d-flex flex-row-reverse align-items-center"
          id="modalDialog"
          css={style}
        >
          <div className="modal-content">
            <div className="modal-row">
              <ModalInNavigation
                clickUpDown={(dir: any) => clickUpDown(dir, stats, apdx)}
                nextItem={(button: any) => nextItem(button, stats, apdx)}
                colors={colors}
                config={stats}
                mq={mq}
                apdx={apdx}
                type={apdx}
              />
              <div className="content">
                <div className="csQiGongQG">
                  <CompTxtStripTxt content={contentQiGong?.[0].pages[0]} />
                </div>
                <div className="csLehrerQG d-none">
                  <CompTxtStripTxt content={contentQiGong?.[1].pages[0]} />
                </div>
                <div className="csFormQG d-none">
                  <CompTxtStripTxt content={contentQiGong?.[2].pages[0]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//d-flex flex-row h-100 align-items-center

/* this.contentPage1 = [
  {
    contentNav: false,
    customClass: '',
    titleNo1_L1: 'Qigong',
    titleNo1_L2: '„Wenn man leben will, muss man sich auch bewegen“',
    heightContent1: 'h22',
    contentNo1:
      'Jeder Mensch lebt nur einmal. Unsere Lebensdauer ist begrenzt, deshalb sollten wir das Leben schätzen. Nicht nur die Bewegung ist ein untrennbarer Teil des Lebens, sondern die Gesundheit überhaupt ist das Fundament unseres Lebens. Ohne Bewegung könnten wir nur schwer existieren und ohne Gesundheit hätten wir keine Lebensqualität. Wollen wir das Leben schätzen, dann sind Bewegung und Gesundheit der Anfang dazu. Gesundheit ist die Grundlage des Lebens. Die Menschen sollen frei und glücklich leben, ihrem Leben Sinn und Wert verleihen. Um ihren Beitrag zu ihrer Familie und zur Gesellschaft leisten zu können, müssen die Menschen gesund bleiben. Erst unter dieser Voraussetzung lassen sich die täglichen Bestrebungen umsetzen. Die Möglichkeiten, eine gute Gesundheit zu erlangen und zu erhalten, sind vielfältig. Jeder hat eigene Wege, eigene Hobbys und eigene Methoden, um fit zu bleiben. Aber nur der Weg, der für den eigenen Körper und die eigene Kondition geeignet ist, ist auch der Beste.',
    pics: ['num1', 'num2', 'num3'],
    vids: [],
    titleNo2_L2: 'Jeder Mensch muss seine eigene sportliche Aktivität finden',
    heightContent2: 'h22',
    contentNo2: [
      'Die Geschwindigkeit, Intensität, Stärke und der Umfang der sportlichen Aktivität können sehr unterschiedlich sein. Jeder hat seine eigenen Vorstellungen und Ziele, die er durch körperliches Training erreichen will. Die Menschen wollen durch Bewegung Krankheiten vorbeugen und ihre Gesundheit erhalten. Ziel ist es, gesund zu bleiben und lange zu leben. Je nach Alter, Geschlecht, Interessen sowie unterschiedlichen Arbeits- und Lebenswelten variiert auch die Art und Weise, wie und wieviel man sich bewegt. Wer seine eigenen Grenzen nicht kennt, treibt entweder zu wenig Sport und ist unterfordert oder er überfordert seine Grenzen und treibt mehr Sport als ihm gut tut. Zu wenig körperliche Anstrengung bringt für den Körper wenig, zu viel schädigt den Körper. Nur wenn man sich selbst und seine Belastungsgrenzen gut kennt und sich auf die passende Art und Weise bewegt, ist es gut für die Gesundheit. Aus der Perspektive betrachtet, gesund und fit zu sein und ein langes Leben zu haben, sind „weiche“ Sportarten besser als „harte“ Sportarten. „Weiche“ Sportarten sind zum Beispiel Schwimmen, Laufen, Fahrrad fahren, Bergwandern, TaiJi und QiGong. Zu den „harten“ Sportarten zählen unter anderem Fußball, Gewichtheben, Fechten und Boxen. Sie haben oft Wettkampfcharakter und zielen auf körperliche Höchstleistungen ab. Bei den „weichen“ Sportarten stehen Ausdauer, Biegsamkeit und Entspannung im Vordergrund. Bewegung stärkt das YangQi und verbraucht es gleichzeitig. Ideal ist, durch Sport mehr YangQi zu gewinnen als zu verbrauchen.',
    ],
  },
];

this.contentPage2 = [
  {
    contentNav: false,
    customClass: '',
    titleNo1_L1: 'Ding HongYu',
    classTitleNo1_L1: 'green center',
    heightContent1: 'h26',
    contentNo1:
      'Ding HongYu (* 1932) war als TaiJi Quan- und QiGong-Lehrer an den Universitäten von SuZhou und NanJing V.R. China tätig. Seit Ende der 50er Jahre beschäftigte er sich mit TaiJi Quan und QiGong. Er arbeitete in verschiedenen Einrichtungen zur Erforschung der Effekte von TaiJi Quan und QiGong. In Deutschland wurde er unter anderem durch die Ausstrahlung des Lehrprogramms "DaYan ("Wildgans") QiGong", dieser Film wurde vom Südwestfunk (Baden-Baden) ausgestrahlt und dem QiGong-Poster der AOK, für das er "Modell" stand, bekannt. Des Weiteren war er an der Veröffentlichung von verschiedenen Fachbüchern der Carl von Ossietzky Universität Oldenburg beteiligt. Ebenso prägte er das Verständnis für Traditionelle Chinesische Medizin (TCM) und QiGong der Vereinsmitglieder der Deutschen QiGong Gesellschaft e. V. (DQGG) die 1990 gegründet wurde. Während seiner Aufenthalte in Deutschland, von 1988 bis 2007, war er in der noch jungen QiGong-Entwicklung in Deutschland an der Ausbildung vieler QiGong-Schüler beteiligt. Bei einem Seminar sagte er einmal "Man sollte nicht von Medikamenten oder vom Arzt leben" mit Blick auf TaiJi und QiGong. Beide Methoden helfen dabei, die eigene Lebensenergie und die innere Ausgeglichenheit zu fördern.',
    pics: ['num4', 'num5', 'num6'],
    vids: [],
    heightContent2: 'h31',
    contentNo2: [
      '1957 erwarb Ding HongYu einen Abschluss in Sportwissenschaft an der SuZhou Universität. 1957 - 1993 war er an der NanJing-Universität tätig. Er unterrichtete Sportwissenschaft und Sporttraining und arbeitete im Bereich Sportforschung (1964 ein Jahr Weiterbildung mit anderen chinesischen Sportdozenten an der BeiJing Sportuniversität). Während der langjährigen Studien in den Sporttheorien und seiner Lehrerpraxis hat Ding HongYu Sport mit der Chinesischen Medizin kombiniert und für die Vorbeugung gegen Krankheiten und zur Erhaltung der Gesundheit die theoretischen Ansatzpunkte geliefert. Seit 1988 war er 14 Mal in Deutschland und wurde von der Universität Oldenburg, dem Deutschen QiGong Verein, Mettnau Kur, Tus Traunreut usw. eingeladen und hat verschiedene Kurse und Seminare über QiGong und TaiJi Quan abgehalten. Er hat dadurch zum Kulturaustausch zwischen Ost und West beigetragen. 1991 war er an der Verfilmung des Lehrprogramms "DaYan ("Wildgans") QiGong" beteiligt. Dieser Film wurde vom Südwestfunk (Baden-Baden) ausgestrahlt; 1995 entwickelte Ding HongYu das "5 Organe QiGong" und lehrt es in Deutschland. 1996 modifizierte er die Form des "BaDuanJin" ("Acht Brokatstücke"). Im folgenden Jahr entwickelte er das "BaoJian Qigong 2" (Gesundheitsschützendes Qigong 2) und 1998 die Form der "Gesundheitsübung mit der Tellerdrehung" (PanZi Gong - Teller Gong). 2012 entwickelte er das Sehnen- und Knochen-Qigong" (Jingu Gong) und 2014 die "Lebensverlängernden Übungen" (Laoren Yanshou Fa). Im Jahr 2016 stellte Ding Hongyu seine zweite Form der „Gesundheitsübung mit der Tellerdrehung“ (PanZi Gong Zwei – Teller Gong Two) vor. In den Jahren 2018 bis 2019 entwickelte er die „Gesundheitsübung mit der Stockdrehung“ die aus zwei Formen – der Einzel- und der Doppelstockübung besteht. Dazwischen veröffentlichte er immer wieder verschiedene Beiträge zur Erhaltung der Gesundheit in Fachzeitschriften in China.',
    ],
  },
];

this.contentPage3 = [
  {
    contentNav: false,
    customClass: '',
    heightContent1: 'h26',
    titleNo1_L1: 'Formen',
    classTitleNo1_L1: 'blue center',
    contentNo1: [
      { type: 'h2', content: 'Das Leben braucht Bewegung' },
      {
        type: 'p',
        content:
          'Um zu leben muss man sich bewegen. Die Bewegung ist wichtig für jeden Menschen. In China heißt es im Volksmund „HuoDong“, wobei „Huo“ leben bedeutet und „Dong“ bewegen. Bewegung kann die Lebensenergie „YuanQi“ ausbessern und die positive Energie „YangQi“ vermehren. „YuanQi“ und „YangQi“ sind positive Energien, die notwendig sind, um die Gesundheit zu erhalten.',
      },
      { type: 'h2', content: 'Qigong Formen im Ogura Dojo' },
      {
        type: 'p',
        content:
          'Im Ogura Dojo werden verschiedene Qigong Formen unterrichtet. Dazu zählen klassische Formen wie die Acht Brokatstücke, das Wildgans QiGong und das Spiel der Fünf Tiere. Den Schwerpunkt bilden aber die Gesundheitsformen von Professor Ding HongYu, von der NanJing Universität, der seit 1996 der Lehrer von Alexander Callegari ist.',
      },
    ],
    pics: ['num7', 'num8', 'num9'],
    heightContent2: 'h31',
    classTitleNo2_L1: 'blue left',
    titleNo2_L2: ['Beispiele für die praktizierten QiGong Formen'],
    vids: [
      'https://www.youtube.com/embed/7PemWl6LyCo',
      'https://www.youtube.com/embed/NwoTaqLxLiE',
      'https://www.youtube.com/embed/ntGKI2ZQUvM',
    ],
  },
]; */
