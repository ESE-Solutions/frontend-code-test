import { useStateContext } from '../../context/state'
import { NavLink } from 'react-router-dom'

/*
  TODO: Add a simple style to the TodoList component to make the <li> elements look a bit nicer

  Start by removing the bullet points and fixing the links turning purple when the user clicks on them.
*/

import './TodoList.scss'

const TodoList = () => {
  const { todoItems } = useStateContext()

  return (
    <div className='TodoList'>
      <h1>TodoList</h1>

      <button>Add Todo</button>

      <ul>
        {todoItems.map(todoItem => (
          <li key={todoItem.id}>
            <NavLink to={`todo/${todoItem.id}`}>{todoItem.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
