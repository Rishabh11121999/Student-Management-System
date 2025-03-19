import { useState, useEffect } from "react";
import "../App.css";

const StudentForm = ({ initialData, onSubmit }) => {
  const [student, setStudent] = useState(initialData || { name: "", email: "", phone: "" });

  useEffect(() => {
    if (initialData) {
      setStudent(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(student);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={student.phone} onChange={handleChange} placeholder="Phone" required />
      <button type="submit">Save</button>
    </form>
  );
};

export default StudentForm;
