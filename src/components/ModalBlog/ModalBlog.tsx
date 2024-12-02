/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import useGraphQLQuery from '../../hooks/useGraphQLQuery';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalCompL1Blog from './ModalCompL1Blog';
import { clickUpDown, nextItem } from '../../helper/navigation-helper';
import '../animation.css';

export default function ModalBlog({ colors, mq }: { colors: any; mq: any }) {
  const debug = true;
  const style: any = {
    width: '100vw',
    maxWidth: '1440px',
    height: 'calc(100vh)',
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

        '& .modal-col': {
          gridRow: '2',
          gridColumn: '1',
          height: '100%',
          backgroundColor: 'white',
          borderRadius: '5px',
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto 1fr auto',
          gridTemplateColumns: '1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr',
          [mq[2]]: {
            // bis 960 px
            gridTemplateColumns: '0.5fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.5fr',
          },
          [mq[1]]: {
            // bis 600 px
            gridTemplateColumns: '0.2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.2fr',
          },
          [mq[0]]: {
            // bis 400px
            gridTemplateColumns: '0.1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.1fr',
          },

          '& h1': {
            gridColumn: '2/-1',
            gridRow: '1',
            maxHeight: 'calc(20vh - 4px)',
            boxSizing: 'border-box',
            fontSize: 'calc(5rem + 2.5vw)',
            marginBottom: '1vh',
            color: colors.bgGrey,
            textShadow: `2px 0 0 ${colors.bgRed}, 0 2px 0 ${colors.bgRed}, -2px 0 0 ${colors.bgRed}, 0 -2px 0 ${colors.bgRed}`,
          },

          '& i': {
            gridColumn: '11',
            gridRow: '1',
            display: 'grid',
            justifyContent: 'center',
            alignContent: 'center',
          },

          '& .modal-in-nav': {
            maxHeight: '10vh',
            boxSizing: 'border-box',
            gridColumn: '2/12',
            gridRow: '3',
            display: 'grid',
            justifyContent: 'space-evenly',
            gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))',

            [mq[2]]: {
              // bis 960px
              maxHeight: '12vh',
            },

            [mq[0]]: {
              // bis 400px
              gridTemplateColumns: 'repeat(auto-fit, minmax(125px, 1fr))',
            },

            '& .buttons': {
              padding: '0 15px',
              margin: '1vh 1vw',
              borderRadius: '25px',
              fontSize: 'calc(1rem + 0.75vw)',
              border: `0px`,

              '&.active': {
                backgroundColor: colors.bgRed,
                color: colors.bgWhite,
              },
            },
          },

          '& .table': {
            maxHeight: 'calc(70vh - 4px)',
            gridColumn: '2/12',
            gridRow: '5',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',

            [mq[2]]: {
              // bis 960px
              maxHeight: 'calc(68vh - 4px)',
            },

            [mq[1]]: {
              // bis 600px
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            },

            '& .blog-card': {
              fontFamily: 'Lato, sans-serif',
              padding: '1vw',

              [mq[1]]: {
                // bis 600px
                width: '100%',
              },

              '& h2': {
                // 16px to 24px
                fontSize: '1.5rem',

                [mq[3]]: {
                  // bis 1280
                  fontSize: 'calc(1rem + 0.625vw)',
                },
              },

              '& h4': {
                // 12px to 16px
                fontSize: '1rem',

                [mq[3]]: {
                  // bis 1280
                  fontSize: 'calc(0.75rem + 0.3125vw)',
                },
              },

              '& h5': {
                // 10px to 14px
                fontSize: '0.875rem',
                padding: '0',
                [mq[3]]: {
                  // bis 1280
                  fontSize: 'calc(0.625rem + 0.3125vw)',
                },
              },

              '& p': {
                // 12px to 16px
                fontSize: '1rem',

                [mq[3]]: {
                  // bis 1280
                  fontSize: 'calc(0.75rem + 0.3125vw)',
                },
              },

              '& .body': {
                backgroundColor: colors.bgGrey,
                borderRadius: '5px',
                height: '250px', //1'25vh',
                maxHeight: '250px',
                position: 'relative',

                '& .editButton': {
                  position: 'absolute',
                  top: '0%',
                  right: '0%',
                  margin: '5px',
                },

                '&.new-entry': {
                  display: 'grid',
                  //gridTemplateRows: 'auto 1fr auto 1fr auto',
                  gridTemplateColumns: '1fr 5fr 1fr 10fr 1fr 5fr 1fr 10fr 1fr',
                  justifyContent: 'start',
                  alignContent: 'space-around',

                  '& .pict-frame': {
                    gridColumn: '1/5',
                    gridRow: '1 / 5',
                    backgroundSize: 'cover',
                    opacity: '0.2',
                  },
                  '& .row_1': {
                    gridRow: '1',
                  },
                  '& .row_2': {
                    gridRow: '2',
                  },
                  '& .row_3': {
                    gridRow: '3',
                  },
                  '& .row_4': {
                    gridRow: '4',
                  },
                  '& .col_1': {
                    gridColumn: '2',
                  },
                  '& .col_2': {
                    gridColumn: '4',
                  },
                  '& .col_1_2': {
                    gridColumn: '2/4',
                  },
                  '& .col_3': {
                    gridColumn: '6',
                  },
                  '& .col_4': {
                    gridColumn: '8',
                  },
                  '& .overflow': {
                    overflow: 'auto',
                  },
                  '& p': {
                    margin: '0',
                    display: 'flex',
                    alignItems: 'center',
                  },
                },

                '.image': {
                  backgroundRepeat: 'no-repeat',
                  width: '50%',
                  backgroundSize: 'cover',
                  borderRadius: '5px 0 0px 5px',

                  [mq[0]]: {
                    // bis 400px
                    display: 'none',
                  },
                },

                '& .text': {
                  margin: '0',
                  padding: '1vw',
                  width: '50%',

                  [mq[0]]: {
                    // bis 400px
                    width: '100%',
                  },
                  '.linie': {
                    borderTop: '1px solid black',
                    width: '30px',
                    margin: '5px auto',
                  },
                },
              },

              '& .button': {
                //margin: '-16px auto 0',
                //textDecoration: 'none',

                '& button': {
                  fontSize: '12px !important',

                  '&.red': {
                    //backgroundColor: colors.bgRed,
                    '&:hover': {
                      //backgroundColor: colors.bgRed,
                    },
                  },

                  '&.green': {
                    backgroundColor: colors.bgGreen,
                    '&:hover': {
                      backgroundColor: colors.bgGreen,
                    },
                  },

                  '&:hover': {
                    //backgroundColor: colors.bgRed,
                    color: colors.bgWhite,
                    boxShadow: `10px 10px 25px 0px ${colors.shadowGrey}`,
                  },

                  '&:active': {
                    transform: 'scale(0.98)',
                    boxShadow: `0px 0px 5px 0px ${colors.shadowGrey}`,
                  },
                },
              },

              '& .cursor': {
                cursor: 'pointer',
              },
            },
          },
        },
      },
    },
  };

  const state = {
    width: 1440,
    height: 1200,
  };

  const stats = {
    allPages: ['1', '2'],
    page: 'Blog',
    animated: 0,
  };

  const configNav = {
    upDown: 0,
    pagItems: 4,
    navItems: [],
  };

  const content = {
    title: 'Blog',
    filterProps: ['Alle', 'Tengu', 'Taiji/Qigong', 'Bücher'],
  };

  const query = `query {
    ContentBlog {
        id
        category
        date
        detail
        file
        pictPos
        picture
        smallHeading
        title
        video
        website
    }
  }`;

  const contentBlog = useGraphQLQuery(query);

  if (debug) console.log('ModalBlog/Results', contentBlog);

  return (
    <>
      <React.Fragment>
        <div
          className="modal fade"
          id="idModalBlog"
          tabIndex={-1}
          aria-labelledby="ModalBlogLabel"
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
                  clickUpDown={clickUpDown}
                  nextItem={nextItem}
                  colors={colors}
                  config={configNav}
                  mq={mq}
                  apdx
                  type
                />
                {contentBlog && (
                  <ModalCompL1Blog colors={colors} content={content} blogs={contentBlog.ContentBlog} />
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
}

/* class ModalBlog extends ModalClassBasis {
  constructor(props) {
    super(props);

    this.state = {
      width: 1440,
      height: 1200,
    };

    this.debug = false;

    this.form = React.createRef();
    this.stats = {
      allPages: ['1', '2'],
      page: this.props.page,
      animated: 0,
    };

    this.configNav = {
      upDown: 0,
      pagItems: 4,
      navItems: [],
    };

    this.content = {
      title: 'Blog',
      filterProps: ['Alle', 'Tengu', 'Taiji/Qigong', 'Bücher'],
      blog: [
        {
          date: '07.04.2018',
          cat: 'Tengu',
          tags: 'Sensei Habersetzer, CRB, Tradition',
          header: 'Interview mit Sensei Habersetzer',
          detail:
            'Interview mit Sensei Habersetzer. Der französische Verlag BUDO Editions hat ein wahres Sammlerstück veröffentlicht.',
          img: 'karate_pic_1.jpg',
          imgPos: '70% 0%',
          link: '/blog/Rep_Interview_RolandHabersetzer_2018.pdf',
        },
        {
          date: '07.04.2018',
          cat: 'Taiji/Qigong',
          tags: 'Prof. Ding, Panzi Gong, Gesundheitsübung',
          header: 'Rezension Gesundheitsübung mit der Tellerdrehung',
          detail: 'Rezension erschienen im TAIJIQUAN & QIGONG JOURNAL.',
          img: 'main_panzigong.jpg',
          imgPos: '10% 0%',
          link: '/blog/Rep_Rezension_PanZiGong.pdf',
        },
        {
          date: '07.04.2018',
          cat: 'Taiji/Qigong',
          tags: 'Prof. Ding, Lungen Qigong, Gesundheitsübung',
          header: 'Lungen Qigong',
          detail:
            'Das Qigong, um das Qi zu stärken und die Lunge zu pflegen, wirkt sich vorbeugend und heilend auf Erkrankungen der Atmungsorgane aus.',
          img: 'blog_pic_1.jpg',
          imgPos: '50% 0%',
          link: '/blog/Pub_LungenQiGong.pdf',
        },
        {
          date: '07.04.2018',
          cat: 'Tengu',
          tags: 'Roland Habersetzer, Budo, Prinzipien',
          header: 'Ideen des Budos',
          detail:
            'Ideen des Budo, die von jedem wahren Meister der Kampfkunst studiert werden sollten...',
          img: 'blog_pic_2.jpg',
          imgPos: '60% 0%',
          link: '/blog/TenguRyu_IdeenBudo.pdf',
        },
      ],
    };

    
  }

  async componentDidMount() {
    if (this.debug) console.log('ModalBlog/compDidMount');
    document.getElementById('idModalBlog').addEventListener('shown.bs.modal', this.onShowModal);
    document.getElementById('idModalBlog').addEventListener('hidden.bs.modal', this.onHideModal);
    this.props.getBlogs();
  }

  componentWillUnmount() {
    if (this.debug) console.log('ModalBlogs/compWillUnMount');
    document.getElementById('idModalBlog').removeEventListener('shown.bs.modal', this.onShowModal);
    document.getElementById('idModalBlog').removeEventListener('hidden.bs.modal', this.onHideModal);
  }

  onShowModal = () => {
    if (this.debug) console.log('ModalBlogs/onShowModal');
    this.setState({ rerender: true });

    
  };

  render() {
    if (this.debug) console.log('ModalBlog/render', this.stats, this.props);
    this.isAuthenticated = this.props.isAuthenticated;

    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="idModalBlog"
          tabIndex="-1"
          aria-labelledby="ModalBlogLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
          onScroll={() => this.handleScroll()}
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
                  config={this.configNav}
                  mq={this.mq}
                />
                {/* eslint-disable-next-line */
/*<ModalComp_L1_Blog
                  colors={this.props.colors}
                  content={this.content}
                  mq={this.mq}
                  isAuthenticated={this.isAuthenticated}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogs: () => dispatch(getBlogs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBlog);*/
//export default ModalBlog;
