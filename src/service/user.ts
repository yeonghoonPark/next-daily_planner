import { client } from "./sanity";

type OAuthUser = {
  id: string;
  nickname: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export async function addUser({ id, nickname, name, email, image }: OAuthUser) {
  return client.createIfNotExists({
    _type: "user",
    _id: id,
    nickname,
    name,
    email,
    image,
    todos: [],
  });
}

export async function getUserByEmail(userEmail: string) {
  return client.fetch(
    `
      *[_type == "user" && name == "${userEmail}"][0]
    
    `,
  );
}

export async function getTodosByEmail(userEmail: string) {
  return client.fetch(
    `
      *[_type == "user" && email == "${userEmail}"]
      [0]
      {todos[] | order(appointedTime)}
    `,
  );
}

export const createNewTodo = async (
  userId: string,
  mission: string,
  appointedTime: string,
  isCompleted: boolean,
) => {
  return client
    .patch(userId)
    .setIfMissing({ todos: [] })
    .append("todos", [
      {
        _type: "todo",
        mission,
        appointedTime,
        isCompleted,
      },
    ])
    .commit({ autoGenerateArrayKeys: true });
};

export const updateTodo = async (
  userId: string,
  todoId: string,
  mission: string,
  appointedTime: string,
) => {
  console.log("@@@updateTodo@@@", todoId);

  return client
    .patch(userId) //
    .insert("replace", `todos[_key == "${todoId}"]`, [
      {
        _type: "todo",
        mission,
        appointedTime,
        isCompleted: true,
      },
    ])
    .commit({ autoGenerateArrayKeys: true });
};

export const deleteTodo = async (userId: string, todoId: string) => {
  return client
    .patch(userId) //
    .unset([`todos[_key == "${todoId}"]`])
    .commit({ autoGenerateArrayKeys: true });
};
