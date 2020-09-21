import React from "react";
import { Row } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Preview1 from "../../assets/portfolio/project01/imbibe-2.png";
import Preview2 from "../../assets/portfolio/project02/galleria-1.png";
import Preview3 from "../../assets/portfolio/project03/slimepire.jpg";
import Preview4 from "../../assets/portfolio/project04/shakyknees.jpg";
import Preview5 from "../../assets/portfolio/project05/oak.png";
import Preview6 from "../../assets/portfolio/project06/hansel-1.png";
//Components
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: Preview1,
          title: "Imbibe",
          tag: "React",
          link: "http://imbibe.info/",
        },
        {
          id: "2",
          preview: Preview2,
          title: "Galleria Remixd",
          tag: "HTML, CSS, JS",
          link: "http://www.galleriaremixed.com/",

        },
        {
          id: "3",
          preview: Preview3,
          title: "Slimepire Game",
          tag: "C#",
          link: "https://simmer.io/@Gelli/~a91b5742-283c-6be0-d326-3495e65eadbb",
        },
        {
          id: "4",
          preview: Preview4,
          title: "Shaky Knees",
          tag: "HTML, CSS, JS",
          link: "http://mcmillandanny.tech/Sk/",
        },
        {
          id: "5",
          preview: Preview5,
          title: "OAK",
          tag: "HTML, CSS, JS",
          link: "http://oakokc.com/"
        },
        {
          id: "6",
          preview: Preview6,
          title: "Hansel and Gretel",
          tag: "HTML, CSS, JS",
          link: "http://mcmillandanny.tech/HanselProject/",
        },
      ],
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  };


  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <a key={project.id} target="_blank" rel="noopener noreferrer" href={project.link}><ProjectBox preview={project.preview}  title={project.title} tag={project.tag} /></a>
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="WORK SHOWCASE." />
          <Row>
          </Row>
          <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default Portfolio;
