export const CHANGE_UNIVERSITY_TODO_DESCRIPTION = 'CHANGE_UNIVERSITY_TODO_DESCRIPTION'
export const CHANGE_UNIVERSITY_TODO_PRIORITY = 'CHANGE_UNIVERSITY_TODO_PRIORITY'
export const CHANGE_UNIVERSITY_TODO_RESPONSIBLE = 'CHANGE_UNIVERSITY_TODO_RESPONSIBLE'
export const SUBMIT_CREATION_UNIVERSITY_TODO= 'SUBMIT_CREATION_UNIVERSITY_TODO'

export const changeUniversityTodoDescription = (event) => {
  const description = event.target.value
  return { type: CHANGE_UNIVERSITY_TODO_DESCRIPTION, description }
}

export const changeUniversityTodoPriority = (event) => {
  const priority = event.target.value
  return { type: CHANGE_UNIVERSITY_TODO_PRIORITY, priority }
}

export const changeUniversityTodoResponsible = (event) => {
  const responsible = event.target.value
  return { type: CHANGE_UNIVERSITY_TODO_RESPONSIBLE, responsible }
}
