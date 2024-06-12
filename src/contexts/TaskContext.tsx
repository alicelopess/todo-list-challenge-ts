import { ReactNode, createContext, useState } from 'react'

// Types
interface TaskContextProviderProps {
  children: ReactNode
}

interface Task {
  title: string
  createdAt: Date
  isChecked: boolean
  id?: number
}

interface TaskContextType {
  tasks: Task[]
  taskTitle: string
  // numberOfFinishedTasks: number
  createNewTask: (data: Task) => void
  getTaskTitle: (data: string) => void
  deleteTask: (data: Task) => void
  markTaskAsFinished: (data: Task) => void
  // countFinishedTasks: () => void
}

export const TaskContext = createContext({} as TaskContextType)
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskTitle, setTaskTitle] = useState('')
  // const [numberOfFinishedTasks, setnumberOfFinishedTasks] = useState(0)

  function createNewTask(data: Task) {
    setTasks([...tasks, { ...data, id: tasks.length }])
  }

  function getTaskTitle(data: string) {
    setTaskTitle(data)
  }

  function deleteTask(data: Task) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task !== data)
    setTasks(tasksWithoutDeletedOne)
  }

  function markTaskAsFinished(data: Task) {
    console.log('entrei')
    const task = tasks.find((task) => task.id === data.id)

    if (task) {
      handleToggleTaskAsFinished(task)
    }
  }

  function handleToggleTaskAsFinished(data: Task) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === data.id) {
        return { ...task, isChecked: !task.isChecked }
      } else {
        return task
      }
    })

    setTasks(updatedTasks)
  }

  // function handleCountFinishedTasks() {
  //   const count = tasks.reduce((counter, task) => {
  //     if (task.isChecked) {
  //       counter += 1
  //       }
  //     return counter
  //   }, 0)
  //   setnumberOfFinishedTasks(count)
  // }

  // function countFinishedTasks() {
  //   handleCountFinishedTasks()
  // }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createNewTask,
        taskTitle,
        getTaskTitle,
        deleteTask,
        markTaskAsFinished,
        // numberOfFinishedTasks,
        // countFinishedTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
