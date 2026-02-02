import { Link } from "react-router-dom";
import { Course } from "../types";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <div className="card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <span>{course.lessons} lessons</span>

      <Link to={`/course/${course.id}`} className="btn">
        View Course
      </Link>
    </div>
  );
}
