import AddToDoForm from "./AddToDoForm";
import PageTitle from "./PageTitle";
// import Form from "./TailwindDemo/Form";
import ToDosContainer from "./ToDosContainer";

const App = () => {
  return (
    <main>
      <PageTitle text="My To Do App" />
      <AddToDoForm />
      <ToDosContainer />
      {/* <Form /> */}
    </main>
  );
};

export default App;
