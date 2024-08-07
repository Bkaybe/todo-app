/* eslint-disable react/prop-types */
import Checkbox from "./Checkbox";
import PrimaryButton from "./PrimaryButton";

const SingleToDoItem = ({ todo }) => {
  return (
    <div className="todo">
      <div className="todo-item">
        <Checkbox />
        <p>{todo.title}</p>
      </div>
      <div className="flex-container">
        <PrimaryButton>Edit</PrimaryButton>
        <button className="delete-button" onClick="deleteTodo(${index})">
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleToDoItem;
