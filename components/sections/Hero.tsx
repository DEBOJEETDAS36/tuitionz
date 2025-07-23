import { BookOpenText } from "lucide-react";

const Hero = () => {
  return (
    <section className="wrapper min-h-[70vh] fl_center">
      <div className="pt-18 pb-30 bg_dots relative w-full">
        <div className="absolute inset-0 bg-radial-center-transparent" />
        <div className="fl_center flex-col gap-4 text-center w-full relative z-10">
          <div className="relative fl_center">
            <div className="size-24 fl_center rounded-full text-primary z-10 bg-popover shadow-xl shadow-border dark:shadow-none">
              <BookOpenText strokeWidth={2.7} className="size-10" />
            </div>
            {/* <div className="absolute size-20 rounded-full bg-primary blur-xl" /> */}
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Wanna <br />
            <span className="text-primary">learn from the best</span> <br />
            and <span className="text-primary">the best?</span>
          </h1>

          <div className="w-full max-w-5xl border border-dashed border-primary/30 relative">
            <div className="absolute h-92 border border-dashed border-primary/30 left-0 bottom-0 translate-y-1/4">
              <div className="relative h-full">
                <div className="size-3 bg-primary absolute -translate-y-1/2 -translate-x-1/2 rounded-full" />
                <div className="size-3 bg-primary blur-md absolute -translate-y-1/2 -translate-x-1/2 rounded-full" />
                <div className="size-3 bg-primary blur-md absolute -translate-y-1/2 -translate-x-1/2 rounded-full" />

                <div className="size-3 bg-primary absolute bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full" />
                <div className="size-3 bg-primary blur-md absolute bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full" />
                <div className="size-3 bg-primary blur-md absolute bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full" />
              </div>
            </div>
            <div className="absolute size-5 rounded-full border-2 border-dashed border-primary/30 left-0 -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute h-52 border border-dashed border-primary/30 right-0 top-0 -translate-y-1/3">
              <div className="relative h-full">
                <div className="size-3 bg-primary absolute -translate-y-1/2 -translate-x-1/2 rounded-full" />
                <div className="size-3 bg-primary blur-md absolute -translate-y-1/2 -translate-x-1/2 rounded-full" />
                <div className="size-3 bg-primary blur-md absolute -translate-y-1/2 -translate-x-1/2 rounded-full" />

                <div className="size-3 bg-primary absolute bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full" />
                <div className="size-3 bg-primary blur-md absolute bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full" />
                <div className="size-3 bg-primary blur-md absolute bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full" />
              </div>
            </div>
            <div className="absolute size-7 rounded-full border-2 border-dashed border-primary/30 right-0 -translate-y-1/2 translate-x-1/2" />
          </div>

          <p className="text-2xl font-semibold text-muted-foreground">
            Explore and enroll the best courses of your interest and grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
