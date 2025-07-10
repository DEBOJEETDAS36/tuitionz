import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center p-5 border-b">
        <p className="h4">Navbar</p>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
