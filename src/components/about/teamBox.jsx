import React from "react";

import "./teamBox.scss";

const teamBox = (props) => (
  <div className="team__box flex-center">
    <img src={props.avatar} alt="person" />
    <div className="team__box-info">
    </div>
  </div>
);

export default teamBox;
