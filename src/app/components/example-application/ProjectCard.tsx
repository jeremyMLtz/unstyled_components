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
import { Badge } from "@/registry/ui/badge/badge";

interface ProjectCardProps {
  name: string;
  description: string;
}

export function ProjectCard({ name, description }: ProjectCardProps) {
  return (
    <Card className='w-[250px] mt-4'>
      <CardHeader>
        <CardTitle style={{ fontSize: "0.875rem" }}>{name}</CardTitle>
        <CardDescription style={{ fontSize: "0.85rem" }}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between'>
          <Button size='small' variant='destructive'>
            Delete
          </Button>
          <Button size='small' variant='outline'>
            Settings
          </Button>
        </div>
      </CardContent>
      <CardFooter className='flex gap-2 flex-wrap'>
        <Badge variant='secondary'>React</Badge>
        <Badge variant='secondary'>TypeScript</Badge>
        <Badge variant='secondary'>Next</Badge>
        <Badge variant='secondary'>Tailwind</Badge>
        <Badge variant='secondary'>Prisma</Badge>
      </CardFooter>
    </Card>
  );
}
