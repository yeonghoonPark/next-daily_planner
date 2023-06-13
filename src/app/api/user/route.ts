import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getTodosByEmail } from "@/service/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  return getTodosByEmail(user.email) //
    .then((res) => NextResponse.json(res?.todos))
    .catch((err) => new Response(err, { status: 500 }));
}
