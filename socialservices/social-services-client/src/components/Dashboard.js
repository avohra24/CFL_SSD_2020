import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getStudents, existingStudent } from "../actions/studentActions";
import { updatePageName } from "../actions/commonActions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.loadStudent = this.loadStudent.bind(this);
  }

  componentDidMount() {
    this.props.updatePageName("Dashboard");
    this.props.getStudents();
  }

  loadStudent(id) {
    this.props.existingStudent(id, this.props.history);
  }

  render() {
    const { students } = this.props.student;
    const loaded = students.length === 0 ? false : true;

    if (!loaded) {
      return <div></div>;
    }

    const headers = Object.keys(students[0]);

    return (
      <div className="dashboard-container">
        <TableContainer component={Paper}>
          <Table className="dashboard-table" aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header} align="left">
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  {Object.keys(student).map((head) => (
                    <TableCell
                      component="th"
                      scope="row"
                      key={head}
                      align="left"
                      width={"auto"}
                      className={head === "firstName" ? "cell-clickable" : null}
                      onClick={
                        head === "firstName"
                          ? () => this.loadStudent(student.id)
                          : null
                      }
                    >
                      {student[head]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  common: PropTypes.object.isRequired,
  student: PropTypes.object.isRequired,
  getStudents: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  common: state.common,
  student: state.student,
});

const mapDispathToProps = {
  getStudents,
  updatePageName,
  existingStudent,
};

export default connect(mapStateToProps, mapDispathToProps)(Dashboard);
