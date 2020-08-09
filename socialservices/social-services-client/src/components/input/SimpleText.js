import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../style/Student.css";

export default class SimpleText extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handlerChange(event.target.value, this.props.field);
  }

  render() {
    return (
      <label className="sfc-info">
        <div className="sfc-label">{this.props.label}</div>
        <input
          className={"sfc-text " + this.props.className || ""}
          type={this.props.inputType}
          defaultValue={this.props.value}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

SimpleText.propTypes = {
  className: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.string,
  handlerChange: PropTypes.func,
  field: PropTypes.string,
};

SimpleText.defaultProps = {
  className: "",
  inputType: "text",
  value: "",
};
