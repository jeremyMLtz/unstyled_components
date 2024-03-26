import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/ui/tooltip/tooltip";

export default function TooltipBottom() {
  return (
    <Tooltip>
      <TooltipTrigger>Its Below Me!</TooltipTrigger>
      <TooltipContent position='bottom'>
        <p>{`Heyyo, I'm a tooltip!`}</p>
      </TooltipContent>
    </Tooltip>
  );
}
