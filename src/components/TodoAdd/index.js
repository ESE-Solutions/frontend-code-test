import { useState } from 'react'
import { useStateContext } from '../../context/state'

import './TodoAdd.scss'

const TodoAdd = () => {
  const { todoItems, setTodoItems } = useStateContext()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    /*
      TODO: Implement this function to add a new todo item to the list.

      Once the item is added to the list, redirect the user to the newly created todo item.
    */
  }

  return (
    <div className='TodoAdd'>
      <h1>Add Todo</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          type='text'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoAdd
