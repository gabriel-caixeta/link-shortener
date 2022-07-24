import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
	if (
		req.nextUrl.pathname.startsWith("/api/get-url") ||
		req.nextUrl.pathname.includes("_")
	) {
		return NextResponse.next();
	}

	const slug = req.nextUrl.pathname.split("/").pop();

	const data = await (
		await fetch(`${req.nextUrl.origin}/api/get-url/${slug}`)
	).json();

	if (data) {
		return NextResponse.redirect(data.url);
	}
}
