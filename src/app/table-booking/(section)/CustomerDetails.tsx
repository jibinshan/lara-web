import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { FC } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { TableFormValues } from "./Table-Validation";
import type { UseMutationResult } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { format } from "date-fns";

interface CustomerDetailsProps {
    form: UseFormReturn<TableFormValues, undefined>;
    bookTableMutation: UseMutationResult<AxiosResponse, Error, TableFormValues>;
    setpage: (page: number) => void;
}

const CustomerDetails: FC<CustomerDetailsProps> = ({ form, bookTableMutation, setpage }) => {
    return (
        <div className="flex w-full flex-col items-end gap-5">
            {/* <div className='w-full flex items-start justify-start'>
                <div onClick={() => setpage(0)} className='w-fit flex gap-2 justify-center items-center'>
                    <ArrowLeft />
                    <p>go to back</p>
                </div>
            </div> */}
            <div className="flex w-full flex-col gap-3 bg-primary/30 px-12 py-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="flex w-full flex-col gap-2">
                        <p className="text-semibold">Date & Time</p>
                        <p className="font-light">
                            {form.watch("date") ? format(form.watch("date"), "EEE MMM dd yyyy") : "No date selected"},{" "}
                            {form.watch("time") ? form.watch("time") : "No time selected"}
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <p className="text-semibold">No of Guests</p>
                        <p className="font-light">{form.watch("guests") ? `${form.watch("guests")} Guests` : "no number of guests selected"}</p>
                    </div>
                    <div className="flex w-full items-center md:justify-center">
                        <p className="w-fit cursor-pointer border-b-[1px] border-b-white" onClick={() => setpage(0)}>
                            Change Selection
                        </p>
                    </div>
                </div>
            </div>
            <p className="w-full text-2xl font-semibold">Complete your request</p>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                                <Input {...field} className="h-12 border-muted bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Email</FormLabel>
                            <FormControl>
                                <Input {...field} type="email" className="h-12 border-muted bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input {...field} type="tel" className="h-12 border-muted bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            <FormField
                control={form.control}
                name="request"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Special Request</FormLabel>
                        <FormControl>
                            <Textarea {...field} className="min-h-[100px] border-muted bg-transparent" placeholder="Enter any special requests or dietary requirements..." />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <div className="flex w-full justify-center">
                <Button type="submit" className="w-fit bg-[#E5C992] px-6 py-6 text-black hover:bg-[#d4b87d] md:float-right md:w-fit" disabled={bookTableMutation.isPending}>
                    {bookTableMutation.isPending ? "Booking..." : "Book A Table"}
                </Button>
            </div>
        </div>
    );
};

export default CustomerDetails;
