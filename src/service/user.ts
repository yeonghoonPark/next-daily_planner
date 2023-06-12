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
      {todos}
    `,
  );
}
