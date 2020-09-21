import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/danny-1.jpg";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT ME." />
      <p className="font12">
      Some tools I develop in are React, Wordpress, and Node.js. <br></br>Along with HTML/CSS and of course JS, I am also very comfortable with SCSS, GIT, and NPM. 
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Luke Skywalker" job="Web designer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
