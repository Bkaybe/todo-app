import { todos} from "../data";
import SingleTodoItem from "./SingleToDoItem"

const ToDosContainer = () => {
  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <SingleTodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ToDosContainer;
