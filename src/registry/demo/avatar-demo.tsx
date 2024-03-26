import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/ui/avatar/avatar";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src='https://avatars.githubusercontent.com/u/42413866?v=4'
        alt='profile-pic'
      />
      <AvatarFallback>JL</AvatarFallback>
    </Avatar>
  );
}
