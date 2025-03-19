import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Student Management</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Student</Link>
      </div>
    </nav>
  );
};

export default Navbar;
