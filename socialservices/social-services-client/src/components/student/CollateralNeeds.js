import React, { Component } from "react";
import { Card } from "react-bootstrap";
import SimpleText from "../input/SimpleText";
import SimpleDate from "../input/SimpleDate";
import SimpleDropdown from "../input/SimpleDropdown";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateStudentUI } from "../../actions/studentActions";

class CollateralNeeds extends Component {
    constructor(props) {
        super(props);
        this.handlerChange = this.handlerChange.bind(this);
    }

    handlerChange(value, field) {
        this.props.updateStudentUI("collateralNeeds", field, value);
    }

    render() {
        const info = this.props.student.student.collateralNeeds;

        return (
            <Card.Body className="sfc-body">
                <SimpleDropdown
                    label="Do you have a steady source of emotional support from family and friends?"
                    options={this.props.data.booleanResponses}
                    activeKey={info.question_1}
                    handlerChange={this.handlerChange}
                    field="question_1"
                ></SimpleDropdown>
            </Card.Body>
        );
    }
}

CollateralNeeds.propTypes = {
    student: PropTypes.object.isRequired,
};

CollateralNeeds.defaultProps = {
    student: { CollateralNeeds: {} },
};

const mapStateToProps = (state) => ({
    student: state.student,
});

const mapDispatchToProps = {
    updateStudentUI,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollateralNeeds);