export default function CourseList({ courses }) {
  return (
    <div>
      <h3>Courses I'm Learning</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}