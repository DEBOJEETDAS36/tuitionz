import AboutUs from "@/components/sections/AboutUs";
import Courses from "@/components/sections/Courses";
import Faculty from "@/components/sections/Faculty";
import Hero from "@/components/sections/Hero";
import Testimonial from "@/components/sections/Testimonial";
import TopFeature from "@/components/sections/TopFeature";

export default function Home() {
	return (
		<main>
			<Hero />
			<Courses />
			<Faculty />
			<TopFeature />
			<Testimonial />
			<AboutUs />
		</main>
	);
}
