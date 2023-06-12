import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  const { mission, appointedTime, isCompleted } = await req.json();

  if (!mission || !appointedTime || isCompleted === undefined) {
    return new Response("Bad Request", { status: 400 });
  }

  return NextResponse.json("");
}
