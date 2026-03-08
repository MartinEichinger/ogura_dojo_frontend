import styled from 'styled-components';
import BlogNav from '../BlogNav/BlogNav';
import BlogEntry from '../BlogEntry/BlogEntry';
import { IBlogNav, IBlogData } from './ModalBlog';

var dataReady = false;

const ModalCompL1Blog = ({ configBlogNav, blogs }: { configBlogNav: IBlogNav; blogs: IBlogData[] }) => {
  const debug = false;

  if (blogs.length > 0) dataReady = true;
  if (debug) console.log('ModalComp_L1_Blogs: ', blogs, blogs.length, dataReady);

  return (
    <ModalCol className="modal-col">
      <h1 className="bigger">{configBlogNav.title}</h1>

      <BlogNav filterProps={configBlogNav} />
      <div className="table scroll_">
        {dataReady && <BlogEntry blogs={blogs} filterState={configBlogNav.filterState} />}
      </div>
    </ModalCol>
  );
};

const ModalCol = styled.div`
  grid-row: 2;
  grid-column: 1;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-template-rows: auto 1fr auto 1fr auto;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr;

  ${(props) => props.theme.breakpoints.mq[2]} {
    // bis 960 px
    grid-template-columns: 0.5fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.5fr;
  }

  ${(props) => props.theme.breakpoints.mq[1]} {
    // bis 600 px
    grid-template-columns: 0.2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.2fr;
  }

  ${(props) => props.theme.breakpoints.mq[0]} {
    // bis 400px
    grid-template-columns: 0.1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.1fr;
  }

  & h1 {
    grid-column: 2/-1;
    grid-row: 1;
    max-height: calc(20vh - 4px);
    box-sizing: border-box;
    font-size: calc(5rem + 2.5vw);
    margin-bottom: 1vh;
    color: ${(props) => props.theme.colors.bgGrey};
    text-shadow:
      ${(props) => props.theme.colors.bgRed} 2px 0 0,
      ${(props) => props.theme.colors.bgRed} 0 2px 0,
      ${(props) => props.theme.colors.bgRed} -2px 0 0,
      ${(props) => props.theme.colors.bgRed} 0 -2px 0;
  }

  & .table {
    max-height: calc(70vh - 4px);
    grid-column: 2/12;
    grid-row: 5;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));

    ${(props) => props.theme.breakpoints.mq[2]} {
      // bis 960px
      max-height: calc(68vh - 4px);
    }

    ${(props) => props.theme.breakpoints.mq[1]} {
      // bis 600px
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
  }
`;

export default ModalCompL1Blog;
