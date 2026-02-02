import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>MyCourses</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
      </div>
    </nav>
  );
}
