import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const Faculty = () => {
	return (
		<section id="faculties" className="wrapper">
			<h2 className="h3 pt-10 mb-8 text-center">Our faculties</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1px] bg-border border-border border">
				{Array.from({ length: 6 }).map((_, i) => (
					<div
						key={"faculty-" + i}
						className={`rounded-none bg-card dark:bg-background py-6 relative group`}
					>
						<CardHeader className="text-left">
							<div className="flex flex-row gap-4">
								<Avatar className="size-12">
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<div className="flex flex-col">
									<CardTitle className="text-lg">Teacher Name</CardTitle>
									<CardDescription className="mt-2">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Commodi, quod, iure voluptatem veniam omnis cupiditate minus
										ipsa rerum in culpa, rem similique blanditiis nostrum
										provident atque? Tempora ad eos repellendus.
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-30% to-background transition-opacity group-hover:opacity-0 duration-500" />
					</div>
				))}
			</div>
		</section>
	);
};

export default Faculty;
