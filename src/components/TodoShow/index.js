import { useTodoItem } from '../../context/state'
import { useParams } from 'react-router-dom'

const TodoShow = () => {
  const { todoId } = useParams()
  const item = useTodoItem(Number(todoId))

  if (!item) {
    return <div>Todo not found</div>
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  )
}

export default TodoShow
