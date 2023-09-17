import {NextRequest, NextResponse} from "next/server";

export default function middleware(request: NextRequest){
    const token = request.cookies.get("token")
    const path = request.nextUrl.pathname

    if (!token && path != "/login"){
        return NextResponse.redirect(new URL("/login", request.url))
    }
    if (token && path == "/login"){
        return NextResponse.redirect(new URL("/profile", request.url))
    }
}

export const config = {
    matcher: ['/profile', '/login', '/'],
}