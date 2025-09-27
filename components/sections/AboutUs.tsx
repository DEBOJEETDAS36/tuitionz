import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion";

const aboutItems = [
	{
		value: "item-1",
		title: "Course Information",
		content: [
			"Our platform offers carefully curated courses designed to help learners build real-world skills. From beginner-friendly introductions to advanced deep-dives, every course is structured by industry experts and experienced educators.",
			"With interactive lessons, practical assignments, and doubt-clearing sessions, we make sure learning is effective and enjoyable."
		]
	},
	{
		value: "item-2",
		title: "Learning Format",
		content: [
			"All our courses are delivered online, so you can start learning instantly after enrollment. Study materials, recorded lectures, and practice tests are accessible anytime, anywhere, through your personal dashboard.",
			"For select programs, we also provide downloadable resources and certificates that can be shared across professional platforms."
		]
	},
	{
		value: "item-3",
		title: "Refund Policy",
		content: [
			"We want you to feel confident in your learning journey. If a course does not meet your expectations, you’re covered by our 7-day refund guarantee.",
			"Just reach out to our support team, and we’ll assist you with a quick and hassle-free process."
		]
	}
];

const AboutUs = () => {
	return (
		<section
			id="about-us"
			className="wrapper grid grid-cols-1 md:grid-cols-3 md:gap-4 my-10"
		>
			<div className="h1 py-4">About Us</div>
			<div className="col-span-2">
				<Accordion
					type="single"
					collapsible
					className="w-full"
					defaultValue="item-1"
				>
					{aboutItems.map((item) => (
						<AccordionItem key={item.value} value={item.value}>
							<AccordionTrigger>{item.title}</AccordionTrigger>
							<AccordionContent className="flex flex-col gap-4 text-balance">
								{item.content.map((p, idx) => (
									<p key={idx}>{p}</p>
								))}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
};

export default AboutUs;
