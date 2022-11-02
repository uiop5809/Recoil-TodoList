import React, { useEffect } from "react";
import { todoListState } from "./TodoStore.js";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem.jsx";
import TodoListCreator from "./TodoListCreator.jsx";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  useEffect(() => {
    console.log(`todoList: ${JSON.stringify(todoList)}`);
  }, [todoList]);

  return (
    <div>
      <TodoListCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
