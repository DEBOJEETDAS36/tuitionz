import CourseCard from "../shared/cards/CourseCard";

const Courses = () => {
  return (
    <section className="wrapper grid gap-4 grid-cols-1 md:grid-cols-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <CourseCard key={"course-" + i} />
      ))}
    </section>
  );
};

export default Courses;
