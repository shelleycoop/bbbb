import { courses } from "../data";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  return (
    <div className="container grid">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
