import { ModeToggle } from "./ModeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function NavHamburger() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden absolute right-4 top-2" variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>mikumino</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col mt-8">
          <a
            className={`${buttonVariants({ variant: "ghost" })} text-lg`}
            href="/"
          >
            Home
          </a>
          <a className={buttonVariants({ variant: "ghost" })} href="/about">
            About
          </a>
          <a
            className={`${buttonVariants({ variant: "ghost" })} text-lg`}
            href="/blog"
          >
            Blog
          </a>
          <a className={buttonVariants({ variant: "ghost" })} href="/resources">
            Resources
          </a>
          {/* <a className={buttonVariants({ variant: "ghost" })} href="/other">
            Other
          </a> */}
        </div>
      </SheetContent>
    </Sheet>
  );
}
