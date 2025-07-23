import FacultyCard from "../shared/cards/FacultyCard";

const Faculty = () => {
  return (
    <section className="wrapper">
      <h2 className="h3 py-16 text-center">Our faculties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {Array.from({ length: 5 }).map((_, i) => (
          <FacultyCard key={"faculty-" + i} />
        ))}
      </div>
    </section>
  );
};

export default Faculty;
