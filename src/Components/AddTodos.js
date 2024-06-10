import React, { useState } from 'react'

const AddTodos = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Form must be completed")
        }
        else {
            addTodo(title, desc)
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className='container'>
            <h2>Todo Form</h2>
            <form onSubmit={submit}>
                <fieldset>
                    <div className="mb-3">
                        <label htmlFor="todoTitle" className="form-label">Todo Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                            id="todoTitle"
                            className="form-control"
                            placeholder="Enter title"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="todoDescription" className="form-label">Todo Description</label>
                        <textarea
                            id="todoDescription"
                            value={desc}
                            onChange={(e) => { setDesc(e.target.value) }}
                            className="form-control"
                            placeholder="Enter description"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Todo</button>
                </fieldset>
            </form>
        </div>

    )
}

export default AddTodos
