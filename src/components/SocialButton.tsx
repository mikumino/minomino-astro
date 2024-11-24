import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function SocialButton({
  href,
  children,
  text,
}: {
  href: string;
  children: any;
  text: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <a href={href} target="_blank">
            <Button variant={"ghost"} className="text-2xl" size={"icon"}>
              {children}
            </Button>
          </a>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
