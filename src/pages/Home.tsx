import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Learn Skills Online</h1>
      <p>Simple platform to learn modern tech.</p>

      <Link to="/courses" className="btn">
        Browse Courses
      </Link>
    </div>
  );
}
