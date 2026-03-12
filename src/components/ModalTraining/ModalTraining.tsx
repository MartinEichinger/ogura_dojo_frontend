import styled, { ThemeContext } from 'styled-components';
import { useContext, useEffect } from 'react';
import { clickUpDown, nextItem, onMount } from '../../helper/navigation-helper';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalTrainingTraining from './ModalTrainingTraining';
import ModalTrainingWir from './ModalTrainingWir';
import '../animation.css';

export default function ModalTraining({ page, select }: { page: string; select: Function }) {
  const debug = false;

  const stats = {
    navItems: ['Training', 'Wir'],
    modal: 'Training',
    page: page,
    allSubPages: [],
    subPage: '',
    animated: 0,
    upDown: 1,
  };

  const apdx = 'TR';

  // CONTENT
  const contentWir = {
    title: 'Wir',
    text: `Der Name unseres Dojo OGURA nimmt Bezug auf Ogura Tsuneyoshi (* 1924; † 2007), japanischer Karatemeister (Shotokan, Goju ryu) aus Kofu, 10. Dan. Dieser war ab dem Jahr 1973 der Lehrer des französischen Kampfkunstexperten Roland Habersetzer. Der Name unseres Dojo soll die Wertschätzung für den Menschen Ogura und seinen „Schüler“ Habersetzer zum Ausdruck bringen. Die Karateka des OGURA DOJO sind Mitglied im Budoforschungszentrum Tengu Institut (CRB-IT) von Shihan Roland Habersetzer und betreiben die Stilrichtung Tengu ryu. Neben dem Karate bieten wir in unserem Dojo Taiji und Qigong an. Im Taiji trainieren wir Faust, Fächer und Schwertformen – Schwerpunktmäßig aus dem Yang-Stil. Die Formen die wir im Qigong üben stammen überwiegend von dem chinesichen Professor Ding Hongyu. Das OGURA DOJO ist organisatorisch beim Turn- und Sportverein Traunreut angegliedert. Unsere Abteilungsleiter ist Hans-Jürgen Groiß.`,
    tabs: [
      /*         {
          head1: 'Johann Boxler',
          head2: '1ter Kassier',
          head3: '3. KYU Tengu Ryu',
          img: 'url(./wir_pic_jb.jpg)',
          img_pos: '50% 30%',
        }, */
      {
        head1: 'Alexander Callegari',
        head2: 'Trainer Karate Taiji Qigong',
        head3: '7. DAN Tengu Ryu',
        img: 'url(./wir_pic_ac.jpg)',
        img_pos: '50% 30%',
      },
      /*         {
          head1: 'Ulrike Geuder',
          head2: '2ter Vorstand \u00b7 Trainerin Karate',
          head3: '5. DAN Tengu Ryu',
          img: 'url(./wir_pic_ug.jpg)',
          img_pos: '50% 10%',
        }, */
      {
        head1: 'Hans-Jürgen Groiß',
        head2: '1ter Vorstand',
        head3: '2. KYU Tengu Ryu',
        img: 'url(./wir_pic_hjg.jpg)',
        img_pos: '50% 30%',
      },
      {
        head1: 'Alex Hetzner',
        head2: '2ter Vorstand \u00b7 Schriftführer \u00b7 Trainer Karate Kinder Jugendliche',
        head3: '2. DAN Tengu Ryu',
        img: 'url(./wir_pic_ah.jpg)',
        img_pos: '50% 30%',
      },
      {
        head1: 'Wolfgang Lidtke',
        head2: '2ter Kassier',
        head3: '1. Kyu Tengu Ryu',
        img: 'url(./wir_pic_wl.jpg)',
        img_pos: '50% 30%',
      },
      {
        head1: 'Johannes Nolte',
        head2: '1ter Kassier',
        head3: '5. Kyu Tengu Ryu',
        img: 'url(./wir_pic_jn.jpg)',
        img_pos: '50% 30%',
      },
      {
        head1: 'Erika Rudl',
        head2: 'Trainerin Karate Kinder Jugendliche',
        head3: '3. DAN Tengu Ryu',
        img: 'url(./wir_pic_er.jpg)',
        img_pos: '50% 30%',
      },
      {
        head1: 'Martin Eichinger',
        head2: 'Webseite',
        head3: '4. DAN Tengu Ryu',
        img: 'url(./wir_pic_me.jpg)',
        img_pos: '50% 30%',
      },
    ],
  };

  const contentTraining = {
    title: 'Training',
    schedule: {
      title: 'Wann?',
      lesson: [
        {
          day: 'Montag',
          time: '18:30 - 20:00',
          topic: 'Taiji',
        },
        {
          day: 'Montag',
          time: '20:00 - 22:00',
          topic: 'Karate',
        },
        {
          day: 'Freitag',
          time: '20:00 - 22:00',
          topic: 'Karate',
        },
      ],
    },
    map: {
      title: 'Wo?',
      address: 'Werner-von-Siemens Mittelschule \u00b7 Martin-Luther-Straße \u00b7 83301 Traunreut',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667.9166880710771!2d12.595441829286242!3d47.962167896732744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU3JzQzLjgiTiAxMsKwMzUnNDUuNiJF!5e0!3m2!1sen!2sde!4v1619885924254!5m2!1sen!2sde',
    },
    text: {
      title: 'Was?',
      text: 'Zum Kennenlernen gibt es natürlich die Möglichkeit eines kostenlosen Probetrainings. Zum Training am Besten in lockerer Sportbekleidung erscheinen. Sportanzüge und Equipment kann bei Bedarf vor Ort bestellt werden.',
    },
    beitrag: {
      title: 'Beitrag?',
      items: [
        {
          heading: ['Jahresbeiträge'],
        },
        {
          heading: ['TuS Traunreut: '],
          listing: ['unter 18J: 80€ und über 18J: 150€'],
        },
        {
          heading: ['TuS - Abt. Karate/Taiji: '],
          listing: ['40€'],
        },
        {
          heading: ['Verband CRB (Tengu Ryu): '],
          listing: ['Neuaufnahme: 31€ und bei Verlängerung: 22€'],
        },
        {
          heading: ['Verband DKV (Karate): '],
          listing: ['18€ für Kinder (bis 13J) und 23€ für Jugendl. & Erwachsene'],
        },
      ],
    },
  };

  if (debug) console.log('ModalTraining/render');

  // destructure
  var themeContext = useContext(ThemeContext)!;
  themeContext.colors.bgTheme = themeContext.colors.bgRed;
  themeContext.colors.bgTheme50 = themeContext.colors.bgRed50;
  themeContext.colors.typoTheme = themeContext.colors.typoRed;

  useEffect(() => {
    onMount({ stats, apdx, select });
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <div
        className="modal fade"
        id="idModalTraining"
        tabIndex={-1}
        aria-labelledby="ModalTrainingLabel"
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
                type={apdx}
              />
              <div className="content">
                <ModalTrainingTraining contentTraining={contentTraining} />
                <ModalTrainingWir contentWir={contentWir} />
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
      }
    }
  }
`;
