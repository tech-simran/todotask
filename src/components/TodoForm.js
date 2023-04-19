import React, { useEffect, useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";
import "./styles.css";
const TodoForm = () => {
  const [task, setTask] = useState("");
  const [click, setClick] = useState(false);
  const submitTask = async () => {
    try {
      const data = task;
      console.log("data", data.length);
      if (data.length > 0) {
        const res = await axios.post("http://localhost:6060/todo/addtask", {
          task: data,
        });
        console.log("result", res);
      }

      setClick(!click);
      if (click) {
        await Swal.fire("Are you want to add task");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onInputChange = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            value={task}
            className="forminputStyle"
            onChange={onInputChange}
            required
          />
          <button onClick={() => submitTask()} className="todoformbtn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
