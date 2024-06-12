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
  createNewTask: (data: Task) => void
  getTaskTitle: (data: string) => void
  deleteTask: (data: Task) => void
  handleCheck: (data: Task) => void
}

export const TaskContext = createContext({} as TaskContextType)
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskTitle, setTaskTitle] = useState('')

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

  function handleCheck(data: Task) {
    console.log('entrei')
    const task = tasks.find((task) => task.id === data.id)

    if (task) {
      toggleTaskFinished(task)
    }
  }

  function toggleTaskFinished(data: Task) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === data.id) {
        return { ...task, isChecked: !task.isChecked }
      } else {
        return task
      }
    })

    setTasks(updatedTasks)
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createNewTask,
        taskTitle,
        getTaskTitle,
        deleteTask,
        handleCheck,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
