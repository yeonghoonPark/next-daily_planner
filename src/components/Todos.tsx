"use client";

import { Todo } from "@/model/todos";
import useSWR from "swr";
import TodoCard from "./TodoCard";
import TodosGrid from "./TodosGrid";
import LoadingPackman from "./ui/LoadingPackman";

export default function Todos() {
  const { data: todos, isLoading } = useSWR<Todo[]>("/api/user");
  console.log(todos, "@@@데이터");
  return (
    <section>
      {isLoading && <LoadingPackman />}

      {todos && (
        <TodosGrid>
          <TodoCard todos={todos} />
        </TodosGrid>
      )}
    </section>
  );
}
