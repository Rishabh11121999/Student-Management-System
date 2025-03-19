import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../api";
import { Link } from "react-router-dom";
import "../App.css"; // Import the CSS file

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents(); // Refresh list
  };

  return (
    <div className="list"> 
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>
                <Link to={`/edit/${student.id}`}>Edit</Link> | 
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
