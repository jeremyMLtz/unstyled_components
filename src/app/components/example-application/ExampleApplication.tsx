"use client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/ui/avatar/avatar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/registry/ui/dialog/dialog";
import { TestForm } from "../ui/TestForm";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/registry/ui/button/button";
import {
  BarChart3,
  CirclePlus,
  GanttChart,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const ExampleApplication = () => {
  return (
    <div className='border border-border rounded-md max-w-screen-xl m-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
      <aside className='fixed top-14 z-30 hidden h-full w-full shrink-0 md:sticky md:block border-r border-border'>
        <div className='h-full flex flex-col'>
          <div className='flex items-center space-x-2 p-4 border-b border-border'>
            <Avatar style={{ height: "1.5rem", width: "1.5rem" }}>
              <AvatarImage
                src='https://avatars.githubusercontent.com/u/42413866?v=4'
                alt='profile-pic'
              />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <span className='text-sm'>Jeremy</span>
          </div>
          <div className='w-full flex flex-col p-4 space-y-5 border-b border-border'>
            <Button size='small' variant='secondary'>
              <GanttChart className='h-4 w-4' />
              <span className='ml-2'>Projects</span>
            </Button>
            <Button size='small' variant='ghost'>
              <LayoutDashboard className='h-4 w-4' />
              <span className='ml-2'>Dashboard</span>
            </Button>
            <Button size='small' variant='ghost'>
              <BarChart3 className='h-4 w-4' />
              <span className='ml-2'>Metrics</span>
            </Button>
            <Button size='small' variant='ghost'>
              <Settings className='h-4 w-4' />
              <span className='ml-2'>Settings</span>
            </Button>
          </div>
          <div className='flex-grow flex items-end p-4'>
            <Dialog>
              <DialogTrigger className='w-fit'>
                <CirclePlus className='h-4 w-4' />
                <span className='text-sm ml-2'>Create Project</span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Project</DialogTitle>
                  <DialogDescription>
                    Deploy a new project with one click!
                  </DialogDescription>
                </DialogHeader>
                <TestForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </aside>
      <section className='flex flex-wrap gap-x-6 p-4'>
        <ProjectCard
          name='Test Project 1'
          description='Super cool project to do stuff'
        />
        <ProjectCard
          name='Test Project 2'
          description='Super cool project to do stuff'
        />
        <ProjectCard
          name='Test Project 3'
          description='Super cool project to do stuff'
        />
        <ProjectCard
          name='Test Project 4'
          description='Super cool project to do stuff'
        />
      </section>
    </div>
  );
};

export default ExampleApplication;
