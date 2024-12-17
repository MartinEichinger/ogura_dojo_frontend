/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import { clickUpDown, nextItem, clickLeftRight } from '../../helper/navigation-helper';
import useGraphQLQuery from '../../hooks/useGraphQLQuery';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import CompTxtStripTxt from '../CompTxtStripTxt/CompTxtStripTxt_';
import '../animation.css';

export default function ModalKarate({ colors, page, mq }: { colors: any; page: string; mq: string[] }) {
  const debug = false;

  const stats = {
    navItems: ['TenguRyu', 'Lehrer'],
    page: page,
    allSubPages: ['Habersetzer', 'Ogura', 'Otsuka'],
    subPage: 'Habersetzer',
    animated: 0,
    upDown: 1,
  };
  const apdx = 'KT';

  const style: any = {
    width: '100vw',
    maxWidth: '1440px',
    height: '100vh',
    zIndex: '1051',
    overflow: 'hidden',
    margin: '0 auto',

    '& .modal-content': {
      //width: '100%',
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

          '& .csTenguRyuKT, .csLehrerKT': {
            gridRow: '1',
            gridColumn: '1',
            display: 'grid',
            gridTemplateColumns: 'auto',
            gridTemplateRows: '6fr',

            '& .navLeft, .navRight': {
              cursor: 'pointer',
              backgroundColor: 'rgba(255,255,255,0.5)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              '&:hover': {
                '& svg': {
                  stroke: 'rgba(200,200,200,1)',
                },
              },
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
                color: colors.typoRed,
                marginBottom: '2vh',
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
                backgroundColor: colors.bgRed,
                margin: '5px 0px',
                gridRow: '3',
                overflow: 'hidden',
                /////////////////////////
                //height: '15vh',

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
                },
              },

              '& .modal-down': {
                boxSizing: 'border-box',
                maxHeight: 'calc(40vh - 2px)',
                backgroundColor: 'white',
                borderRadius: '5px',
                padding: '2vh 0.5vh 2vh 2vh',
                gridRow: '5',
              },
            },
          },
        },
      },
    },
  };

  const query = `query {
    content_karate {
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
            }
          }
        }
      }
    }
  }`;

  var contentKarate = useGraphQLQuery(query);

  // destructure
  colors.bgTheme = colors.bgRed;
  colors.bgTheme50 = colors.bgRed50;
  colors.typoTheme = colors.typoRed;

  contentKarate = contentKarate?.content_karate[0].pages;

  if (debug) console.log('ModalKarate/render', contentKarate);

  return (
    <>
      <div
        className="modal fade"
        id="idModalKarate"
        tabIndex={-1}
        aria-labelledby="ModalKarateLabel"
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
                type="KT"
              />
              <div className="content">
                <div className="csTenguRyuKT">
                  <CompTxtStripTxt content={contentKarate?.[0]} />
                </div>
                <div className="csLehrerKT d-none">
                  <CompTxtStripTxt
                    content={contentKarate?.[1]}
                    clickLeftRight={(dir: any) => clickLeftRight(dir, stats)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* this.contentTenguRyu = [
  {
    titleNo1_L1: 'Karate',
    titleNo1_L2: '"Es ablehnen zu kämpfen, es ablehnen zu unterliegen..."',
    //heightContent1: 'h22',
    contentNo1:
      'Ursprüngliches Ziel von Karate war es eine bedrohliche Situation zu überstehen. Dazu war es notwendig seine vorhandenen körperlichen und geistigen Fähigkeiten optimal zu nutzen. Von entscheidender Bedeutung war sicher ein gutes Selbstbewußtsein und die nötige Entschlossenheit. Bewegungen im Karate basieren auf physikalischen Grundgesetzen, dies sollte man bei seinen Techniken optimal für sich ausnutzen. Geistig sollte man konzentriert und trotzdem flexibel sein. Optimalen Erfolg verspricht wahrscheinlich nur das harmonische Zusammenspiel sehr vieler physischer und psychischer Faktoren. Daher ist absolute Perfektion nicht zu erreichen.',
    pics: ['num1', 'num8', 'num9'],
    vids: [],
    titleNo2_L1: 'Tengu Ryu',
    //heightContent2: 'h22',
    contentNo2: [
      "Im Karate gibt es unterschiedliche Schulen (ryu's). Tengu Ryu oder Tengu-no-michi (wörtlich: „Weg des Tengu“) ist ein rein defensiver Stil der klassischen japanischen Kampfkünste (Budo). Initiiert wurde dieser Stil 1995 von dem französischen Kampfkunstexperten Roland Habersetzer. Er umfasst drei Kompetenzbereiche: Tengu Ryu Karate (ohne Waffen), Tengu Ryu Kobudo (traditionelle Waffen), Tengu Ryu Hojutsu (moderne Waffen). 2006 wurde dieser Stil in Japan durch die japanische Karatemeister Ogura Tsuneyoshi und Ōtsuka Tadahiko anerkannt. Das heißt, Hanshi Habersetzer ist der erste Soke dieses Stils. Tengu Ryu ist eine Synthese der traditionellen japanischen Kriegskünste, die auf kulturellen und nicht auf wettkämpferischen Kriterien beruhen, mit dem Ziel der persönlichen Verwirklichung im körperlichen Bereich (Techniken) wie im mentalen Bereich (Ethik). Dieser Stil der Kriegskunst integriert sowohl die klassischen als auch die modernen Entwicklungen mit oder ohne Waffen. Tengu Ryu ist der Versuch, die Kampfkunst im 21. Jahrhundert neu zu definieren.",
    ],
  },
];

this.contentLehrer = [
  {
    contentNav: true,
    customClass: 'Habersetzer',
    titleNo1_L1: 'Roland Habersetzer',
    classTitleNo1_L1: 'red center',
    //heightContent1: 'h26',
    contentNo1:
      'Im Jahr 1957 begann Roland Habersetzer mit dem Trainieren der asiatischen Kampfkünste Judo und Jujutsu. Kurz darauf entdeckte er für sich das Karate und Henri Pleé (1923-2014) wurde sein erster Sensei. Henri Pleé führte das Karate bereits in den 1950er Jahren in Frankreich ein und gilt somit zu recht als Pionier des Karates in Europa. Im Jahr 1961 erhielt Roland Habersetzer den 1. Dan in dieser Kampfkunst. Somit war er einer der ersten „Schwarzgurte“ Frankreichs und zu jener Zeit der jüngste. Fasziniert von den Kampfkünsten begann er 1968 mit der Publikation zahlreicher Werke und Veröffentlichungen in Fachzeitschriften. Er gilt wohl als Autor der wichtigsten Werke über die Welt der Kampfkünste und damit als wesentliche Quelle zur Geschichte, Technik und Pädagogik in allen französisch sprechenden Ländern. Viele seiner Werke wurden in andere Sprachen übersetzt – oft auch illegal, besonders in Osteuropa, Russland, Naher Osten und Nordafrika. In seiner zehnjährigen Tätigkeit für den noch jungen Französischen Karateverband (Federation Francaise de Karate), wo er für den östlichen Teil Frankreichs zuständig war, bildete er zahlreiche Karatelehrer aus. Roland Habersetzer leitete Lehrgänge auf der ganzen Welt und führte 1975 das Karate in den Ländern Osteuropas ein.',
    pics: ['num4', 'num5', 'num6'],
    vids: [],
    //heightContent2: 'h31',
    contentNo2: [
      'Entäuscht von der sportlichen Entwicklung der Kampfkünste, gründete er bereits 1974 das Centre de Recherche Budo (Budoforschungszentrum), das auf die Entwicklung traditioneller Aspekte der Kampfpraxis (Budo) abzielt. Im Jahr 1995 wurde das Centre de Recherche Budo um das Institiut Tengu erweitert. Dieses Institut hat die organisatorischen Rahmenbedingungen für den Kampfkunst-Stil Tengu Ryu oder Tengu-no-michi (wörtlich „Weg des Tengu“) geschaffen, der durch Roland Habersetzer entwickelt wurde. O-Sensei Ogura Tsuneyoshi (1924-2007), von der Gembukai Schule aus Kofu, verlieh Roland Habersetzer im Jahr 2006 den 9. Dan, verbunden mit dem Titel des Hanshi und des Soke, womit er Habersetzers Konzept der in Straßburg (Frankreich) entwickelten kriegerischen Technik, den Weg des Tengu, anerkannte. Dieser Grad und diese Titel wurden ein weiteres Mal durch den Karatemeister Otsuka Tadahiko (1940-2012) von der Kampfkunstschule Gojukensha in Tokyo bestätigt. Somit wurde letzlich das Lebenswerk des Menschen Roland Habersetzer mit seinem eigenen Weg des Tengu (Tengu-no-michi) legitimiert. Die japanischen und chinesischen Kampfkünste liegen und lagen Roland Habersetzer zeitlebens am Herzen. Obwohl er über ein so umfangreiches Können und Wissen verfügt, lebte er nicht von den Kampfkünsten, sondern war als Lehrer für Geschichte und Geographie tätig. Er sagte einmal zu Alexander Callegari: „Wenn Sie etwas richtig lieben – dann machen Sie sich nicht davon abhängig“.',
    ],
  },
  {
    contentNav: true,
    customClass: 'Ogura',
    titleNo1_L1: 'Ogura Tsuneyoshi',
    classTitleNo1_L1: 'red center',
    //heightContent1: 'h26',
    contentNo1:
      'Ogura Tsuneyoshi (* 1924; † 2007) war ein japanischer Karatemeister (Shotokan, Gōju ryū) aus Kōfu, 10. Dan. Ogura Tsuneyoshi war insbesondere Schüler von Gima Makoto und von Yamaguchi Gōgen. Gima Makoto übermittelte ihm die antiken Formen zahlreicher Kata mit ihren kriegerischen (Bunkai), energetischen und therapeutischen Anwendungen. 1944 gründete er die Gembukai-Schule (Gembukan dōjō) in Kōfu und in den 70er Jahren das Kokusai Karatedo Kobudo Sihikko Kyokai, die er zu entwickeln versuchte im Verlauf seiner zahlreichen Seminare in Frankreich wie in Europa und Zentralamerika. Ausgehend von einem Konzept, das schon von Yagi Meitoku entwickelt wurde, brachte Ogura Sensei eine Reihe von sechs Fukiyu-Kata heraus, die ein Training mit Partner ermöglichen (Futari-bunkai, San-nin-bunkai, Go-nin-bunkai), die er in der Folge bis auf zehn erhöhte. Ogura Tsuneyoshi gilt als ein „Meister im Schatten“, d.h. sein Wirken erfolgte vorwiegend im Verborgenen, unter Ausschluss der Öffentlichkeit, und sein Name ist in den offiziellen Genealogien des Karate selten zu finden.',
    pics: ['num10', 'num11', 'num12'],
    vids: [],
    //heightContent2: 'h31',
    contentNo2: [
      'Freund der letzten lebenden Karate- und Kobudo-Meister, von Sakagami Ryusho bis zu Matayoshi Shinpo, bedeutender Kalligraph, war er einer der allerletzten Empfänger der geschriebenen und mündlichen Quellen. Von 1973 an war er der letzte Lehrer von Roland Habersetzer gewesen, dem er 1992 den 8. Dan und dann 2006 den 9. Dan zuerkannte, mit dem Titel des Hanshi und dem des Sōke für sein eigenes Konzept der Kampfpraxis, den „Voie Tengu“ (Weg des Tengu, Tengu-no-michi), der sich auf drei Kompetenz-Bereiche aufteilt: Tengu Ryu Karate, Tengu Ryu Kobudo, Tengu Ryu Hojutsu. Pierre Portocarrero, dem Ogura Sensei gleichermaßen einen Shihan-Grad verliehen hat, hat sich entschieden in Frankreich die klassische Schule des Meisters von Kofu weiter zu verfolgen, die er Gembukan-tode-ryu genannt hat. Sein Sohn Ogura Hisanori hat seit 2007 die Leitung des Dojo von Kofu übernommen, wo er die Synthese lehrt, die von seinem Vater geschaffen wurde, das Gembukan Karate. Ogura Tsuneyoshi war auch Shinto-Priester. Darüber hinaus hat er einige Zeit bei den Yamabushi (er studierte also Ninjutsu vom Koga Ryu von Fujita Saiko) verbracht und wurde durch sie in das Shingon eingeführt, eine esoterische Strömung des Buddhismus. Der Umfang und der Eklektizismus seiner Kenntnisse in den Budo-Künsten war außerordentlich. Er hatte gleichermaßen die chinesischen Künste studiert, insbesondere den Stil des „weißen Kranich“ von Fujian (Baihequan) und das Kendo und Iaido von Omori Ryu praktiziert.',
    ],
  },
  {
    contentNav: true,
    customClass: 'Otsuka',
    titleNo1_L1: 'Otsuka Tadahiko',
    classTitleNo1_L1: 'red center',
    //heightContent1: 'h26',
    contentNo1:
      'Otsuka Tadahiko (* 1940; † 2012) war ein japanischer Karatemeister (Goju Ryu), 9. Dan, und Meister des Taiji Quan (Yang-Stil). Otsuka war der Kancho (Direktor/Leiter) der Kampfkunstschule Gojukensha und Referenzmeister im Goju Ryu, Naha-te und Shuri-te, direkter Schüler von Higa Yuchoko (1910–1994), der ihn zum Hanshi ernannt hatte. Er hatte das Karate-Studium 1955 in Tokio begonnen, unter der Leitung von Ichikawa Sosui, einem Experten des okinawanischen Zweigs des Gōjū-Ryū und Schüler von Izumigawa Kanki, der bei Higa Seiko (1898–1966) und Toyama Kanken (1888–1966) gelernt hatte. Im Jahr 1967 machte Ōhtsuka Tadahiko die Bekanntschaft von Yang-Ming-Shi (1924–2005), der in Japan unter dem Namen Yo Meiji bekannt ist. Dieser lehrte ihn die kleine Form des Taiji Quan, die 24er Form, die als Peking-Form bekannt ist, welche er seither weit verbreitet hat, zusammen mit seiner Ehefrau Ohtsuka Kazuko, in Japan, Australien und Europa. In der Folge hatte er gleichermaßen Bagua und Xingyi bei Wang Shu Chin aus Taiwan studiert, welcher mehrere Jahre in Japan zugebracht hatte. Im Alter von 30 Jahren wurde er einer der jüngsten 6. Dan in Japan. 1970 gründete er unter der Anleitung seines Lehrers, Ichikawa Sosui, seine eigene Organisation namens Gojukensha.',
    pics: ['num13', 'num14', 'num15'],
    vids: [],
    //heightContent2: 'h31',
    contentNo2: [
      'Dabei steht Go für hart, ju für weich, ken für Faust und sha für Ort des Lernens. Darüber hinaus haben ihn seine ständigen historischen Recherchen auf Okinawa und bis in die chinesische Provinz Fujian (wo er bei verschiedenen Gelegenheiten in Begleitung seiner Frau Experten des Taijiquan traf wie Zhu Tian Cai, Feng Zhiqiang und Chen Xiai Wang) dazu geführt sich weiter mit dem Text des Bubishi vertraut zu machen, dessen Existenz bis dahin nur ganz vertraulich und vage gewesen war. Von ihm stammt auch die erste vollständige Übersetzung des Bubishi aus dem Chinesischen ins Japanische. Er hat sich auch für den Erhalt und die Verbreitung alter Formen (klassische Kata mit chinesischem Ursprung, auch „Koryu Kata“ genannt) eingesetzt. Dazu gehören Formen wie z.B. Passai, Sochin, Unsu und Jitte. Die Formen haben allerdings sehr wenig mit den Formen wie sie heute in den großen japanischen Stilen wie z. B. im Shotokan ausgeführt werden gemeinsam. Die Übertragungslinie geht von Ohtsuka Tadahiko – Higa Yuchoko – Chibana Chōshin (Aragaki) – Itosu Anko bis auf Matsumura Sokon zurück. Ohtsuka Tadahiko lehrte auch besonders die Kata Happoren und Rokkishu, welche er vor dem Vergessenwerden bewahrt hat, und in Europa an seinen Schüler den französischen Kampfkunstexperten Roland Habersetzer, mit dessen Budoforschungszentrum (CRB) er intensive Beziehungen pflegte, weitergegeben hat.',
    ],
  },
]; */
