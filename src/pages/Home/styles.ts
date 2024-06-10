import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 37px;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const FormContainer = styled.div`
  width: 46rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  transform: translateY(-50%);
`
export const BaseInput = styled.input`
  flex: 1;
  background: ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-100']};

  border: 1px solid ${(props) => props.theme['gray-700']};
  border-radius: 0.5rem;
  padding: 1rem;

  font-weight: 400;
  font-size: 1rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['purple-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-300']};
  }
`
export const BaseButton = styled.button`
  width: fit-content;
  border: 0;
  padding: 1rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-100']};
  background: ${(props) => props.theme['blue-dark']};

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.blue};
  }
`
export const TasksContainer = styled.div`
  width: 46rem;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 1.5rem;
`
export const TasksInfo = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TaskCounter = styled.span`
  background: ${(props) => props.theme['gray-400']};
  border-radius: 999rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  padding: 0.125rem 0.5rem;
  color: ${(props) => props.theme['gray-200']};
  font-size: 0.75rem;
`

export const CreatedTasks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['blue-dark']};

  font-size: 0.875rem;
  font-weight: 700;
`
export const FinishedTasks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['purple-dark']};

  font-size: 0.875rem;
  font-weight: 700;
`

export const Tasks = styled.main`
  border-top: 1px solid ${(props) => props.theme['gray-400']};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4rem 1.5rem;
  gap: 1rem;

  font-size: 1rem;
  font-weight: 400;
  line-height: 140%;
`

export const Task = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme['gray-400']};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;

  background: ${(props) => props.theme['gray-500']};

  button {
    border: none;
    border-radius: 0.25rem;
    color: ${(props) => props.theme['gray-300']};
    width: 24px;
    height: 24px;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['gray-400']};
      color: ${(props) => props.theme.danger};
    }
  }
`

export const Label = styled.label`
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme['gray-100']};
  line-height: normal;

  cursor: pointer;
`

export const CheckboxDisplay = styled.div``
export const CheckboxIcon = styled.span`
  display: none;
`

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  & + ${CheckboxDisplay} {
    width: 17.45px;
    height: 17.45px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.blue};

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:checked + ${CheckboxDisplay} {
    border: none;
    background-color: ${(props) => props.theme['purple-dark']};

    ${CheckboxIcon} {
      display: block;
      color: ${(props) => props.theme['gray-100']};
    }
  }
`
