"use client";
import { useState } from "react";
import { Label } from "@/registry/ui/label/label";
import { Switch } from "@/registry/ui/switch/switch";

export default function SwitchDemo() {
  const [checked, setChecked] = useState(true);
  return (
    <div className='flex items-center space-x-2'>
      <Switch
        id='optOut'
        checked={checked}
        onCheckedChange={() => setChecked(!checked)}
      />
      <Label htmlFor='optOut'>Opt Out</Label>
    </div>
  );
}
