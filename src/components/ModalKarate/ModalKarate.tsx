import styled, { ThemeContext } from 'styled-components';
import { useContext, useEffect } from 'react';
import { clickUpDown, nextItem, clickLeftRight, onMount } from '../../helper/navigation-helper';
import useGraphQLQuery from '../../hooks/useGraphQLQuery';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import CompTxtStripTxt from '../CompTxtStripTxt/CompTxtStripTxt';
import '../animation.css';
import { IPage } from '../ModalPanziGong/ModalPanziGong';

export interface IContentKarateInner {
  id: number;
  pages: IPage[];
}

export interface IContentKarate {
  content_karate: IContentKarateInner[];
}

export default function ModalKarate({ page, select }: { page: string; select: Function }) {
  const debug = true;

  const stats = {
    navItems: ['TenguRyu', 'Lehrer'],
    modal: 'Karate',
    page: page,
    allSubPages: ['Habersetzer', 'Ogura', 'Otsuka'],
    subPage: 'Habersetzer',
    animated: 0,
    upDown: 1,
  };
  const apdx = 'KT';

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

  /// USEMEMO
  var contentKarate: IContentKarate = useGraphQLQuery(query);
  var contentKaratePage: IPage[] = contentKarate?.content_karate[0].pages;

  // destructure
  var themeContext = useContext(ThemeContext)!;

  themeContext.colors.bgTheme = themeContext.colors.bgRed;
  themeContext.colors.bgTheme50 = themeContext.colors.bgRed50;
  themeContext.colors.typoTheme = themeContext.colors.typoRed;

  if (debug)
    console.log('ModalKarate/render', themeContext, contentKaratePage?.[0], contentKaratePage?.[1]);

  useEffect(() => {
    onMount({ stats, apdx, select });
    // eslint-disable-next-line
  }, [page]);

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
        <ModalDialog
          className="modal-dialog d-flex flex-row-reverse align-items-center"
          id="modalDialog"
        >
          <div className="modal-content">
            <div className="modal-row">
              <ModalInNavigation
                clickUpDown={(dir: string) => clickUpDown(dir, stats, apdx)}
                nextItem={(button: string) => nextItem(button, stats, apdx)}
                config={stats}
                apdx={apdx}
                type="KT"
              />
              <div className="content">
                <div className="csTenguRyuKT">
                  <CompTxtStripTxt content={contentKaratePage?.[0]} />
                </div>
                <div className="csLehrerKT d-none">
                  <CompTxtStripTxt
                    content={contentKaratePage?.[1]}
                    clickLeftRight={(dir: string) => clickLeftRight(dir, stats)}
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalDialog>
      </div>
    </>
  );
}

const ModalDialog = styled.div`
  width: 100vw;
  max-width: 1440px;
  height: 100vh;
  z-index: 1051;
  overflow: hidden;
  margin: 0 auto;

  & .modal-content {
    background-color: rgba(0, 0, 0, 0);
    border: none;

    & .modal-row {
      height: calc(100vh - 4px);
      margin: 2px;
      display: grid;
      grid-column-gap: 2px;
      grid-template-columns: 1fr 50px;
      grid-template-rows: 1fr 7fr 1fr;

      ${(props) => props.theme.breakpoints.mq[2]} {
        // bis 960 px
        grid-template-columns: 1fr 39px;
      }

      ${(props) => props.theme.breakpoints.mq[1]} {
        // bis 600 px
        grid-template-columns: 1fr 34px;
      }

      ${(props) => props.theme.breakpoints.mq[0]} {
        // bis 400px
        grid-template-columns: 1fr 29px;
      }

      & .content {
        height: 100%;
        grid-column: 1;
        grid-row: 2;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 6fr;

        & .csTenguRyuKT,
        .csLehrerKT {
          grid-row: 1;
          grid-column: 1;
          display: grid;
          grid-template-columns: auto;
          grid-template-rows: 6fr;
        }
      }
    }
  }
`;

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
