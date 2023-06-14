import { Todo } from "@/model/todos";
import BaseBtn from "./ui/BaseBtn";

type Props = {
  todos: Todo[];
};

const getTimeText = (
  appointedTime: string,
  type: "hour" | "minute",
): string => {
  return type === "hour"
    ? appointedTime.substring(0, 2)
    : appointedTime.substring(-2, 2);
};

export default function TodoCard({ todos }: Props) {
  // console.log(todos, "@투드스");

  const handleCompleteBtn = (
    todoId: string,
    mission: string,
    appointedTime: string,
  ) => {
    console.log("handleCompleteBtn");

    fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify({ todoId, mission, appointedTime }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleDeleteBtn = (todoId: string) => {
    console.log("handleDeleteBtn");

    fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ todoId }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <ul>
      {todos.map(({ mission, appointedTime, isCompleted, _key }) => (
        <li
          className={`flex flex-col items-center w-[360px] gap-4 mb-4 border-2 rounded-md p-4 mt-4 
          ${
            isCompleted
              ? "border-emerald-300 bg-emerald-800"
              : "border-slate-300 bg-slate-50"
          }`}
          key={_key}
        >
          <div
            className={`w-full flex items-center gap-8 font-semibold 
            ${isCompleted && "line-through"}`}
          >
            <time className='w-[50%] text-lg text-right'>
              {getTimeText(appointedTime, "hour")} :{" "}
              {getTimeText(appointedTime, "minute")}
            </time>

            <span className={`w-[50%] `}>{mission}</span>
          </div>

          <div className='flex gap-4'>
            {!isCompleted ? (
              <BaseBtn
                text='Complete'
                onClick={() => handleCompleteBtn(_key, mission, appointedTime)}
              />
            ) : (
              <BaseBtn
                text='Delete' //
                onClick={() => handleDeleteBtn(_key)}
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
