import { Outlet } from 'react-router-dom'
import TodoList from '../TodoList'

import './Template.scss'

const Template = () => {
  return (
    <div className='Template'>
      <div className='sidebar'>
        <TodoList />
      </div>

      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}

export default Template
