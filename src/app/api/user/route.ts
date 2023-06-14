import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getTodosByEmail, deleteTodo, updateTodo } from "@/service/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  return getTodosByEmail(user.email) //
    .then((res) => NextResponse.json(res.todos))
    .catch((err) => new Response(err, { status: 500 }));
}

// 기능은 DELETE 이지만 NextJS의 DELETE 메서드 이슈로 POST로 작성
export async function POST(req: NextResponse) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  // console.log(await req.json(), "@알이큐제이슨");

  const { todoId } = await req.json();

  if (!todoId) {
    return new Response("Bad Request", { status: 400 });
  }

  return deleteTodo(user.id, todoId)
    .then((res) => NextResponse.json(res))
    .catch((err) => new Response(err, { status: 500 }));
}

export async function PUT(req: NextResponse) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  // console.log(await req.json(), "@알이큐제이슨");

  const { todoId, mission, appointedTime } = await req.json();

  if (!todoId) {
    return new Response("Bad Request", { status: 400 });
  }

  return updateTodo(user.id, todoId, mission, appointedTime)
    .then((res) => NextResponse.json(res))
    .catch((err) => new Response(err, { status: 500 }));
}
