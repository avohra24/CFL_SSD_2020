import React, { Component } from "react";
import { Card } from "react-bootstrap";
import SimpleText from "../input/SimpleText";
import SimpleDate from "../input/SimpleDate";
import SimpleDropdown from "../input/SimpleDropdown";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateStudentUI } from "../../actions/studentActions";

class OtherProviders extends Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(value, field) {
    this.props.updateStudentUI("otherProviders", field, value);
  }

  render() {
    const info = this.props.student.student.otherProviders;

    return (
      <Card.Body className="sfc-body">
        <SimpleText
          label="What other agencies are you working with?"
          handlerChange={this.handlerChange}
          field="whatOtherAgencies"
          value={info.whatOtherAgencies}
        ></SimpleText>
        <SimpleText
          label="What services do they provide you?"
          handlerChange={this.handlerChange}
          field="whatServicesDo"
          value={info.whatServicesDo}
        ></SimpleText>
        <SimpleDropdown
          label="Are you working with a case manager or receiving case management anywhere else?"
          options={this.props.data.booleanResponses}
          activeKey={info.areYouWorkingWith}
          handlerChange={this.handlerChange}
          field="areYouWorkingWith"
        ></SimpleDropdown>
        {info.areYouWorkingWith === "2" ? (
          <SimpleText
            label="Where?"
            handlerChange={this.handlerChange}
            field="qwhere"
            value={info.qwhere}
          ></SimpleText>
        ) : null}
        {info.areYouWorkingWith === "2" ? (
          <SimpleText
            label="With whom?"
            handlerChange={this.handlerChange}
            field="withWhom"
            value={info.withWhom}
          ></SimpleText>
        ) : null}
        <SimpleDropdown
          label="Are these services meeting your needs?"
          options={this.props.data.booleanResponses}
          activeKey={info.areTheseServices}
          handlerChange={this.handlerChange}
          field="areTheseServices"
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

OtherProviders.propTypes = {
  student: PropTypes.object.isRequired,
};

OtherProviders.defaultProps = {
  student: { OtherProviders: {} },
};

const mapStateToProps = (state) => ({
  student: state.student,
});

const mapDispatchToProps = {
  updateStudentUI,
};

export default connect(mapStateToProps, mapDispatchToProps)(OtherProviders);
