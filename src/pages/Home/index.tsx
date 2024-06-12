import {
  BaseButton,
  BaseInput,
  CreatedTasks,
  FinishedTasks,
  FormContainer,
  HomeContainer,
  TaskCounter,
  TasksContainer,
  TasksInfo,
} from './styles'
import { PlusCircle } from '@phosphor-icons/react'
import { Tasks } from './Tasks'
import { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'

export function Home() {
  const { tasks, taskTitle, getTaskTitle, createNewTask } =
    useContext(TaskContext)

  return (
    <HomeContainer>
      <form action="#">
        <FormContainer>
          <BaseInput
            type="text"
            id="task"
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => getTaskTitle(e.target.value)}
          />
          <BaseButton
            onClick={() => {
              createNewTask({
                title: taskTitle,
                createdAt: new Date(),
                isChecked: false,
              })
            }}
          >
            Criar <PlusCircle size={16} />
          </BaseButton>
        </FormContainer>
      </form>
      <TasksContainer>
        <TasksInfo>
          <CreatedTasks>
            Tarefas Criadas <TaskCounter>{tasks.length}</TaskCounter>
          </CreatedTasks>
          <FinishedTasks>
            Concluídas <TaskCounter>0</TaskCounter>
          </FinishedTasks>
        </TasksInfo>
        <Tasks />
      </TasksContainer>
    </HomeContainer>
  )
}
