import styled, { ThemeContext } from 'styled-components';
import BookCard from '../Cards/BookCard';
import TextField from '../TextField/TextField';
import { useState, useContext } from 'react';
import Button from '../Button/Button';
import { sendData } from '../../helper/api-helper';
import PlusMinusButton from '../PlusMinusButton/PlusMinusButton';

const contentCards = [
  {
    img: 'panzigongII.jpg',
    author: 'Ding HongYu',
    short_title: 'Panzi Gong II',
    title: 'Gesundheitsübung mit der Tellerdrehung',
    sub_title: 'Panzi Gong II',
    content:
      'Die Gesundheitsübung mit der Tellerdrehung, die als PanZi Gong bezeichnet wird, erfreut sich in den letzten Jahren immer größerer Beliebtheit. Im Jahr 1998 entwickelte Professor Ding HongYu von der NanJing Universität (China) die erste Form des PanZi Gong. Im Jahr 2016 stellte er die zweite Form des PanZi Gong vor. Neben der ausführlichen Beschreibung und Darstellung der Form PanZi Gong II in drei Sprachen (Chinesisch, Deutsch und Englisch) werden auch die acht Übungen des PanZi Gong I als Übersicht dargestellt. Darüber hinaus erläutert Professor Ding in seinem Beitrag, wie man selber aktiv seine Gesundheit positiv beeinflussen kann. Das Buch hat 136 Seiten und ist mit zahlreichen Bildern illustriert.',
    reading_sample: 'leseprobe_panzigongII.pdf',
    publisher: 'Alexander Callegari',
    book_detail: '136 S. Geb. 24,80 €',
    iban: '978-3-96606-029-5',
    price: 24.8,
  },
  {
    img: 'panzigong.jpg',
    author: 'Ding HongYu',
    short_title: 'Panzi Gong',
    title: 'Gesundheitsübung mit der Tellerdrehung',
    sub_title: 'Panzi Gong - Teller Gong',
    content:
      'Der menschliche Körper wird mit zunehmendem Alter immer schwächer und anfälliger. Dies ist ein Naturgesetz, das man nicht ändern kann. Aber man kann den Alterungsprozess nach hinten verschieben und somit die Geschwindigkeit des Alterns verlangsamen. Die Veranlagungen des Körpers wie z.B. Kraft, Geschwindigkeit, Sensibilität, Biegsamkeit, Scharfsinnigkeit hängen alle miteinander zusammen. Wenn z. B. die körperliche Biegsamkeit gut ist, dann sind die Bewegungsradien aller Gelenke im ganzen Körper dementsprechend groß. Muskeln, Sehnen und Bänder sind elastischer, können besser gedehnt werden. Diese Körperbewegungen sind als Grundlage für die Gesundheit sehr wichtig, daher auch sehr nützlich für jeden einzelnen Menschen. PanZi Gong, die Gesundheitsübung mit der Tellerdrehung ist eine Übung, um die Biegsamkeit des Körpers zu steigern und Gelenkerkrankungen vorzubeugen.',
    reading_sample: 'leseprobe_panzigong.pdf',
    publisher: 'Alexander Callegari',
    book_detail: '100 S. Geb. 19,80 €',
    iban: '978-3-934785-60-1',
    price: 19.8,
  },
  {
    img: 'gun.jpg',
    author: 'Ding HongYu',
    short_title: 'Stock',
    title: 'Gesundheitsübung mit der Stockdrehung',
    sub_title: 'Üben mit Freude für ein glückliches und langes Leben',
    content:
      'Die Gesundheitsübung mit der Stockdrehung, kurz GunBang Cao genannt, ist eine aus zwei Übungen bestehende QiGong Form, die Professor Ding HongYu von der NanJing Universität (China) entwickelt hat. Professor Ding hat die QiGong-Entwicklung in Deutschland ab 1988 maßgeblich mit beeinflusst. Viele QiGong Lehrer in Deutschland haben bei ihm gelernt und unterrichten seine Formen.',
    reading_sample: 'leseprobe_gun.pdf',
    publisher: 'Alexander Callegari',
    book_detail: '164 S. Geb. 26,80 €',
    iban: '978-3-96606-011-0',
    price: 26.8,
  },
  {
    img: 'gesundheit.jpg',
    author: 'Ding HongYu',
    short_title: 'Gesundheit',
    title: 'Lebe die Gesundheit',
    sub_title: 'Das Leben braucht Bewegung',
    content:
      'Die Nieren schonen ‒ Das ist das Wichtigste für unsere Gesundheit und ein langes Leben Qi-Übungen im Alter für ein langes Leben Die hier vorliegenden Qi-Übungen im Alter für ein langes Leben sind speziell für ältere Men­schen konzipiert. Menschen nach einem Schlaganfall und viele andere, auch Jüngere, können diese Übungen zur Vorbeugung oder Rehabilitation nutzen. Neben der ausführlichen Darstel­lung der Übungen im Alter enthält das Buch ein Interview mit Professor Ding HongYu sowie seine wissenschaftlichen Erkenntnisse über Funktionen und Aufgaben der Nieren. Professor Ding (*1932) hat Sportwissenschaft und Sporttraining an der NanJing Universi­tät unterrichtet und in der Sportforschung gearbeitet. Während dieser langjährigen Tätigkeit hat Professor Ding Sport und Chinesische Medizin kombiniert. Er hat zur Vorbeugung gegen Krankheiten und Erhaltung der Gesundheit praktische und theoretische Ansatzpunkte erar­beitet. Auf der Grundlage von TaiJi und QiGong hat er viele gesundheitsfördernde Übungen und praktisch anwendbare Bewegungstrainings entwickelt und verfasst.',
    reading_sample: 'leseprobe_gesundheit.pdf',
    publisher: 'Alexander Callegari',
    book_detail: '196 S. Geb. 29,80 €',
    iban: '978-3-934785-76-2',
    price: 29.8,
  },
  {
    img: 'liebe.jpg',
    author: 'Ding HongYu',
    short_title: 'Acht Brokate',
    title: 'Liebe die Gesundheit',
    sub_title: 'Schätze das Leben',
    content:
      'Gesundheitsübungen haben in China eine sehr lange Tradition. Zu den bekanntesten QiGong Formen gehören die Acht Brokate. Professor Ding hat 1996 die Neuen Acht Brokate konzipiert. Sie stärken die Beine und die inneren Organe, aktivieren die Gehirnfunktion und vieles mehr. Zudem wird das Sehnen- und Knochen-QiGong, eine medizinische QiGong Form, im Buch ausführlich dargestellt. Es ist eigens für Erwachsene und Senioren konzipiert. Ziel ist es, den Alterungsprozeß zu verlangsamen, die Lebensdauer zu verlängern und die Selbständigkeit im Alltagsleben zu verbessern.',
    reading_sample: 'leseprobe_liebe.pdf',
    publisher: 'Alexander Callegari',
    book_detail: '152 S. Geb. 24,80 €',
    iban: '978-3-934785-75-5',
    price: 24.8,
  },
];

