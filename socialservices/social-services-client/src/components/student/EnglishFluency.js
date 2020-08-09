import React, { Component } from "react";
import { Card } from "react-bootstrap";
import SimpleText from "../input/SimpleText";
import SimpleDate from "../input/SimpleDate";
import SimpleDropdown from "../input/SimpleDropdown";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateStudentUI } from "../../actions/studentActions";

class EnglishFluency extends Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(value, field) {
    this.props.updateStudentUI("englishFluency", field, value);
  }

  render() {
    const info = this.props.student.student.englishFluency;

    return (
      <Card.Body className="sfc-body">
        <SimpleDropdown
          label="Do you have any difficulty understanding English?"
          options={this.props.data.booleanResponses}
          activeKey={info.question_1}
          handlerChange={this.handlerChange}
          field="question_1"
        ></SimpleDropdown>
        <SimpleDropdown
          label="Filling out forms in English?"
          options={this.props.data.booleanResponses}
          activeKey={info.question_2}
          handlerChange={this.handlerChange}
          field="question_2"
        ></SimpleDropdown>
        <SimpleDropdown
          label="Do you find it easier to talk to your doctor with someone translating for you?"
          options={this.props.data.booleanResponses}
          activeKey={info.question_3}
          handlerChange={this.handlerChange}
          field="question_3"
        ></SimpleDropdown>
        <SimpleDropdown
          label="Do you have any trouble making your own appointments, understanding medical instructions, getting what you need from a medical or social service agency?"
          options={this.props.data.booleanResponses}
          activeKey={info.question_4}
          handlerChange={this.handlerChange}
          field="question_4"
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

EnglishFluency.propTypes = {
  student: PropTypes.object.isRequired,
};

EnglishFluency.defaultProps = {
  student: { EnglishFluency: {} },
};

const mapStateToProps = (state) => ({
  student: state.student,
});

const mapDispatchToProps = {
  updateStudentUI,
};

export default connect(mapStateToProps, mapDispatchToProps)(EnglishFluency);
