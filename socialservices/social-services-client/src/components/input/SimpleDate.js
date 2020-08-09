import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../style/Student.css";
import DatePicker from "react-date-picker";
import moment from "moment";

export default class SimpleDate extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    date = moment(date).format(this.props.momentFormat);
    this.props.handlerChange(date, this.props.field);
  }

  render() {
    return (
      <label className="sfc-info">
        <div className="sfc-label">{this.props.label}</div>
        <DatePicker
          className={"sfc-text " + this.props.className || ""}
          onChange={this.handleChange}
          value={this.props.value}
          clearIcon={null}
        />
      </label>
    );
  }
}

SimpleDate.prototypes = {
  className: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.string,
  handlerChange: PropTypes.func,
  field: PropTypes.string,
  format: PropTypes.string,
};

SimpleDate.defaultProps = {
  className: "",
  inputType: "text",
  value: undefined,
  momentFormat: "MM-DD-yyyy",
};
