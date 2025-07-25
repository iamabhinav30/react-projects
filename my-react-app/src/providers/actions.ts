import { EActions } from "../enums/EActions";
import type { Todo } from "../types/IState";
import { actionCreator } from "./creator";

/**
 * Action to toggle error state
 * Usage: dispatch(appError.action(true));
 */
export const appError = actionCreator<boolean>(EActions.SHOW_ERROR);

/**
 * Action to toggle global spinner/loading state
 * Usage: dispatch(appSpinner.action(true));
 */
export const appSpinner = actionCreator<boolean>(EActions.SHOW_SPINNER);

/**
 * Action to update counter value
 * Usage: dispatch(appCounter.action(5));
 */
export const appCounter = actionCreator<number>(EActions.COUNTER);

// Todo Actions
export const addTodo = actionCreator<Todo>(EActions.ADD_TODO);
export const toggleTodo = actionCreator<number>(EActions.TOGGLE_TODO);
export const removeTodo = actionCreator<number>(EActions.REMOVE_TODO);