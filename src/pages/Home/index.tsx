import {
  BaseButton,
  BaseInput,
  CreatedTasks,
  FinishedTasks,
  FormContainer,
  HomeContainer,
  TaskCounter,
  Tasks,
  TasksContainer,
  TasksInfo,
} from './styles'
import { PlusCircle } from '@phosphor-icons/react'
import emptyTasks from '../../assets/emptyTasks.svg'

export function Home() {
  return (
    <HomeContainer>
      <form action="#">
        <FormContainer>
          <BaseInput
            type="text"
            id="task"
            placeholder="Adicione uma nova tarefa"
          />
          <BaseButton>
            Criar <PlusCircle size={16} />
          </BaseButton>
        </FormContainer>
      </form>
      <TasksContainer>
        <TasksInfo>
          <CreatedTasks>
            Tarefas Criadas <TaskCounter>0</TaskCounter>
          </CreatedTasks>
          <FinishedTasks>
            Concluídas <TaskCounter>0</TaskCounter>
          </FinishedTasks>
        </TasksInfo>
        <Tasks>
          <img src={emptyTasks} alt="" />
          <span>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </span>
        </Tasks>
      </TasksContainer>
    </HomeContainer>
  )
}
