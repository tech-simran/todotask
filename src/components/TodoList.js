import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete, } from "react-icons/md";
import './styles.css'
import {DragDropContext,Droppable,Draggable}  from 'react-beautiful-dnd'
const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:6060/todo/showlist");
      console.log("response", res.data.Response);
      setTodo(res.data.Response);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTask = async(id)=>{
    const res = await axios.delete(`http://localhost:6060/todo/deletetask/${id}`)
     console.log(" delete response",res)
    const newTodo = todo.filter((item)=>item.id!==id)
    setTodo(newTodo)

  }

  useEffect(() => {
    getData();
  }, []);

 
  return (
    <>
    <table className="table">
      <DragDropContext>
        <Droppable droppableId="tododata">
          {
            (provided)=>(
              <tbody ref={provided.innerRef} {...provided.droppableProps}>
                {
                     todo.map((ele) => (
                    
                        <Draggable draggableId={ele.id}>
                          {
                              (provided)=>(
                                <>
                                 <tr
                              
                             
                               
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <td  className="listinputStyle">{ele.task}</td>
                                <td> <button style={{width:"70px",height:"40px",background:"red"}} onClick={()=>deleteTask(ele.id)}><MdDelete style={{fontSize:"30px",color:"white"}}/></button></td>
                              </tr>
                        
                                </>
                               
                             
                               )
                          }
                       
                        </Draggable>
                     
                    ))
                }
              </tbody>
             
            )
          }
        </Droppable>
     
      </DragDropContext>
      
    </table>
    </>
    
  );
};

export default TodoList;
