// import axios from "axios";

// const API_URL = "http://localhost:8080/api/students"; // Change this as per backend


// export const getStudents = () => axios.get(API_URL);
// export const getStudentById = (id) => axios.get(`${API_URL}/${id}`);
// export const addStudent = (student) => axios.post(API_URL, student);
// export const updateStudent = (id, student) => axios.put(`${API_URL}/${id}`, student);
// export const deleteStudent = (id) => axios.delete(`${API_URL}/${id}`);



import axios from "axios";

// Backend API URL
const API_URL = "http://localhost:8080/students";

// Get all students
export const getStudents = async () => {
    return await axios.get(API_URL);
};

// Get student by ID
export const getStudentById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

// Add student
export const addStudent = async (student) => {
    return await axios.post(API_URL, student);
};


// Update student
export const updateStudent = async (id, student) => {
    return await axios.put(`${API_URL}/${id}`, student);
};

// Delete student
export const deleteStudent = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
