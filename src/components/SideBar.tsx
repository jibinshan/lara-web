import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { type FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { BookCheck, Dock, Gift, House, Phone } from "lucide-react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Image src="/images/logo.png" width={162} height={35} alt="Foodo" />
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-start justify-start pt-6">
            <Button
              asChild
              variant="link"
              className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
            >
              <Link href="/about-us" className="flex gap-2 py-6"><House /> <span>Home</span> </Link>
            </Button>
            <Button
              variant="link"
              className={cn("w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800")}
              asChild
            >
              <Link href="/menu" className="flex gap-2 py-6"><Dock /> <span>Menu</span></Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="w-full flex justify-start px-1 p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
            >
              <Link href="/table-booking" className="flex gap-2 py-6"><BookCheck /> <span>Reservation</span> </Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
            >
              <Link href="/gift-voucher" className="flex gap-2 py-6" ><Gift /> <span>Gift Voucher</span></Link>
            </Button>
            <Button
              variant="link"
              className="w-full flex justify-start p-0 uppercase text-accent text-white "
              asChild
            >
              <Link href="/contact" className="flex gap-2 py-6"><Phone /> <span>Contact Us</span></Link>
            </Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet >
  );
};

export default Sidebar;
