/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalTrainingTraining from './ModalTrainingTraining';
import ModalTrainingWir from './ModalTrainingWir';
import ModalClassBasis from './ModalTraining.controls';
import '../animation.css';

class ModalTraining extends ModalClassBasis {
  constructor(props) {
    super(props);

    this.state = {
      width: 1440,
      height: 1200,
    };

    this.form = React.createRef();
    this.stats = {
      allPages: ['Training', 'Wir'],
      page: this.props.page,
      animated: 0,
    };

    this.debug = false;
    this.apdx = 'Train';

    // CONTENT
    this.contentWir = {
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
          head3: '6. Kyu Tengu Ryu',
          img: 'url(./wir_pic_jn.jpg)',
          img_pos: '50% 30%',
        },
        {
          head1: 'Erika Rudl',
          head2: 'Trainerin Karate Kinder Jugendliche',
          head3: '2. DAN Tengu Ryu',
          img: 'url(./wir_pic_er.jpg)',
          img_pos: '50% 30%',
        },
        {
          head1: 'Martin Eichinger',
          head2: 'Webseite',
          head3: '3. DAN Tengu Ryu',
          img: 'url(./wir_pic_me.jpg)',
          img_pos: '50% 30%',
        },
      ],
    };

    this.contentTraining = {
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
            listing: ['unter 18J: 60€ und über 18J: 120€'],
          },
          {
            heading: ['TuS - Abt. Karate/Taiji: '],
            listing: ['20€'],
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

    this.contentNav = {
      upDown: 1,
      navItems: ['Training', 'Wir'],
    };
  }

  render() {
    if (this.debug) console.log('ModalTraining/render', this.state.width, this.state.height);
    this.props.colors.bgTheme = this.props.colors.bgRed;
    this.props.colors.bgTheme50 = this.props.colors.bgRed50;
    this.props.colors.typoTheme = this.props.colors.typoRed;

    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="idModalTraining"
          tabIndex="-1"
          aria-labelledby="ModalTrainingLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
        >
          <div
            className="modal-dialog d-flex flex-row-reverse align-items-center"
            id="modalDialog"
            css={this.style}
          >
            <div className="modal-content">
              <div className="modal-row">
                <ModalInNavigation
                  clickUpDown={this.clickUpDown}
                  nextItem={this.nextItem}
                  colors={this.props.colors}
                  config={this.contentNav}
                  mq={this.mq}
                  apdx={this.apdx}
                  type="TR"
                />
                <div className="content">
                  <ModalTrainingTraining
                    contentTraining={this.contentTraining}
                    mq={this.mq}
                    colors={this.props.colors}
                  />
                  <ModalTrainingWir
                    contentWir={this.contentWir}
                    mq={this.mq}
                    colors={this.props.colors}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalTraining;
