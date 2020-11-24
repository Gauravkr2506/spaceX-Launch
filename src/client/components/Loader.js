import React from "react";
import { connect } from "react-redux";

function Loader({ loader }) {
  return loader ? <div className="loader">Loading...</div> : null;
}

const mapStateToProps = ({ common }) => ({
  loader: common.loader,
});
export default connect(mapStateToProps)(Loader);
