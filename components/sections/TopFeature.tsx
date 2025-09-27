import {
	BookOpen,
	GraduationCap,
	Users,
	Laptop,
	Trophy,
	Clock,
	type LucideIcon
} from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const features: { icon: LucideIcon; title: string; content: string }[] = [
	{
		icon: BookOpen,
		title: "Expert-Crafted Courses",
		content:
			"Learn from industry professionals and experienced educators with structured, easy-to-follow lessons."
	},
	{
		icon: GraduationCap,
		title: "Certification",
		content:
			"Receive recognized certificates upon completion to showcase your achievements on resumes and LinkedIn."
	},
	{
		icon: Users,
		title: "Community Support",
		content:
			"Join study groups, discuss doubts, and collaborate with peers to enhance your learning experience."
	},
	{
		icon: Laptop,
		title: "Learn Anytime, Anywhere",
		content:
			"Access all study materials, video lectures, and practice tests on any device, 24/7."
	},
	{
		icon: Trophy,
		title: "Skill-Focused Training",
		content:
			"Courses designed to focus on practical skills that give you an edge in academics and professional life."
	},
	{
		icon: Clock,
		title: "Flexible Schedules",
		content:
			"Study at your own pace with on-demand lessons and flexible timelines to match your routine."
	}
];

const TopFeature = () => {
	return (
		<section className="wrapper my-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">
			<h2 className="h1 sticky top-5 h-fit">Features</h2>
			<div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
				{features.map((f, i) => {
					const Icon = f.icon;
					return (
						<Card key={i} className="border-none group">
							<CardHeader className="col-span-2">
								<div className="size-12 fl_center bg-primary/15 rounded-lg relative">
									<Icon className="size-6 text-primary" />
									<Icon className="size-6 text-primary absolute blur-[3px] opacity-0 group-hover:opacity-100 duration-300 hidden dark:block" />
								</div>
								<div className="mt-3">
									<CardTitle className="font-semibold text-xl">
										{f.title}
									</CardTitle>
									<CardDescription className="text-muted-foreground text-base mt-1">
										{f.content}
									</CardDescription>
								</div>
							</CardHeader>
						</Card>
					);
				})}
			</div>
		</section>
	);
};

export default TopFeature;
