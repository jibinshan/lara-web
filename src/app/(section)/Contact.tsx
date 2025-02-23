"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const FormValidation = z.object({
    name: z.string().min(1, "please enter your name"),
    phone: z.string().min(11, "please enter atleast 11 digits").max(11, "please enter maximum 11 digits"),
    email: z.string().min(1, "please enter your email"),
    reason: z.string().optional(),
    message: z.string().min(1, "please enter your message"),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({}) => {
    const form = useForm<FormData>({
        resolver: zodResolver(FormValidation),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            reason: "",
            message: "",
        },
    });

    const onSubmit = (data: FormData) => {
        bookTableMutation.mutate(data);
    };

    const bookTableMutation = useMutation({
        mutationFn: async (values: z.infer<typeof FormValidation>) => {
            return await axios.post("/api/contact", values);
        },
        onSuccess: () => {
            toast(
                (t) => (
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-center">Your reservation request has been successfully submitted to the restaurant!</p>
                        <button
                            onClick={() => {
                                toast.dismiss(t.id);
                                form.reset();
                            }}
                            className="rounded bg-primary px-4 py-2 text-white"
                        >
                            OK
                        </button>
                    </div>
                ),
                { duration: Infinity }
            );
        },
        onError: () => {
            toast.error("There was an error submitting your message. Please try again later");
        },
    });
    return (
        <section id="welcome" className="flex w-full items-center justify-center overflow-hidden bg-[#0b0b0b]">
            <div className="relative flex h-fit w-full max-w-[1300px] flex-col items-center justify-center gap-9 px-4 py-12 lg:min-h-[60vh] lg:px-0 lg:py-24">
                <div className="flex w-full flex-col items-center justify-center">
                    <p className="text-center font-gotu text-5xl text-[#C1C1C1]">Contact us</p>
                    <Image src="/images/underline.png" width={840} height={85} alt="underline" className="w-52" />
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="h-full w-full">
                        <div className="flex gap-4 pt-7">
                            <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-16">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-sm text-[#787571]">First Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-sm text-[#787571]">Phone</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-sm text-[#787571]">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-sm text-[#787571]">Message</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-center justify-center pt-7 lg:flex-row">
                            <Button className="h-12 w-fit px-10" disabled={bookTableMutation.isPending}>
                                {" "}
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default Contact;
