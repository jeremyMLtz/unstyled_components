import { Textarea } from "@/registry/ui/textarea/textarea";
import { Label } from "@/registry/ui/label/label";

export default function TextareaDemo() {
  return (
    <div className='w-full max-w-sm items-center'>
      <Label htmlFor='message'>Message</Label>
      <Textarea id='message' placeholder='Enter your message here!' />
    </div>
  );
}
