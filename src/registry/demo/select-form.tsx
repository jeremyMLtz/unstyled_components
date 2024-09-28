import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/registry/ui/select/select";
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

const FormSchema = z.object({
  projectName: z.string().min(1, {
    message: "Project Name must be at least 1 character.",
  }),
  test_framework: z.string(),
});

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      projectName: "",
      test_framework: "",
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
          name='test_framework'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base'>Test Framework</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onSelectItem={(value: string) => field.onChange(value)}>
                  <SelectTrigger placeholder='Select a framework' />
                  <SelectContent>
                    <SelectItem value='pw' display='Playwright' />
                    <SelectItem value='cy' display='Cypress' />
                    <SelectItem value='wdio' display='WebDriver I/O' />
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                What framework would you like to write tests with
              </FormDescription>
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
