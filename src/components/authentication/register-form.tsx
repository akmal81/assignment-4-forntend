
"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"

import { useForm } from "@tanstack/react-form"

import * as z from "zod"
import { authClient } from "@/lib/auth-client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"




const formSchema = z.object(
  {
    name: z.string().min(1, "This field is required"),
    email: z.string().min(1, "This field is required"),
    password: z.string().min(8, "Mimium length is 8"),
    role: z.string()
  },

)

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {



  const router = useRouter()




  const form = useForm(
    {
      defaultValues: {
        name: "",
        email: "",
        password: "",
        role: "STUDENT"
      },
      validators: {
        onSubmit: formSchema
      },
      onSubmit: async ({ value }) => {

        const toastId = toast.loading("Creating User")

        try {

          const { data, error } = await authClient.signUp.email(value)

          if (error) {
            toast.error(error.message, { id: toastId })
            return
          }

          toast.success("User Created Successfully", { id: toastId })
          router.replace("/")

        } catch (error) {
          toast.error("Something went wrong, please try again later", { id: toastId })
        }
      }
    }
  )



  const handleGoogleLogin = async () => {
    const data = authClient.signIn.social(
      {
        provider: "google",
        callbackURL: "http://localhost:3000/"
      }
    )
    console.log(data)
  }



  return (
    <div className={cn("flex flex-col w-2/3 mx-auto gap-6", className)} {...props}>
      <Card className="overflow-hidden pb-10">
        <CardContent className="p-0 m-0">






          <form id="register" className="p-6 md:p-8" onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit()
          }} >
            <FieldGroup>

              <form.Field
                name="name" children={(field) => {


                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid


                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                      <Input
                        type="text"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => { field.handleChange(e.target.value) }}

                      />

                      {isInvalid && <FieldError errors={field.state.meta.errors} />}


                    </Field>
                  )
                }} />




              <form.Field
                name="email" children={(field) => {

                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid

                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        type="email"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => { field.handleChange(e.target.value) }}

                      />

                      {isInvalid && <FieldError errors={field.state.meta.errors} />}
                    </Field>
                  )
                }} />




              <form.Field
                name="password" children={(field) => {

                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid

                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                      <Input
                        type="password"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => { field.handleChange(e.target.value) }}

                      />

                      {isInvalid && <FieldError errors={field.state.meta.errors} />}
                    </Field>
                  )
                }} />




              <form.Field
                name="role" children={(field) => {

                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field>
                      {/* <Input 
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e)=>{field.handleChange(e.target.value)}}

                     /> */}
                      <div className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition">

                        <input
                          type="checkbox"
                          id={field.name}
                          checked={field.state.value === "TUTOR"}
                          className="h-5 w-5 rounded border-gray-300 text-blue-600 
                        focus:ring-2 focus:ring-blue-500 cursor-pointer"
                          onChange={(e) => {
                            field.handleChange(e.target.checked ? "TUTOR" : "STUDENT")
                          }}
                        />

                        <FieldLabel htmlFor={field.name}>I am a Tutor</FieldLabel>
                      </div>


                      {isInvalid && <FieldError errors={field.state.meta.errors} />}

                    </Field>
                  )
                }} />
            </FieldGroup>





          </form>


          {/* <div className="bg-muted relative hidden md:block">
            <img
              src="https://i.ibb.co.com/Y95LyVM/Frame-4.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
            </div> */}
        </CardContent>
        <CardFooter className="flex  flex-col gap-4">
          <Button className=" w-full" form="register" type="submit">Submit</Button>
          <Button className="w-full" onClick={() => handleGoogleLogin()} variant="outline" type="button">

            <span className="">Login with Google</span>
          </Button>
        </CardFooter>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <Link href="/login">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  )
}
