/* eslint-disable react/prop-types */
import Checkbox from "./Checkbox";
import PrimaryButton from "./PrimaryButton";

const SingleToDoItem = ({ todo }) => {
  return (
    <div className="flex flex-col items-center justify-between rounded-2xl border-2 border-[#685254] p-4 text-lg md:flex-row lg:items-center">
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
