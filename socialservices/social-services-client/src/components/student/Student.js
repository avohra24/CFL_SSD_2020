import React, { Component } from "react";
import StudentNavMenu from "./StudentNavMenu";
import { Accordion, Card } from "react-bootstrap";
import PersonalInformation from "./PersonalInformation";
import ImmediateNeeds from "./ImmediateNeeds";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  updateSubmitButton,
  updatePageName,
} from "../../actions/commonActions";
import {
  addStudent,
  getStudent,
  reinitializeStudent,
} from "../../actions/studentActions";
import OtherProviders from "./OtherProviders";
import EnglishFluency from "./EnglishFluency";
import Housing from "./Housing";
import CollateralNeeds from "./CollateralNeeds";
import Income from "./income";

class Student extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { studentId } = this.props.student;
    this.props.updatePageName("Student");
    this.props.updateSubmitButton(true, this.onSubmit);
    if (studentId !== 0) {
      this.props.getStudent(studentId);
    }
  }

  componentWillUnmount() {
    console.log("hello");
    this.props.updateSubmitButton(false);
    this.props.reinitializeStudent();
  }

  onSubmit() {
    this.props.addStudent(this.props.student.student, this.props.history);
  }

  render() {
    const { initial } = this.props.common;
    const { loaded } = this.props.common;

    if (!loaded) {
      return <div></div>;
    }

    return (
        <div className="student-container">
          <StudentNavMenu></StudentNavMenu>

          <div className="student-form-container ml-auto">
            <Accordion
                activeKey={this.props.student.activeStudentSection}
                className="sfc-accordion"
            >
              <Card className="sfc-container">
                <Accordion.Collapse eventKey={0}>
                  <PersonalInformation data={initial}></PersonalInformation>
                </Accordion.Collapse>
              </Card>
              <Card className="sfc-container">
                <Accordion.Collapse eventKey={1}>
                  <ImmediateNeeds data={initial}></ImmediateNeeds>
                </Accordion.Collapse>
              </Card>
              <Card className="sfc-container">
                <Accordion.Collapse eventKey={2}>
                  <OtherProviders data={initial}></OtherProviders>
                </Accordion.Collapse>
              </Card>
              <Card className="sfc-container">
                <Accordion.Collapse eventKey={3}>
                  <EnglishFluency data={initial}></EnglishFluency>
                </Accordion.Collapse>
              </Card>
              <Card className="sfc-container">
                <Accordion.Collapse eventKey={4}>
                  <Housing data={initial}></Housing>
                </Accordion.Collapse>
              </Card>
              <Card className="sfc-container">
                <Accordion.Collapse eventKey={5}>
                  <CollateralNeeds data={initial}></CollateralNeeds>
                </Accordion.Collapse>
              </Card>
              <Card className="sfc-container">
                <Accordion.Collapse eventKey={7}>
                  <Income data={initial}></Income>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
    );
  }
}

Student.propTypes = {
  student: PropTypes.object.isRequired,
  common: PropTypes.object.isRequired,
  existing: PropTypes.bool.isRequired,
  updateSubmitButton: PropTypes.func.isRequired,
  addStudent: PropTypes.func.isRequired,
  updatePageName: PropTypes.func.isRequired,
};

Student.defaultProps = {
  existing: false,
};

const mapStateToProps = (state) => ({
  student: state.student,
  common: state.common,
});

const mapDispatchToProps = {
  updateSubmitButton,
  addStudent,
  updatePageName,
  getStudent,
  reinitializeStudent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);

