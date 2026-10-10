import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        return NextResponse.redirect(new URL("/singIn", request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: [
    "/details/1",
    "/details/2",
    "/details/3",
    "/details/4",
    "/details/5",
    "/details/6",
    "/details/7",
    "/details/8",
    "/details/9",
    "/details/10",
    "/details/11",
    "/details/12",
    "/details/13",
    "/details/14",
    "/details/15",
    "/details/16",
    "/details/17",
    "/details/18",
    "/details/19",
    "/details/20",
    "/details/21",
    "/details/22",
    "/details/22",
    "/details/23",
    "/details/24",
    "/details/25",
    "/details/26",
    "/details/27",
    "/details/28",
    "/details/29",
    "/details/30",
    "/details/31",
    "/details/32",
    "/details/33",
    "/profile",

], // Specify the routes the middleware applies to
};