export interface IArticle {
  img: string;
  short_title: string;
  name: string;
  subname: string;
  amount: number;
  price: number;
}

export default function Bookshop() {
  const debug = true;

  const [articles, setArticles] = useState<IArticle[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const updateArticles = (newArticle: IArticle) => {
    console.log('update: ', articles);
    const idx = articles.findIndex(
      (item) => newArticle.name === item.name && newArticle.subname === item.subname
    );

    if (idx > -1) {
      var count1 = articles[idx].amount + newArticle.amount;
      count1 = count1 < 0 ? 0 : count1 >= 9 ? 9 : count1;
      setArticles(articles.map((item, i) => ({ ...item, amount: i === idx ? count1 : item.amount })));
    } else {
      setArticles([...articles, newArticle]);
    }
  };

  const orderArticles = () => {
    const order = articles.map(
      (item) =>
        item.name +
        ' - ' +
        item.subname +
        ' (' +
        item.price.toLocaleString('de-DE', {
          style: 'currency',
          currency: 'EUR',
          minimumFractionDigits: 2,
        }) +
        ' / ' +
        item.amount +
        'x )'
    );
    const query = `mutation {
      create_order_data_item(data: {
        email: "${name} - ${email}",
        order: "${order.join('<br/>')}",
        address: "${address.replace(/\n/g, '<br/>')}"
      })
      {
        id
      }
    }
    `;

    email && articles.length > 0 && sendData(query);
    setArticles([]);
    setName('');
    setEmail('');
    setAddress('');
  };

  // comment
  var themeContext = useContext(ThemeContext)!;
  var enabled = articles.length > 0 && name !== '' && email !== '' && address !== '';

  if (debug) console.log('Bookshop: ', articles, themeContext);

  return (
    <BookshopBody className="bookshopbody d-flex flex-row flex-wrap" articles={articles}>
      <div className="booklist d-flex flex-row flex-wrap scroll_">
        {contentCards.map((content: any, i: number) => {
          return <BookCard props={content} setArticle={updateArticles} keys={i} key={i} />;
        })}
      </div>
      {articles.length > 0 && (
        <div className="checkout">
          <CheckOut className="checkoutbody scroll_">
            <div className="article">
              <h3 className="blue">Artikel</h3>
              {articles.map((item, idx) => {
                console.log('item: ', item);
                return (
                  <Article className="d-flex flex-row justify-content-between" key={idx}>
                    <img src={`./${item.img}`} alt={item.name} />
                    <ArticleDetailShort className="name">
                      {item.short_title} -{' '}
                      {item.price.toLocaleString('de-DE', {
                        style: 'currency',
                        currency: 'EUR',
                        minimumFractionDigits: 2,
                      })}
                    </ArticleDetailShort>
                    <ArticleDetail className="name">
                      {item.name} - {item.subname} -{' '}
                      {item.price.toLocaleString('de-DE', {
                        style: 'currency',
                        currency: 'EUR',
                        minimumFractionDigits: 2,
                      })}
                    </ArticleDetail>
                    <PlusMinusButton
                      value={item.amount}
                      countUp={() => {
                        var updItem = { ...item };
                        updItem.amount = 1;
                        return updateArticles(updItem);
                      }}
                      countDown={() => {
                        var updItem = { ...item };
                        updItem.amount = -1;
                        return updateArticles(updItem);
                      }}
                    />
                    {/* <p className="amount">{item.amount}x</p> */}
                  </Article>
                );
              })}
            </div>
            <div className="shippingdata">
              <h3 className="blue">Versanddaten</h3>
              <div className="d-flex flex-row justify-content-between">
                <MyTextField
                  id="name"
                  label="Name *"
                  onChange={(e: any) => setName(e.target.value)}
                  value={name}
                  placeholder={'Max Mustermann'}
                  fullWidth
                />
                <MyTextField
                  id="email"
                  label="E-Mail *"
                  onChange={(e: any) => setEmail(e.target.value)}
                  value={email}
                  placeholder={'max.mustermann@mail.de'}
                  fullWidth
                />
              </div>
              <TextField
                id="address"
                label="Adresse *"
                multiline={true}
                fullWidth={true}
                onChange={(e: any) => {
                  console.log('address: ', e.target.value);
                  return setAddress(e.target.value);
                }}
                value={address}
                placeholder={'Schillerstraße 3, 84130 Dingolfing'}
              />
            </div>
            <div className="summary">
              <h3 className="blue">Zusammenfassung</h3>
              <div className="d-flex flex-row justify-content-between">
                <p className="article">Artikel: </p>
                <p className="cost">
                  {articles
                    .reduce((sum: number, num: any) => {
                      return sum + num.price * num.amount;
                    }, 0)
                    .toLocaleString('de-DE', {
                      style: 'currency',
                      currency: 'EUR',
                      minimumFractionDigits: 2,
                    })}
                </p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p className="article">Verpackung & Versand: </p>
                <p className="cost">
                  {(10).toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <h5 className="article">Gesamtbetrag: </h5>
                <h5 className="cost">
                  {(
                    articles.reduce((sum: number, num: any) => {
                      return sum + num.price * num.amount;
                    }, 0) + 10
                  ).toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 2,
                  })}
                </h5>
              </div>
            </div>
            <Button
              id="buy_now"
              color={themeContext.colors.bgGreen}
              onClick={orderArticles}
              disabled={!enabled}
            >
              Jetzt kaufen
            </Button>
          </CheckOut>
        </div>
      )}
    </BookshopBody>
  );
}

