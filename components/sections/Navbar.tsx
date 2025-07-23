import { BookOpenText } from "lucide-react";

import { ModeToggle } from "../mode-toggle";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/const";
const Navbar = () => {
  return (
    <header className="wrapper shadow-sm shadow-border dark:shadow-none rounded-b-lg bg-popover dark:bg-background">
      <nav className="flex justify-between items-center py-4">
        <Link
          href={"/"}
          className="flex items-center gap-2 text-lg font-bold text-primary"
        >
          <BookOpenText strokeWidth={2.7} className="size-5"/>
          <p>Tuition</p>
        </Link>

        <ul className="md:flex items-center hidden">
          {navLinks.map(({ name, url }) => (
            <li key={name}>
              <Button asChild variant="ghost" className="text-muted-foreground">
                <Link href={url}>{name}</Link>
              </Button>
            </li>
          ))}
        </ul>

        <div className="space-x-2">
          <ModeToggle />
          <Popover>
            <PopoverTrigger asChild className="inline-flex sm:hidden">
              <Button size="icon" variant="outline" className="group">
                <Menu className="group-data-[state=open]:hidden" />
                <X className="hidden group-data-[state=open]:inline-block" />
                <span className="sr-only">Menu</span>
              </Button>
            </PopoverTrigger>

            <PopoverContent className="block sm:hidden">
              <ul>
                {navLinks.map(({ name, url }) => (
                  <li key={name}>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-muted-foreground w-full justify-start px-5 py-6 text-base"
                    >
                      <Link href={url}>{name}</Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
