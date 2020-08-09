import React, { Component } from "react";
import "../style/ActionBar.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updatePageName } from "../actions/commonActions";

class ActionBar extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.common.submitAction();
  }

  render() {
    const { pageName, submitButton } = this.props.common;

    return (
      <div className="action-bar">
        <span className="ab-page-title mr-auto">{pageName}</span>
        {submitButton === true ? (
          <span
            onClick={() => this.onSubmit()}
            className="ab-submit btn btn-info ml-auto"
          >
            Save
          </span>
        ) : null}
      </div>
    );
  }
}

ActionBar.propTypes = {
  common: PropTypes.object.isRequired,
  updatePageName: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  common: state.common,
});

export default connect(mapStateToProps, { updatePageName })(ActionBar);
