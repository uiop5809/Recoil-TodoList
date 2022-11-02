import React from "react";
import { filteredTodoListState } from "./TodoStore.js";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem.jsx";
import TodoListCreator from "./TodoListCreator.jsx";
import TodoListFilters from "./TodoListFilters.jsx";
import TodoListStats from "./TodoListStats.jsx";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoListCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
