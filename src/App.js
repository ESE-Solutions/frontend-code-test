import './App.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { StateContextProvider } from './context/state'
import Template from './components/Template'
import TodoShow from './components/TodoShow'
import TodoAdd from './components/TodoAdd'

/*
  TODO: Add a new route to show the TodoAdd component when the user clicks on the "Add Todo" button.

  The Add Todo button is found in the TodoList component under `components/TodoList/index.js`.
  Use the `redirect` function from `react-router-dom` to redirect the user to the new route when the button is pressed.
  The new route should be `/todo/add` and should render the TodoAdd component.
*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        path: 'todo/:todoId',
        element: <TodoShow />
      }
    ]
  }
])

function App () {
  return (
    <StateContextProvider>
      <RouterProvider router={router} />
    </StateContextProvider>
  )
}

export default App
