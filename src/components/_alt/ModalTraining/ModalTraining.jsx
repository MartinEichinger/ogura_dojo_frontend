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

    this.debug = true;
    this.apdx = 'Train';

    // CONTENT
    this.contentWir = {
      title: 'Wir',
      text: `Der Name unseres Dojo OGURA nimmt Bezug auf Ogura Tsuneyoshi(* 1928; † 2007), japanischer Karatemeister (Shotokan, Goju ryu) aus Kofu, 10. Dan. Dieser war ab dem Jahr 1973 der Lehrer des französischen Kampfkunstexperten Roland Habersetzer. Der Name unseres Dojo soll die Wertschätzung für den Menschen Ogura und seinen „Schüler“ Habersetzer zum Ausdruck bringen. Die Karateka des OGURA DOJO sind Mitglied im Budoforschungszentrum Tengu Institut von Shihan Roland Habersetzer und betreiben die Stilrichtung Tengu ryu. Neben dem Karate bieten wir in unserem Dojo TaiJi und QiGong an. Im TaiJi trainieren wir Faust, Fächer und Schwertformen – Schwerpunktmäßig aus dem Yang-Stil. Die Formen die wir im QiGong üben stammen überwiegend von dem chinesichen Professor Ding HongYu. Das OGURA DOJO ist organisatorisch beim Turn- und Sportverein Traunreut angegliedert. Unsere Abteilungsleiter ist Hans-Jürgen Groiß.`,
      tabs: [
        {
          head1: 'Johann Boxler',
          head2: '1ter Kassier',
          head3: '3. KYU Tengu Ryu',
          img: 'url(./avatar_nopic.jpg)',
          img_pos: '50% 30%',
        },
        {
          head1: 'Alex Callegari',
          head2: 'Trainer Karate.Taiji.Qigong',
          head3: '6. DAN Tengu Ryu',
          img: 'url(./training_pic_2.jpg)',
          img_pos: '50% 30%',
        },
        {
          head1: 'Ulrike Geuder',
          head2: '2ter Vorstand.Trainerin Karate',
          head3: '5. DAN Tengu Ryu',
          img: 'url(./training_pic_3.jpg)',
          img_pos: '50% 10%',
        },
        {
          head1: 'Hans-Jürgen Groiß',
          head2: '1ter Vorstand',
          head3: '2. KYU Tengu Ryu',
          img: 'url(./avatar_nopic.jpg)',
          img_pos: '50% 30%',
        },
        {
          head1: 'Alex Hetzner',
          head2: 'Schriftführer',
          head3: '1. KYU Tengu Ryu',
          img: 'url(./avatar_nopic.jpg)',
          img_pos: '50% 30%',
        },
        {
          head1: 'Wolfgang Liedke',
          head2: '2ter Kassier',
          head3: '4. KYU Tengu Ryu',
          img: 'url(./avatar_nopic.jpg)',
          img_pos: '50% 30%',
        },
        {
          head1: 'Erika Rudl',
          head2: 'Trainerin Karate.Kinder.Jugendliche',
          head3: '1. DAN Tengu Ryu',
          img: 'url(./avatar_nopic.jpg)',
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
            time: '18:20 - 20:00',
            topic: 'Taiji',
          },
          {
            day: 'Montag',
            time: '20:00 - 22:00',
            topic: 'Karate (Erwachsene)',
          },
          {
            day: 'Mittwoch',
            time: '17:00 - 18:30',
            topic: 'Karate (Kinder/Jugendliche)',
          },
          {
            day: 'Freitag',
            time: '20:00 - 22:00',
            topic: 'Karate (Erwachsene)',
          },
        ],
      },
      map: {
        title: 'Wo?',
        address: 'Sonnenschule Traunreut - Martin-Luther-Straße - 83301 Traunreut',
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
            heading: ['TuS Traunreut', '(Karate und Taiji)'],
            listing: ['unter 18J: 60€/J', 'über 18J: 120€/J'],
          },
          {
            heading: ['Verband CRB', '(Tengu Ryu)'],
            listing: ['Neuaufnahme: 31€/J', 'Verlängerung: 22€/J'],
          },
          {
            heading: ['Verband DKV', '(Karate)'],
            listing: ['18€/J für Kinder (bis 13J)', '23€/J für Jugendl. & Erwachsene'],
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
    if (this.debug) console.log('ModalTraining/render', this.stats, this.props);
    this.updateHx();

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
