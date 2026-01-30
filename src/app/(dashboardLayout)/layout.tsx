import { AppSidebar } from "@/components/layout/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Roles } from "@/constants/roles"
import { userService } from "@/services/user.service"
import { redirect } from "next/navigation"
import React from "react"

export default async function DashboarLayout({
    admin,student, tutor
}:{
    admin:React.ReactNode;
    student:React.ReactNode;
    tutor:React.ReactNode;
}) {

    const {data} = await userService.getSession()
    
    const userInfo = data.user

  if (!data?.user) redirect("/login");

  const role = data.user.role;

  let content: React.ReactNode = null;

  if (role === Roles.admin) content = admin;
  else if (role === Roles.tutor) content = tutor;
  else if (role === Roles.student) content = student;
  else redirect("/login");


    return (
        <SidebarProvider>
            <AppSidebar  user={userInfo} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">
                                    Building Your Application
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
              <main>{content}</main>
            </SidebarInset>
        </SidebarProvider>
    )
}
