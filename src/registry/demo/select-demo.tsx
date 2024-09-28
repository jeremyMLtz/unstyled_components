"use client";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/registry/ui/select/select";

export default function SelectDemo() {
  const [value, setValue] = useState("Select an option...");
  return (
    <Select value={value} onSelectItem={(option: string) => setValue(option)}>
      <SelectTrigger />
      <SelectContent>
        <SelectItem value='opt1' display='Option 1' />
        <SelectItem value='opt2' display='Option 2' />
        <SelectItem value='opt3' display='Option 3' />
      </SelectContent>
    </Select>
  );
}
