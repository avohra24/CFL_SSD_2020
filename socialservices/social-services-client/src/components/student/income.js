import React, { Component } from "react";
import { Card } from "react-bootstrap";
import SimpleText from "../input/SimpleText";
import SimpleDate from "../input/SimpleDate";
import SimpleDropdown from "../input/SimpleDropdown";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateStudentUI } from "../../actions/studentActions";

class Income extends Component {
    constructor(props) {
        super(props);
        this.handlerChange = this.handlerChange.bind(this);
    }

    handlerChange(value, field) {
        this.props.updateStudentUI("income", field, value);
    }

    render() {
        const info = this.props.student.student.income;

        return (
            <Card.Body className="sfc-body">
                <SimpleDropdown
                    label="Do you have steady source of income right now?"
                    options={this.props.data.booleanResponses}
                    activeKey={info.question_1}
                    handlerChange={this.handlerChange}
                    field="question_1"
                ></SimpleDropdown>
                <SimpleDropdown
                    label="Does your income meet your basic expenses?"
                    options={this.props.data.booleanResponses}
                    activeKey={info.question_2}
                    handlerChange={this.handlerChange}
                    field="question_2"
                ></SimpleDropdown>
                <SimpleDropdown
                    label="Any serious outstanding bills?"
                    options={this.props.data.booleanResponses}
                    activeKey={info.question_3}
                    handlerChange={this.handlerChange}
                    field="question_3"
                ></SimpleDropdown>
                <SimpleDropdown
                    label="Do you need any help applying for or keeping your benefits?"
                    options={this.props.data.booleanResponses}
                    activeKey={info.question_4}
                    handlerChange={this.handlerChange}
                    field="question_4"
                ></SimpleDropdown>
            </Card.Body>
        );
    }
}

Income.propTypes = {
    student: PropTypes.object.isRequired,
};

Income.defaultProps = {
    student: { Income: {} },
};

const mapStateToProps = (state) => ({
    student: state.student,
});

const mapDispatchToProps = {
    updateStudentUI,
};

export default connect(mapStateToProps, mapDispatchToProps)(Income);
