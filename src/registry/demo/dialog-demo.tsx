import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/registry/ui/dialog/dialog";
import { Label } from "@/registry/ui/label/label";
import { Textarea } from "@/registry/ui/textarea/textarea";
import { Input } from "@/registry/ui/input/input";
import { Button } from "@/registry/ui/button/button";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger className='w-fit'>Open</DialogTrigger>
      <DialogContent className='space-y-2'>
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>
            Add a name and a description to your project.
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' placeholder='Name of your app' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='description'>Description</Label>
              <Textarea
                id='description'
                placeholder='Provide a brief description of your project'
              />
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button variant='outline'>Cancel</Button>
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
