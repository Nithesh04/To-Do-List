import react,{ useState } from 'react'
import Todolist from './Todolist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Todolist></Todolist>
  )
}

export default App
