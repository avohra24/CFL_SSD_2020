import React, { Component } from "react";
import { Card } from "react-bootstrap";
import SimpleText from "../input/SimpleText";
import SimpleDate from "../input/SimpleDate";
import SimpleDropdown from "../input/SimpleDropdown";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateStudentUI } from "../../actions/studentActions";

class ImmediateNeeds extends Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(value, field) {
    this.props.updateStudentUI("immediateNeeds", field, value);
  }

  render() {
    const info = this.props.student.student.immediateNeeds;

    return (
      <Card.Body className="sfc-body">
        <SimpleDropdown
          label="Do you or your family members need help with any urgent or pressing problem right now ?"
          options={this.props.data.booleanResponses}
          activeKey={info.familyMembersNeedHelp}
          handlerChange={this.handlerChange}
          field="familyMembersNeedHelp"
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

ImmediateNeeds.propTypes = {
  student: PropTypes.object.isRequired,
};

ImmediateNeeds.defaultProps = {
  student: { ImmediateNeeds: {} },
};

const mapStateToProps = (state) => ({
  student: state.student,
});

const mapDispatchToProps = {
  updateStudentUI,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImmediateNeeds);
