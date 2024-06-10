import {
  BaseButton,
  BaseInput,
  CheckboxDisplay,
  CheckboxIcon,
  CheckboxInput,
  CreatedTasks,
  FinishedTasks,
  FormContainer,
  HomeContainer,
  Label,
  Task,
  TaskCounter,
  Tasks,
  TasksContainer,
  TasksInfo,
} from './styles'
import { PlusCircle, Trash, Check } from '@phosphor-icons/react'
import emptyTasks from '../../assets/emptyTasks.svg'
import { useState } from 'react'

interface Task {
  title: string
  createdAt: Date
  finishedAt: Date | null
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskTitle, setTaskTitle] = useState('')
  console.log(taskTitle)

  // const [selected, setSelected] = useState(false)

  return (
    <HomeContainer>
      <form action="#">
        <FormContainer>
          <BaseInput
            type="text"
            id="task"
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setTaskTitle(e.target.value)}
            // value={task}
          />
          <BaseButton
            onClick={() => {
              setTasks([
                ...tasks,
                {
                  title: taskTitle,
                  createdAt: new Date(),
                  finishedAt: null,
                },
              ])
              console.log(tasks)
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
        <Tasks>
          {tasks.length === 0 ? (
            <>
              <img src={emptyTasks} alt="" />
              <span>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <br />
                Crie tarefas e organize seus itens a fazer
              </span>
            </>
          ) : (
            tasks.map((item) => (
              <Task key={null}>
                <Label>
                  <CheckboxInput />
                  <CheckboxDisplay>
                    <CheckboxIcon>
                      <Check size={10} />
                    </CheckboxIcon>
                  </CheckboxDisplay>
                  <span>{item.title}</span>
                </Label>
                <button>
                  <Trash size={16} />
                </button>
              </Task>
            ))
          )}
        </Tasks>
      </TasksContainer>
    </HomeContainer>
  )
}
