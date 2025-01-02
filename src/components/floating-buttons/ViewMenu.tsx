import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ViewMenu = ({}) => {
  return (
    <Button
      asChild
      className="flex aspect-square h-24 flex-col items-center justify-center rounded-full bg-[#1D1D1D] px-0 py-0 text-xs uppercase text-[#8F8F8F] hover:bg-[#1D1D1D]/40"
    >
      <Link href="/menu">
        <Icons.dining color="#8F8F8F" />
        View
        <br />
        Menu
      </Link>
    </Button>
  );
};

export default ViewMenu;
