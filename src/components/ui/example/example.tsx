

"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@tanstack/react-form";

import { toast } from "sonner";

import * as z from "zod"


export const tutorSchema = z.object({
    name: z
        .string()
        .min(3, "Name must be at least 3 characters")
        .max(200, "Name must be less than 200 characters"),

    bio: z
        .string()
        .min(10, "Bio must be at least 10 characters")
        .max(1000, "Bio must be less than 1000 characters"),

    image: z.string().url().or(z.literal("")),

    experience_year: z
        .number()
        .int("Experience year must be an integer")
        .min(0, "Experience year cannot be negative")
        .max(50, "Experience year seems too high"),

    subject: z
        .string()
        .min(2, "Subject must be at least 2 characters")
        .max(100, "Subject must be less than 100 characters"),

});


export default function TutorProfile() {

    const form = useForm(
        {
            defaultValues: {
                name: "",
                bio: "",
                image: "",
                experience_year: 0,
                subject: "",
            },
            validators: {
                onSubmit: tutorSchema
            },
            onSubmit: async ({ value }) => {

                const toastId = toast.loading("Creating...");
                const blogData = {
                    value,
                }
                console.log(blogData)

                try {

                } catch (error) {

                }
            }
        }
    )







    return (
        <Card className="max-w-2xl mx-auto mt-10">
            <CardHeader>
                <CardTitle>Create Tutor Profile</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>

                <form id="tutor-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        form.handleSubmit();
                    }}
                >


                    <FieldGroup>
                        <form.Field
                            name="name"
                            children={(field) => {
                                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                                        <Input
                                            type="text"
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value ?? ""}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            placeholder="Full name"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}
                                    </Field>
                                )
                            }}
                        />


                        <form.Field
                            name="bio"
                            children={(field) => {
                                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Bio</FieldLabel>
                                        <Textarea

                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            placeholder="Bio"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}
                                    </Field>
                                )
                            }}
                        />

                        <form.Field
                            name="image"
                            children={(field) => {
                                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Image</FieldLabel>
                                        <Input
                                            type="text"
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            placeholder="Your Image"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}
                                    </Field>
                                )
                            }}
                        />

                        <form.Field
                            name="experience_year"
                            children={(field) => {
                                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Year of Experience</FieldLabel>
                                        <Input
                                            type="number"
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value ?? 0}
                                            onChange={(e) => field.handleChange(Number(e.target.value))}
                                            placeholder="Your Image"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}
                                    </Field>
                                )
                            }}
                        />

                        <form.Field
                            name="subject"
                            children={(field) => {
                                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Subject</FieldLabel>
                                        <Input
                                            type="text"
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value ?? 0}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            placeholder="Your Image"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}
                                    </Field>
                                )
                            }}
                        />




                    </FieldGroup>


                </form>
            </CardContent>
            <CardFooter className="">
                <Button form="tutor-form" type="submit">
                    Submit
                </Button>
            </CardFooter>
        </Card>
    )
}