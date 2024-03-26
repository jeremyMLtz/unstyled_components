import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/ui/tooltip/tooltip";

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger>Its Above Me!</TooltipTrigger>
      <TooltipContent>
        <p>{`Heyyo, I'm a tooltip!`}</p>
      </TooltipContent>
    </Tooltip>
  );
}