const ArticleDetailShort = styled.p`
  display: none;
  ${(props) => props.theme.breakpoints.mq[3]} {
    display: inline;
  }
`;

const ArticleDetail = styled.p`
  display: inline;
  ${(props) => props.theme.breakpoints.mq[3]} {
    display: none;
  }
`;

const MyTextField = styled(TextField)`
  width: 48%;
`;

const Article = styled.div`
  margin: 10px 0px;

  & img {
    height: 50px;
  }

  & .name {
    margin: 0 20px;
    width: 300px;
  }

  & .amount {
    margin: 0 20px;
  }
`;

const CheckOut = styled.div`
  margin: 20px;
  padding: 20px;
  height: calc(100% - 40px);
  width: calc(100% - 40px);
  border: 1px solid black;
  border-radius: 5px;

  & .shippingdata {
    & h3 {
      margin-bottom: 25px;
      margin-top: 25px;
    }
  }

  & .summary {
    margin-bottom: 50px;
    & h3 {
      margin-bottom: 25px;
      margin-top: 25px;
    }
  }

  & .article {
    & h3 {
      margin-bottom: 25px;
    }
  }

  & .cost {
    margin: 0 20px;
  }
`;

const BookshopBody = styled.div<{ articles: IArticle[] }>`
  height: calc(100% - 100px);

  & .booklist {
    height: 100%;
    width: ${(props) => (props.articles.length > 0 ? '60%' : '100%')};
  }

  & .checkout {
    height: 100%;
    width: ${(props) => (props.articles.length > 0 ? '40%' : '0%')};
  }
`;
