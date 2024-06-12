import styled, { css } from 'styled-components'

interface TasksWrapperProps {
  state: 'empty' | 'filled'
}

interface CheckboxProps {
  state: 'default' | 'checked'
}

export const TasksWrapper = styled.main<{ state: TasksWrapperProps['state'] }>`
  border-top: 1px solid ${(props) => props.theme['gray-400']};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4rem 1.5rem;
  gap: 1rem;

  font-size: 1rem;
  font-weight: 400;
  line-height: 140%;

  ${({ state }) => {
    if (state === 'filled') {
      return css`
        border: 0;
        padding: 0;
        gap: 0.75rem;
      `
    }
  }}
`

export const Task = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme['gray-400']};
  cursor: pointer;
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

export const Label = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
`
export const CheckboxText = styled.span<{ state: CheckboxProps['state'] }>`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme['gray-100']};
  line-height: normal;

  ${({ state }) => {
    if (state === 'checked') {
      return css`
        text-decoration: line-through;
        color: ${(props) => props.theme['gray-300']};
      `
    }
  }}
`

export const CheckboxDisplay = styled.div<{ state: CheckboxProps['state'] }>`
  width: 17.45px;
  height: 17.45px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.blue};

  display: flex;
  justify-content: center;
  align-items: center;

  & > :first-child {
    display: none;
  }

  ${({ state }) => {
    if (state === 'checked') {
      return css`
        border: none;
        background-color: ${(props) => props.theme['purple-dark']};

        & > :first-child {
          display: inline-block;
          color: ${(props) => props.theme['gray-100']};
        }
      `
    }
  }}
`
