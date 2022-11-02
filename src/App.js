import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
