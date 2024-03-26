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

const FormSchema = z.object({
  projectName: z.string().min(1, {
    message: "Project Name must be at least 1 character.",
  }),
  private_project: z.boolean().default(false).optional(),
});

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      projectName: "",
      private_project: false,
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4'>
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
                This is the name of your project.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='private_project'
          render={({ field }) => (
            <FormItem className='flex flex-row items-center justify-between border border-border rounded-md p-2'>
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
        <Button size='small' type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  );
}
