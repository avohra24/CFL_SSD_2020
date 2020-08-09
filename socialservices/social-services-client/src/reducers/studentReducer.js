import {
  GET_STUDENTS,
  TOGGLE_STUDENT_SECTION,
  UPDATE_STUDENT_UI,
  GET_STUDENT,
  EXISTING_STUDENT,
  NEW_STUDENT,
  REINITIALIZE_STUDENT,
} from "../actions/action-types";
import { STUDENT } from "../constants/student";

const initialState = {
  students: [],
  student: STUDENT,
  studentId: 0,
  activeStudentSection: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REINITIALIZE_STUDENT:
      return {
        ...state,
        studentId: 0,
        student: STUDENT,
        activeStudentSection: 0,
      };
    case EXISTING_STUDENT:
      return { ...state, studentId: action.payload };
    case NEW_STUDENT:
      return { ...state, studentId: 0 };
    case GET_STUDENT:
      return {
        ...state,
        student: action.payload,
      };
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    case TOGGLE_STUDENT_SECTION:
      return {
        ...state,
        activeStudentSection: action.payload,
      };
    case UPDATE_STUDENT_UI:
      return {
        ...state,
        student: {
          ...state.student,
          [action.payload.domain]: {
            ...state.student[action.payload.domain],
            [action.payload.field]: action.payload.value,
          },
        },
      };
    default:
      return state;
  }
}
