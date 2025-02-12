'use client'
import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Failed() {
    const router = useRouter()
    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push('/checkout');
        }, 5000);

        return () => clearTimeout(timeout);
    }, [router]);
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-menubackground">
            <div className="w-10/12 md:w-4/12 px-6 py-10 flex flex-col justify-center items-center h-fit rounded-2xl bg-itembackground gap-4">
                <div className="aspect-square rounded-full h-24 w-24 bg-red-700 flex justify-center items-center">
                    <CircleX className="h-20 w-20" />
                </div>
                <p className="text-2xl md:text-4xl font-[600] tracking-[2px] text-menuprimary">Payment Failed</p>
                <p className="text-lg text-menusecondary text-center">Please try again</p>
                <Link href='/checkout'>
                    <Button className="py-6 bg-red-700 text-white hover:bg-red-700">Try Again</Button>
                </Link>
            </div>
        </div >
    );
}
