export const CHANGE_TODO_DESCRIPTION = 'CHANGE_TODO_DESCRIPTION'
export const CHANGE_TODO_PRIORITY = 'CHANGE_TODO_PRIORITY'
export const CHANGE_TODO_RESPONSIBLE = 'CHANGE_TODO_RESPONSIBLE'
export const SUBMIT = 'SUBMIT'

export const changeTodoDescription = (event) => {
  const description = event.target.value
  return { type: CHANGE_TODO_DESCRIPTION, description }
}

export const changeTodoPriority = (event) => {
  const priority = event.target.value
  return { type: CHANGE_TODO_PRIORITY, priority }
}

export const changeTodoResponsible = (event) => {
  const responsible = event.target.value
  return { type: CHANGE_TODO_RESPONSIBLE, responsible }
}
