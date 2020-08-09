import React, { Component } from "react";
import { Card } from "react-bootstrap";
import SimpleText from "../input/SimpleText";
import SimpleDate from "../input/SimpleDate";
import SimpleDropdown from "../input/SimpleDropdown";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateStudentUI } from "../../actions/studentActions";

class Housing extends Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(value, field) {
    this.props.updateStudentUI("housing", field, value);
  }

  render() {
    const info = this.props.student.student.housing;

    return (
      <Card.Body className="sfc-body">
        <SimpleDropdown
          label="Do you have any problems with your current housing?"
          options={this.props.data.booleanResponses}
          activeKey={info.question_1}
          handlerChange={this.handlerChange}
          field="question_1"
        ></SimpleDropdown>
        <SimpleDropdown
          label="Is your housing safe and stable?"
          options={this.props.data.booleanResponses}
          activeKey={info.question_2}
          handlerChange={this.handlerChange}
          field="question_2"
        ></SimpleDropdown>
        <SimpleDropdown
          label="Is your housing in good repair, with adequate furniture and working appliances?"
          options={this.props.data.booleanResponses}
          activeKey={info.question_3}
          handlerChange={this.handlerChange}
          field="question_3"
        ></SimpleDropdown>
        <SimpleDropdown
          label="Do you have a working phone?"
          options={this.props.data.booleanResponses}
          activeKey={info.question_4}
          handlerChange={this.handlerChange}
          field="question_4"
        ></SimpleDropdown>
        <SimpleDropdown
          label="Do you already have or need assistance paying rent?"
          options={this.props.data.booleanResponses}
          activeKey={info.question_5}
          handlerChange={this.handlerChange}
          field="question_5"
        ></SimpleDropdown>
        <SimpleText
          label="Comments"
          handlerChange={this.handlerChange}
          field="comments"
          value={info.comments}
        ></SimpleText>
      </Card.Body>
    );
  }
}

Housing.propTypes = {
  student: PropTypes.object.isRequired,
};

Housing.defaultProps = {
  student: { EnglishFluency: {} },
};

const mapStateToProps = (state) => ({
  student: state.student,
});

const mapDispatchToProps = {
  updateStudentUI,
};

export default connect(mapStateToProps, mapDispatchToProps)(Housing);
