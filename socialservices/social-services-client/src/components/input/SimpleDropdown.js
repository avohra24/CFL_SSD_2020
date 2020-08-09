import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../style/Student.css";
import { Dropdown } from "react-bootstrap";

export default class SimpleDropdown extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);

    this.state = {
      placeholder: "Please select an option",
    };
  }

  onSelect(key) {
    this.setState({ placeholder: this.props.options[key] });
    this.props.handlerChange(key, this.props.field);
  }

  render() {
    const { options, activeKey } = this.props;

    return (
      <label className="sfc-info">
        <div className="sfc-label">{this.props.label}</div>
        <Dropdown
          className="sfc-dropdown"
          options={this.props.options}
          placeholder={this.props.placeholder}
          onSelect={(key) => this.onSelect(key)}
        >
          <Dropdown.Toggle
            id="dropdown-basic"
            className="simple-dropdown-toggle"
          >
            {activeKey ? options[activeKey] : this.state.placeholder}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.keys(options).map((key) => {
              return (
                <Dropdown.Item key={key} eventKey={key} value={key}>
                  {options[key]}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </label>
    );
  }
}

SimpleDropdown.prototypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  handlerChange: PropTypes.func,
};

SimpleDropdown.defaultProps = {
  className: "",
  placeholder: "Select an option",
};
