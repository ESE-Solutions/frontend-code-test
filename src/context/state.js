import { createContext, useState, useContext, useMemo } from 'react'

export const StateContext = createContext({})

const initialTestTodo = [
  {
    id: 1,
    title: 'Test Todo 1',
    description: 'This is a test todo.'
  },
  {
    id: 2,
    title: 'Test Todo 2',
    description: 'This is a test todo.'
  },
  {
    id: 3,
    title: 'Test Todo 3',
    description: 'This is a test todo.'
  }
]

export const StateContextProvider = props => {
  const { children } = props

  /*
    TODO: Implement a useEffect hook to fetch data from the API.

    Data should be fetched from the `todos.json` file located in the public directory of the project.
    Use any method you prefer to fetch the data.
  */

  const [todoItems, setTodoItems] = useState(initialTestTodo)

  return (
    <StateContext.Provider value={{ todoItems, setTodoItems }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => {
  return useContext(StateContext)
}

/*
  TODO: Find the bug in this function.

  Users are reporting that they are only able to view the first todo item they click.
  They can't navigate to any other todo items after the first one.
*/

export const useTodoItem = id => {
  const { todoItems } = useStateContext()

  const item = useMemo(() => {
    return todoItems.find(todo => todo.id === id)
  }, [])

  return item
}
