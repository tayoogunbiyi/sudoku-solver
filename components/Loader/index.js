import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./style.css";

export default () => (
  <div className="spinner">
    <Loader type="Triangle" color="#d84054" height={375} width={400} />
  </div>
);
