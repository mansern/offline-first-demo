import React, { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Button, Label, Input } from "reactstrap";

// local import
import { addTodoOffline } from "../redux/actions/app";

/**
 * Home Component of offline-first Boilerplate.
 * @name Home
 */

function Home() {
  // redux hook methods
  useSelector(state => {
    return {
      todoItem: state.app.todoItem,
      status: state.app.status
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  // redux hook methods

  const [todo, setTodo] = useState("");

  const setTodoFunc = e => {
    dispatch(addTodoOffline(todo));
  };

  return (
    <>
      <h1>Home Screen</h1>
      <Label for="text">Add an Item</Label>
      <Input
        type="text"
        name="text"
        id="text"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        placeholder="Enter item name"
      />
      <Button onClick={setTodoFunc}>Add</Button>
    </>
  );
}

export default Home;
