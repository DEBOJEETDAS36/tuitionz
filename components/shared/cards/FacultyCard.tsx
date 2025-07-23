import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type FacultyCardProp = {
  image?: string;
  name?: string;
  subjects?: string[];
};

const FacultyCard = ({ image, name, subjects }: FacultyCardProp) => {
  return (
    <Card className="bg-background border-none shadow-none hover:bg-card transition-colors duration-200">
      <CardContent className="fl_center">
        <div className="w-[80%] max-w-80 aspect-square bg-accent _pentagon"></div>
      </CardContent>
      <CardHeader className="text-center">
        <CardTitle>{name ? name : "Faculty name"}</CardTitle>
        <CardDescription>Physics, Chemistry</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FacultyCard;
