import { Input } from "@/registry/ui/input/input";
import { Label } from "@/registry/ui/label/label";

export default function InputFile() {
  return (
    <div className='space-y-6 max-w-sm w-2/3'>
      <Label htmlFor='profile-picture'>Profile Picture</Label>
      <Input id='profile-picture' type='file' />
    </div>
  );
}
