import { Check, Trash } from '@phosphor-icons/react'
import {
  CheckboxDisplay,
  CheckboxText,
  Label,
  Task,
  TasksWrapper,
} from './styles'
import emptyTasks from '../../../assets/emptyTasks.svg'
import { useContext } from 'react'
import { TaskContext } from '../../../contexts/TaskContext'

export function Tasks() {
  const { tasks, deleteTask, handleCheck } = useContext(TaskContext)

  return tasks.length === 0 ? (
    <TasksWrapper state="empty">
      <img src={emptyTasks} alt="" />
      <span>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </span>
    </TasksWrapper>
  ) : (
    <TasksWrapper state="filled">
      {tasks.map((item) => {
        console.log(item)
        console.log(item.isChecked)
        return (
          <Task onClick={() => handleCheck(item)} key={item.id}>
            {/* <Label state={item.isChecked ? 'checked' : 'default'}>
                    <CheckboxInput state={item.isChecked ? 'checked' : 'default'} />
                    <CheckboxDisplay>
                      <CheckboxIcon>
                        <Check size={10} />
                      </CheckboxIcon>
                    </CheckboxDisplay>
                    <span>{item.title}</span>
                  </Label>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteTask(item)
                    }}
                  >
                    <Trash size={16} />
                  </button> */}

            <Label onClick={() => handleCheck(item)} key={item.id}>
              <CheckboxDisplay state={item.isChecked ? 'checked' : 'default'}>
                <Check size={10} />
              </CheckboxDisplay>
              <CheckboxText state={item.isChecked ? 'checked' : 'default'}>
                {item.title}
              </CheckboxText>
            </Label>
            <button
              onClick={(e) => {
                e.stopPropagation()
                deleteTask(item)
              }}
            >
              <Trash size={16} />
            </button>
          </Task>
        )
      })}
    </TasksWrapper>
  )
}
