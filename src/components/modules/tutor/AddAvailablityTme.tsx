"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";
import { addTimeSlot } from "@/action/addTime.action";
import { AddTimeData } from "@/types";


export const timeSlotSchema = z.object({
    date: z.string().min(1, "Date is required"),
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required")
});

export default function AddAvailablityTime() {



    const form = useForm({
        defaultValues: {
            date: "",    
            startTime: "",
            endTime: ""
        },
        validators: {
            onSubmit: timeSlotSchema
        },
        onSubmit: async ({ value }) => {


            const toastId = toast.loading("Creating Slot...");

            try {

                const formattedPayload: AddTimeData = {

                    date: new Date(value.date),

                    startTime: new Date(`${value.date}T${value.startTime}:00`),
                    endTime: new Date(`${value.date}T${value.endTime}:00`),
                };
                const res = await addTimeSlot(formattedPayload);

                if (res?.error) {
                    toast.error(res.error.message, { id: toastId });
                } else {
                    toast.success("Time Slot Created!", { id: toastId });
                    form.reset();
                }
            } catch (error) {
                toast.error("Something went wrong", { id: toastId });
            }
        }
    });

    return (
        <Card className="max-w-2xl mx-auto mt-10">
            <CardHeader>
                <CardTitle>Set Availability</CardTitle>
                <CardDescription>Select your available date and time slots.</CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    id="tutor-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        form.handleSubmit();
                    }}
                >
                    <FieldGroup>
                        <form.Field
                            name="date"
                            children={(field) => (
                                <Field>
                                    <FieldLabel>Date</FieldLabel>
                                    <Input
                                        type="date"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                    <FieldError errors={field.state.meta.errors} />
                                </Field>
                            )}
                        />

                        <form.Field
                            name="startTime"
                            children={(field) => (
                                <Field>
                                    <FieldLabel>Start Time</FieldLabel>
                                    <Input
                                        type="time"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                    <FieldError errors={field.state.meta.errors} />
                                </Field>
                            )}
                        />

                        <form.Field
                            name="endTime"
                            children={(field) => (
                                <Field>
                                    <FieldLabel>End Time</FieldLabel>
                                    <Input
                                        type="time"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                    <FieldError errors={field.state.meta.errors} />
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Button form="tutor-form" type="submit" className="w-full">
                    Add Availability
                </Button>
            </CardFooter>
        </Card>
    );
}