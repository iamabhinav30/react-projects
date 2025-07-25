
import type { IAction } from "../types";
import type { IState } from "../types/IState";
import { addTodo, appCounter, appError, appSpinner, removeTodo, toggleTodo } from "./actions";

/**
 * Reducer function for managing global state transitions.
 * It handles actions related to error, loading, and counter.
 *
 * @param state - current application state
 * @param action - dispatched action with type and payload
 * @returns updated application state
 */
export const reducer = (state: IState, { type, payload }: IAction): IState => {
    switch (type) {

        /**
         * Handle global error state
         */
        case appError.type:
            return {
                ...state,
                isError: payload
            };

        /**
         * Handle loading spinner state
         */
        case appSpinner.type:
            return {
                ...state,
                isLoading: payload
            };

        /**
         * Handle counter update state
         */
        case appCounter.type:
            return {
                ...state,
                isCounter: payload
            };

        case addTodo.type:
            return { ...state, todos: [...state.todos ?? [], payload] };

        case toggleTodo.type:
            return {
                ...state,
                todos: state.todos?.map(todo =>
                    todo.id === payload ? { ...todo, completed: !todo.completed } : todo
                )
            };

        case removeTodo.type:
            return {
                ...state,
                todos: state.todos?.filter(todo => todo.id !== payload)
            };

        /**
         * Fallback: return current state if action type is unrecognized
         */
        default:
            return state;
    }
};
