import React from "react";
import notFound from "./../../src/assets/images/notFound.jpg";
import "./NotFound.scss";
const NotFound = (props) => {
  return (
    <React.Fragment>
      <div className="not-found-page">
        <img src={notFound} alt="Not found" className="not-found" loading="eager"/>
        <p className="not-found-message"> {props.message}</p>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
