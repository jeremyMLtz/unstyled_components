"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/registry/ui/button/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/ui/form/form";
import { Input } from "@/registry/ui/input/input";
import { Switch } from "@/registry/ui/switch/switch";
import { Textarea } from "@/registry/ui/textarea/textarea";

const formSchema = z.object({
  projectName: z.string().min(2, {
    message: "Project name must be at least 2 characters.",
  }),
  projectDesc: z.string().min(2, {
    message: "Project description must be at least 2 characters.",
  }),
  projectPrivate: z.boolean().default(false).optional(),
});

export function TestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      projectDesc: "",
      projectPrivate: false,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='projectName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input placeholder='Unstyled' {...field} />
              </FormControl>
              <FormDescription>
                This is your project display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='projectDesc'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Enter project description here'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A brief description of your project.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='projectPrivate'
          render={({ field }) => (
            <FormItem className='flex flex-row items-center justify-between rounded-md border border-border p-3'>
              <div className='space-y-0.5'>
                <FormLabel className='text-base'>Private Project</FormLabel>
                <FormDescription>
                  Only People you send a link to can view your project.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
