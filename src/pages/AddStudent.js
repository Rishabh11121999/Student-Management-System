import { useState } from "react";
import { addStudent } from "../api";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const student = { name, email, phone }; 
      await addStudent(student);

      
      setMessage("Student added successfully!");

      
      setName("");
      setEmail("");
      setPhone("");

      
      setTimeout(() => setMessage(""), 3000);

    } catch (error) {
      console.error("Error adding student:", error);
      setMessage("Failed to add student."); 
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && <p style={{ color: message.includes("Failed") ? "red" : "green" }}>{message}</p>}
      
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddStudent;
