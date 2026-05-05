import Header from "./components/Header";
import Counter from "./components/Counter";
import CourseList from "./components/CourseList";

export default function Home() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <Header name="Glenn" />

      <h2>My React Learning Dashboard</h2>

      <Counter />

      <CourseList
        courses={[
          "JavaScript Basics",
          "React Components",
          "Props and State",
          "Next.js Introduction",
        ]}
      />
    </main>
  );
}