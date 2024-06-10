import React from 'react'
import TodoItem from "./TodoItems"

const Todos = (props) => {
  return (
    <div className="container  ">
      <h3 className="my-5">Todos List</h3>
      <div className="my-5 d-flex gap-5 ">
        {props.todos.length === 0 ? (
         
            <div className="col-12 m-5 text-center">
              <div className="alert alert-info  m-auto" role="alert">
                No Todos to display
              </div>
            </div>
        ) :
        props.todos.map((todo) => (
          // Logging the todo object to inspect its structure
          console.log("Todo:", todo),
          <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
        ))
        }
      </div>
    </div>
  )
}

export default Todos
