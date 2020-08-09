import axios from "axios";
import {
  GET_STUDENT,
  GET_STUDENTS,
  TOGGLE_STUDENT_SECTION,
} from "./action-types";
import {
  UPDATE_STUDENT_UI,
  EXISTING_STUDENT,
  NEW_STUDENT,
  REINITIALIZE_STUDENT,
} from "./action-types";

export const reinitializeStudent = () => async (dispatch) => {
  dispatch({
    type: REINITIALIZE_STUDENT,
  });
};

export const existingStudent = (id, history) => async (dispatch) => {
  dispatch({
    type: EXISTING_STUDENT,
    payload: id,
  });

  history.push(`/student`);
};

export const getStudent = (id) => async (dispatch) => {
  const res = await axios.get(`/student/${id}`);
  dispatch({
    type: GET_STUDENT,
    payload: res.data,
  });
};

export const getStudents = () => async (dispatch) => {
  const res = await axios.get("/student/all");

  dispatch({
    type: GET_STUDENTS,
    payload: res.data,
  });
};

export const toggleStudentSection = (activeKey) => async (dispatch) => {
  dispatch({
    type: TOGGLE_STUDENT_SECTION,
    payload: activeKey,
  });
};

export const updateStudentUI = (domain, field, value) => async (dispatch) => {
  dispatch({
    type: UPDATE_STUDENT_UI,
    payload: { domain: domain, field: field, value: value },
  });
};

export const addStudent = (student, history) => async (dispatch) => {
  await axios.post("/student", student);
  history.push("/dashboard");
};
