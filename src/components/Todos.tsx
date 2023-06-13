"use client";

import { Todo } from "@/model/todos";
import { PacmanLoader } from "react-spinners";
import useSWR from "swr";
import TodoCard from "./TodoCard";
import TodosGrid from "./TodosGrid";

export default function Todos() {
  const { data: todos, isLoading, error } = useSWR<Todo[]>("/api/user");
  console.log(todos, "@@@데이터");
  return (
    <section>
      {isLoading && (
        <div className='flex justify-center items-center mt-16'>
          <PacmanLoader color='#36d7b7' />
        </div>
      )}

      {todos && (
        <TodosGrid>
          <TodoCard todos={todos} />
        </TodosGrid>
      )}
    </section>
  );
}
