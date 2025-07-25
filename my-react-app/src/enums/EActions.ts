/**
 * Enum representing all possible action types for global state management.
 * Used with reducers and action creators to avoid hardcoding strings.
 */
export enum EActions {
  SHOW_ERROR = 'SHOW_ERROR',
  SHOW_SPINNER = 'SHOW_SPINNER', 
  COUNTER = 'COUNTER',

  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  REMOVE_TODO = 'REMOVE_TODO'
}
