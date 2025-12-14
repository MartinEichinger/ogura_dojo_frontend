import styled from 'styled-components';
import useGraphQLQuery from '../../hooks/useGraphQLQuery';

interface IFooterContent {
  content_footer: {
    id: number;
    heading: string;
    group_item: {
      id: number;
      heading: string;
      subgroup_item: {
        title: string;
        target: string;
        link: {
          page: string;
          param: string;
        }[];
      }[];
    }[];
  }[];
}

const Footer = ({ select }: { select: Function }) => {
  // DEBUG
  const debug = true;

  const selectpage = (page?: string, param?: string) => {
    if (debug) console.log('Footer/selectpage', page, param);
    if (param === 'url') {
      window.open(page, '_blank');
    } else {
      select(param, page);
    }
  };

  const query = `query {
    content_footer {
        id
        heading
        group_item {
            id
            heading
            subgroup_item {
                title
                target
                link {
                    page
                    param
                }
            }
        }
    } 
  }`;

  const contentFooter: IFooterContent = useGraphQLQuery(query);

  if (debug) console.log('Footer/Results', contentFooter);

  return (
    <FooterBody className="Footer fixed-bottom mt-auto py-3">
      <div className="container-fluid">
        <div className="content d-flex flex-column align-items-center">
          <h2>{contentFooter?.content_footer?.[0].heading}</h2>
          <div className="body d-flex flex-row justify-content-around">
            {contentFooter?.content_footer?.[0].group_item?.map((entry, i) => {
              return (
                <div className="column d-flex flex-column align-items-start" key={i}>
                  <h3>{entry.heading}</h3>
                  {entry.subgroup_item.map((item, i) => {
                    return (
                      <button
                        className="small"
                        data-bs-toggle={item.target !== 'url' ? 'modal' : null}
                        data-bs-target={item.target}
                        onClick={() => selectpage(item.link?.[0]?.page, item.link?.[0]?.param)}
                        key={i}
                      >
                        {item.title.slice(0, 3) === 'pic' ? (
                          <img src={`./${item.title.slice(4, item.title.length)}`} alt="" />
                        ) : (
                          item.title
                        )}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </FooterBody>
  );
};

const FooterBody = styled.footer`
  color: ${(props) => props.theme.colors.typoGrey};
  font-familiy: Lato, cursive;
  padding: 20px;
  z-index: 1000;
  min-width: 390px;
  background-color: ${(props) => props.theme.colors.bgGrey};

  ${(props) => props.theme.breakpoints.mq[0]} {
    padding: 5px;
  }

  & .container-fluid {
    padding: 0px;

    & .content {
      & .body {
        width: 75%;

        ${(props) => props.theme.breakpoints.mq[2]} {
          width: 80%;
        }

        ${(props) => props.theme.breakpoints.mq[1]} {
          width: 90%;
        }

        ${(props) => props.theme.breakpoints.mq[0]} {
          width: 100%;
        }

        & img {
          margin-top: 15px;
          margin-right: 15px;
          height: 80px;
        }
      }
    }
  }

  & i {
    width: 48px;
    height: 48px;
  }

  & .column {
    margin-top: 15px;
    margin-right: 25px;
  }

  & button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    outline: none;
  }
`;

export default Footer;

/* const contentFooter = {
  heading: 'Ogura Dojo - Tengu Ryu Karate, Panzi Gong, Taiji Quan, Qigong im Herzen des Chiemgaus',
  group_item: [
    {
      heading: '',
      subgroup_item: [
        {
          title: 'pic:TusTraunreutLogo.avif',
          target: 'url',
          link: {
            page: 'https://www.tustraunreut.de/',
            param: 'url',
          },
        },
      ],
    },
    {
      heading: 'Ogura Dojo',
      subgroup_item: [
        {
          title: 'Training',
          target: '#idModalTraining',
          link: {
            page: 'Training',
            param: 'pageTraining',
          },
        },
        { title: 'Wir', target: '#idModalTraining', link: { page: 'Wir', param: 'pageTraining' } },
        { title: 'Blog', target: '#idModalBlog' },
        { title: 'Termine', target: '#idModalEvents' },
      ],
    },
    {
      heading: 'Tengu Ryu',
      subgroup_item: [
        {
          title: 'Tengu Ryu',
          target: '#idModalKarate',
          link: { page: 'TenguRyu', param: 'pageKarate' },
        },
        { title: 'Lehrer', target: '#idModalKarate', link: { page: 'Lehrer', param: 'pageKarate' } },
        {
          title: 'Centre de Recherche Budo',
          target: 'url',
          link: { page: 'http://tengu.fr/', param: 'url' },
        },
      ],
    },
    {
      heading: 'Panzi Gong',
      subgroup_item: [
        {
          title: 'Panzi Gong',
          target: '#idModalPanziGong',
          link: { page: 'PanziGong', param: 'pagePanziGong' },
        },
        {
          title: 'Lehrer',
          target: '#idModalPanziGong',
          link: { page: 'Lehrer', param: 'pagePanziGong' },
        },
        {
          title: 'Form',
          target: '#idModalPanziGong',
          link: { page: 'Form', param: 'pagePanziGong' },
        },
      ],
    },
           {
      heading: 'Taiji Quan',
      items: [{ title: '- leer -' }],
    },
    {
      heading: 'Qi Gong',
      subgroup_item: [
        {
          title: 'Qi Gong',
          target: '#idModalQiGong',
          link: { page: 'QiGong', param: 'pageQiGong' },
        },
        {
          title: 'Lehrer',
          target: '#idModalQiGong',
          link: { page: 'Lehrer', param: 'pageQiGong' },
        },
        {
          title: 'Form',
          target: '#idModalQiGong',
          link: { page: 'Form', param: 'pageQiGong' },
        },
      ],
    },
    {
      heading: 'Allgemein',
      subgroup_item: [
        { title: 'Impressum', target: '#idModalImpressum' },
        {
          title: 'Login',
          target: 'url',
          link: { page: 'https://ogura-dojo-cms.directus.app/', param: 'url' },
        },
      ],
    },
  ],
}; */
