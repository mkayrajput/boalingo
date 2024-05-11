import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-green-500 font-bold">
      <div className="flex flex-col gap-2 w-52">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="primaryOuline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondaryOutline">Secondary Outline</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="dangerOutline">Danger Outline</Button>
        <Button variant="super">Super</Button>
        <Button variant="superOutline">Super Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="sidebar">Sidebar</Button>
        <Button variant="sidebarOutline">sidebar</Button>
      </div>
    </div>
  );
}
