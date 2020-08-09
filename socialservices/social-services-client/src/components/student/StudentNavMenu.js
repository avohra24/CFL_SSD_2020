import React, { Component } from "react";
import { STUDENT_NAV_MENU } from "../../constants/student-nav-menu";
import { Nav } from "react-bootstrap";
import StudentNavMenuElement from "./StudentNavMenuElement";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleStudentSection } from "../../actions/studentActions";

class StudentNavMenu extends Component {
  constructor(props) {
    super(props);

    this.onSelectHandler = this.onSelectHandler.bind(this);

    this.state = { active: 0 };
  }
  onSelectHandler(key) {
    this.props.toggleStudentSection(parseInt(key));
    this.setState({ active: key });
  }

  render() {
    const elements = STUDENT_NAV_MENU;

    return (
      <Nav
        className="student-nav-menu mr-auto"
        activeKey={this.state.active}
        onSelect={(key) => this.onSelectHandler(key)}
        as="ul"
      >
        {elements.map((element) => (
          <StudentNavMenuElement
            key={element.id}
            iden={element.id}
            handler={this.onSelectHandler}
            componentName={element.name}
            componentIcon={element.icon}
          ></StudentNavMenuElement>
        ))}
      </Nav>
    );
  }
}

StudentNavMenu.propTypes = {
  student: PropTypes.object.isRequired,
  toggleStudentSection: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps, { toggleStudentSection })(
  StudentNavMenu
);
