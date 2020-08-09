import React, { Component } from "react";
import { Card } from "react-bootstrap";
import SimpleText from "../input/SimpleText";
import SimpleDate from "../input/SimpleDate";
import SimpleDropdown from "../input/SimpleDropdown";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateStudentUI } from "../../actions/studentActions";

class PersonalInformation extends Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(value, field) {
    this.props.updateStudentUI("personalInformation", field, value);
  }

  render() {
    const info = this.props.student.student.personalInformation;

    return (
      <Card.Body className="sfc-body">
        <SimpleDate
          label="Intake Date"
          handlerChange={this.handlerChange}
          field="intakeDate"
          value={info.intakeDate ? new Date(info.intakeDate) : undefined}
        ></SimpleDate>
        <SimpleDate
          label="Referral Date"
          handlerChange={this.handlerChange}
          field="referralDate"
          value={info.referralDate ? new Date(info.referralDate) : undefined}
        ></SimpleDate>
        <SimpleText
          label="Referred By"
          handlerChange={this.handlerChange}
          field="referredBy"
          value={info.referredBy}
        ></SimpleText>
        <SimpleText
          label="First Name"
          handlerChange={this.handlerChange}
          field="firstName"
          value={info.firstName}
        ></SimpleText>
        <SimpleText
          label="Last Name"
          handlerChange={this.handlerChange}
          field="lastName"
          value={info.lastName}
        ></SimpleText>
        <SimpleText
          label="Preferred Name"
          handlerChange={this.handlerChange}
          field="preferredName"
          value={info.preferredName}
        ></SimpleText>
        <SimpleText
          label="Address"
          handlerChange={this.handlerChange}
          field="address"
          value={info.address}
        ></SimpleText>
        <SimpleText
          label="City"
          handlerChange={this.handlerChange}
          field="city"
          value={info.city}
        ></SimpleText>
        <SimpleText
          label="State"
          handlerChange={this.handlerChange}
          field="state"
          value={info.state}
        ></SimpleText>
        <SimpleText
          label="Zipcode"
          handlerChange={this.handlerChange}
          field="zipcode"
          value={info.zipcode}
        ></SimpleText>
        <SimpleText
          label="County"
          handlerChange={this.handlerChange}
          field="county"
          value={info.county}
        ></SimpleText>
        <SimpleText
          label="Phone"
          handlerChange={this.handlerChange}
          field="phone"
          value={info.phone}
        ></SimpleText>
        <SimpleText
          label="Cellphone"
          handlerChange={this.handlerChange}
          field="cellphone"
          value={info.cellphone}
        ></SimpleText>
        <SimpleText
          label="Email"
          handlerChange={this.handlerChange}
          field="email"
          value={info.email}
        ></SimpleText>
        <SimpleDate
          label="Date of Birth"
          handlerChange={this.handlerChange}
          field="dateOfBirth"
          value={info.dateOfBirth ? new Date(info.dateOfBirth) : undefined}
        ></SimpleDate>
        <SimpleDropdown
          label="Gender"
          options={this.props.data.gender}
          activeKey={info.gender}
          placeholder="Select a gender"
          handlerChange={this.handlerChange}
          field="gender"
        ></SimpleDropdown>
        <SimpleDropdown
          label="Ethinicity Hispanic?"
          options={this.props.data.booleanResponses}
          activeKey={info.hispanic}
          handlerChange={this.handlerChange}
          field="hispanic"
        ></SimpleDropdown>
        {info.hispanic === "2" ? (
          <SimpleText
            label="Hispanic Specify"
            handlerChange={this.handlerChange}
            field="hispanicSpecify"
            value={info.hispanicSpecify}
          ></SimpleText>
        ) : null}
        <SimpleDropdown
          label="Race"
          options={this.props.data.race}
          activeKey={info.race}
          placeholder="Select a race"
          handlerChange={this.handlerChange}
          field="race"
        ></SimpleDropdown>
        <SimpleDropdown
          label="Relationship Status"
          options={this.props.data.relationshipStatus}
          activeKey={info.relationshipStatus}
          placeholder="Select a relationship status"
          handlerChange={this.handlerChange}
          field="relationshipStatus"
        ></SimpleDropdown>
      </Card.Body>
    );
  }
}

PersonalInformation.propTypes = {
  student: PropTypes.object.isRequired,
};

PersonalInformation.defaultProps = {
  student: { PersonalInformation: {} },
};

const mapStateToProps = (state) => ({
  student: state.student,
});

const mapDispatchToProps = {
  updateStudentUI,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInformation);
