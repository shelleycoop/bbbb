import { useParams } from "react-router-dom";
import { courses } from "../data";

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();

  const course = courses.find((c) => c.id === Number(id));

  if (!course) return <p>Course not found</p>;

  return (
    <div className="container">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>Total Lessons: {course.lessons}</p>
    </div>
  );
}
