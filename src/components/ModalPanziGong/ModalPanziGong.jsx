/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalClassBasis from './ModalPanziGong.controls';
import CompTxtStripTxt from '../CompTxtStripTxt/CompTxtStripTxt';
import CompTxtStrip2Txt from '../CompTxtStripTxt/CompTxtStrip2Txt';
import '../animation.css';

class ModalPanziGong extends ModalClassBasis {
  constructor(props) {
    super(props);

    this.state = {
      width: 1340,
      height: 300,
    };

    this.debug = true;
    this.apdx = 'PanziGong';

    this.form = React.createRef();
    this.stats = {
      navItems: ['PanziGong', 'Lehrer', 'Form'],
      page: this.props.page,
      allSubPages: [],
      subPage: '',
      animated: 0,
      upDown: 1,
    };

    this.contentPage1 = [
      {
        contentNav: false,
        customClass: '',
        titleNo1_L1: 'Panzi Gong',
        titleNo1_L2: '"Gesundheitsübung mit der Tellerdrehung"',
        heightContent1: 'h22',
        contentNo1:
          'Der menschliche Körper wird mit zunehmendem Alter immer schwächer und anfälliger. Dies ist ein Naturgesetz, das man nicht ändern kann. Aber man kann den Alterungsprozess nach hinten verschieben und somit die Geschwindigkeit des Alterns verlangsamen. Die Veranlagungen des Körpers wie z.B. Kraft, Geschwindigkeit, Sensibilität, Biegsamkeit, Scharfsinnigkeit hängen alle miteinander zusammen. Wenn z. B. die körperliche Biegsamkeit gut ist, dann sind die Bewegungsradien aller Gelenke im ganzen Körper dementsprechend groß. Muskeln, Sehnen und Bänder sind elastischer, können besser gedehnt werden. Diese Körperbewegungen sind als Grundlage für die Gesundheit sehr wichtig, daher auch sehr nützlich für jeden einzelnen Menschen.',
        pics: ['num1', 'num2', 'num3'],
        vids: [],
        titleNo2_L1: 'Die Besonderheiten und Wirkungen beim Panzi Gong',
        heightContent2: 'h22',
        contentNo2: [
          '1. Alle Bewegungen sind kreisförmig. Solche Bewegungen sind die beste Art der Bewegung beim Sport. Es wird weniger Energie und Kraft verbraucht. Die körperliche Wirkung ist groß. Es ist eine naturgemäße und sichere Art, Bewegungen auszuführen.',
          '2. Die Übung erweitert die körperliche Biegsamkeit und erhöht die Koordination der Bewegungen.',
          '3. Durch PanZi Gong kann man Gelenkkrankheiten vorbeugen und sie heilen. Es ist insbesondere für Berufstätige geeignet, die lange sitzen oder stehen müssen, die einförmige Bewegungen ausführen, aber auch für ältere Menschen.',
          '4. Die Übungen sind einfach zu erlernen. Man braucht nicht viel Platz, und der Zeitaufwand ist gering.',
          '5. PanZi Gong ergänzt TaiJi Quan. TaiJi Quan fordert z.B. „Zhong Zheng An Shu“ - gerade, senkrechte, entspannte Haltung von Kopf und Körper. Der Blick bleibt hauptsächlich auf Augenhöhe. Beim Pan Zi Gong dagegen übt man biegende und beugende Bewegungen mit verschiedenen Winkeln. So bekommt jeder Körperteil, jedes Gelenk einen „besonderen Reiz“ und wird durch die Übung trainiert.',
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
        titleNo1_L1: 'Form',
        classTitleNo1_L1: 'green center',
        heightContent1: 'h26',
        contentNo1:
          'Der Chiemgauer TaiJi und QiGong Lehrer Alexander Callegari hat die Form 2009, bei seinem Lehrer Prof. Ding HongYu, in China gelernt.  Callegari gab die Form des PanZi Gong das erste Mal im August 2012 auf der Mettnau (Radolfzell/Deutschland) weiter. Im Rahmen der METTNAU TaiJi und QiGong-Tage, die der damalige sportliche Leiter der Mettnau-Kur Richard Geitner organisiert hat, wurde die Form einem breitem Publikum vorgestellt. Richard Geitner und Alexander Callegari sind beide Schüler von Prof. Ding. Das Video entstand im März 2013 und soll die Übenden, ebenso wie das Buch, bei der Ausführung der Form unterstützen. Damit die Menschen einen möglichst großen Nutzen für ihre Gesundheit daraus ziehen können.',
        pics: ['num7', 'num8', 'num9'],
        vids: ['https://www.youtube.com/embed/yiFe5XYRFX8'],
        heightContent2: 'h31',
        classTitleNo2_L1: 'green left',
        titleNo2_L1: ['Die Übungen', 'Stellungen'],
        contentNo2: [
          [
            '1. Auf der Erde fest stehen, den Himmel über dem Kopf',
            '2. Sonne und Mond schauen einander an',
            '3. Den Teller in Richtung des kleinen Fingers drehen',
            '4. Den Teller in Richtung des Daumens drehen',
            '5. Der Phönix dreht sich wirbelnd',
            '6. Zwei Drachen spielen im Wasser',
            '7. Den Vogel in den Wald zurückschicken',
            '8. Yin und Yan ausgleichen',
          ],
          [
            '1. KailiBu - Schulterbreiter Stand',
            '2. GongBu - Bogenschritt',
            '3. DingBu - T-Stellungen',
            '4. MaBu - Pferdeschritt',
          ],
        ],
      },
    ];
  }

  render() {
    if (this.debug)
      console.log('ModalPanziGong/render', this.state.width, this.state.height, this.props.colors);
    //this.loadStyles();
    //this.updateHxMKPG();
    this.props.colors.bgTheme = this.props.colors.bgGreen;
    this.props.colors.bgTheme50 = this.props.colors.bgGreen50;
    this.props.colors.typoTheme = this.props.colors.typoGreen;

    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="idModalPanziGong"
          tabIndex="-1"
          aria-labelledby="ModalPanziGongLabel"
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
                  config={this.stats}
                  mq={this.props.mq}
                  apdx="PanziGong"
                  type="PG"
                />
                <div className="content">
                  <div className="csPanziGongPG">
                    <CompTxtStripTxt content={this.contentPage1} />
                  </div>
                  <div className="csLehrerPG d-none">
                    <CompTxtStripTxt content={this.contentPage2} />
                  </div>
                  <div className="csFormPG d-none">
                    <CompTxtStrip2Txt content={this.contentPage3} />
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

export default ModalPanziGong;

//d-flex flex-row h-100 align-items-center