import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constants/roles";

export async function proxy(request: NextRequest) {

    const pathname = request.nextUrl.pathname;

    let isAuthenticated = false;
    let isAdmin = false;
    let isStudent = false;
    let isTutor = false;

    const { data } = await userService.getSession();

    if (data) {
        isAuthenticated = true;
        isAdmin = data.user.role === Roles.admin;
        isStudent = data.user.role === Roles.student;
        isTutor = data.user.role === Roles.tutor;
    }

    if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url))
    }


    //  Admin route protection
    if (pathname.startsWith("/admin") && !isAdmin) {
        if (isStudent) {
            return NextResponse.redirect(new URL("/dashboard", request.url))
        }
        if (isTutor) {
            return NextResponse.redirect(new URL("/tutor/dashboard", request.url))
        }
    }

    //  Student dashboard
    if (pathname.startsWith("/dashboard") && !isStudent) {
        if (isAdmin) {
            return NextResponse.redirect(new URL("/admin", request.url))
        }
        if (isTutor) {
            return NextResponse.redirect(new URL("/tutor/dashboard", request.url))
        }
    }

    //  Tutor dashboard
    if (pathname.startsWith("/tutor") && !isTutor) {
        if (isAdmin) {
            return NextResponse.redirect(new URL("/admin", request.url))
        }
        if (isStudent) {
            return NextResponse.redirect(new URL("/dashboard", request.url))
        }
    }


    return NextResponse.next()
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/admin/:path*",
        "/tutor/:path*"
    ]
}