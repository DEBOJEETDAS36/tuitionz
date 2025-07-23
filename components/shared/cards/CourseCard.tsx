import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";

type CourseProp = {
  image?: string;
  title?: string;
  description?: string;
  price?: string;
  duration?: string;
  starts_from?: string;
  teacher_name?: string;
  teacher_image?: string;
};

const CourseCard = ({
  image,
  title,
  description,
  price,
  duration,
  starts_from,
  teacher_name,
  teacher_image,
}: CourseProp) => {
  return (
    <Card className="py-0">
      <Link href="/explore">
        <CardHeader className="py-5">
          <CardTitle className="line-clamp-1">
            {title ? title : "Course name"}
          </CardTitle>
          <CardDescription className="line-clamp-1">
            {description
              ? description
              : "Course description lorem ipsum dolor sit amet consectetur"}
          </CardDescription>
          <CardAction>
            <Button type="button" className="group">
              Explore
              <ArrowRight className="transition-transform -rotate-45 group-hover:rotate-0 group-hover:scale-105" />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="relative p-0">
          <div className="aspect-video bg-border fl_center mask-b-from-75%">
            <ImageIcon className="text-muted-foreground" />
          </div>
          <div className="absolute bottom-0 left-0 p-5 flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-sm font-semibold">
              {teacher_name ? teacher_name : "Teacher xyz"}
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CourseCard;
