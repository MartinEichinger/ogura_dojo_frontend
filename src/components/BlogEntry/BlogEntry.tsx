import styled from 'styled-components';
import { ButtonGroup } from '../CompButtonGroup/CompButtonGroup';
import { IBlogData } from '../ModalBlog/ModalBlog';

const BlogEntry = ({ blogs, filterState }: { blogs: any; filterState: string }) => {
  const debug = false;
  const backendPath = process.env.REACT_APP_BACKEND_PATH!;

  if (debug) console.log('BlogEntry: ', blogs);

  return (
    <>
      {blogs.map((item: IBlogData, i: number) => {
        return filterState === 'Alle' || item.translations?.[0].category === filterState ? (
          <BlogCard className="blog-card d-flex flex-column" key={i}>
            <div className="d-flex flex-row justify-content-between align-items-baseline">
              <h5 className="text-center w-100 green regular">
                {item.translations?.[0]?.date} +++ {item.translations?.[0]?.tags}
              </h5>
            </div>
            <div className="body d-flex flex-row">
              <div
                style={{
                  backgroundImage: `url("${backendPath}/assets/${item.picture?.id}")`,
                  backgroundPosition: item.picture_position,
                }}
                className="image"
              ></div>
              <div className="text d-flex flex-column justify-content-center">
                <h4 className="text-center green">{item.translations?.[0]?.category}</h4>
                <p className="linie text-center"></p>
                <h2 className="text-center smaller">{item.translations?.[0]?.headline}</h2>
                <p className="linie text-center"></p>
                <p className="text-center small">{item.translations?.[0]?.content}</p>
              </div>
            </div>
            <BlogButtonGroup
              links={[`${backendPath}/assets/${item.file?.id}`, item.website, item.video]}
            />
          </BlogCard>
        ) : (
          ''
        );
      })}
    </>
  );
};

const BlogCard = styled.div`
  font-family: Lato, sans-serif;
  padding: 1vw;
  ${(props) => props.theme.breakpoints.mq[1]} {
    // bis 600px
    width: 100%;
  }

  & h5 {
    font-size: 0.875rem;
    padding: 0;
    ${(props) => props.theme.breakpoints.mq[3]} {
      // bis 1280
      font-size: calc(0.625rem + 0.3125vw);
    }
  }

  & .body {
    background-color: ${(props) => props.theme.colors.bgGrey};
    border-radius: 5px;
    height: 250px;
    max-height: 250px;
    position: relative;

    & .image {
      background-repeat: no-repeat;
      width: 50%;
      background-size: cover;
      border-radius: 5px 0 0px 5px;

      ${(props) => props.theme.breakpoints.mq[0]} {
        // bis 400px
        display: none;
      }
    }

    & .text {
      background-color: ${(props) => props.theme.colors.bgGrey};
      margin: 0;
      padding: 1vw;
      width: 50%;

      ${(props) => props.theme.breakpoints.mq[0]} {
        // bis 400px
        width: 100%;
      }

      & .linie {
        border-top: 1px solid black;
        width: 30px;
        margin: 5px auto;
      }
    }
  },
`;

const BlogButtonGroup = styled(ButtonGroup)`
  margin: -16px auto 0;
  width: inherit;
`;

export default BlogEntry;
