import logo from "./logo.svg";
import Button from "./components/Button";
import FormInput from "./components/FormInput";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <h1>Task List</h1>

      <div>
        <TodoItem />
      </div>

      <div className="input-form">
        <FormInput />
      </div>
    </div>
  );
}

export default App;
