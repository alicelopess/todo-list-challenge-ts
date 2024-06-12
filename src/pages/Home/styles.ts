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

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

export const FormContainer = styled.div`
  width: 46rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  transform: translateY(-50%);

  @media (max-width: 412px) {
    flex-direction: column;
    transform: translateY(-25%);
  }
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

  @media (max-width: 412px) {
    width: 100%;
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

  @media (max-width: 412px) {
    width: 100%;
  }
`
export const TasksContainer = styled.div`
  width: 46rem;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 1.5rem;

  @media (max-width: 768px) {
    width: 100%;
    /* max-width: 768px; */
  }
`
export const TasksInfo = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 320px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
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
