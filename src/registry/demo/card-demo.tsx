import * as React from "react";

import { Button } from "@/registry/ui/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card/card";
import { Input } from "@/registry/ui/input/input";
import { Label } from "@/registry/ui/label/label";
import { Textarea } from "@/registry/ui/textarea/textarea";

export default function CardDemo() {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Setup App</CardTitle>
        <CardDescription>Lets get your app running!</CardDescription>
      </CardHeader>
      <CardContent>
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
                placeholder='Provide a brief description of your app'
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline'>Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}
