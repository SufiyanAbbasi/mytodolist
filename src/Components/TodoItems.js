import React from 'react'

const TodoItems = ({ todo, onDelete }) => {
  return (

    <div className="card m-auto mb-5  ">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.desc}</p>
        <button className="btn btn-danger" onClick={() => onDelete(todo.sno)}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItems
