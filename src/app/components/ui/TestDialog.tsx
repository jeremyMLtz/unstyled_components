"use client";
import { TestForm } from "./TestForm";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/registry/ui/dialog/dialog";

const TestDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className='w-fit'>Settings</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <TestForm />
        <DialogFooter>This does not really mean nothing.</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TestDialog;
