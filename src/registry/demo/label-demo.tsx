import { Input } from "@/registry/ui/input/input";
import { Label } from "@/registry/ui/label/label";

export default function LabelDemo() {
  return (
    <div className='w-3/4 max-w-sm space-y-4'>
      <Label htmlFor='email'>Email</Label>
      <Input id='email' type='email' placeholder='Enter your email address' />
    </div>
  );
}
