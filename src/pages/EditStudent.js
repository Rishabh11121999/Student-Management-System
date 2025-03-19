import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStudentById, updateStudent } from "../api";
import StudentForm from "../components/StudentForm";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const response = await getStudentById(id);
      setStudent(response.data);
    };
    fetchStudent();
  }, [id]);

  const handleSubmit = async (updatedStudent) => {
    await updateStudent(id, updatedStudent);
    navigate("/");
  };

  return (
    <div className="list"> 
      <h2>Edit Student</h2>
      {student && <StudentForm initialData={student} onSubmit={handleSubmit} />}
    </div>
  );
};

export default EditStudent;
