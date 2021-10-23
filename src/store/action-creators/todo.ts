import {Dispatch} from 'redux';
import axios from "axios";
import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = (page: number = 1, limit: number = 10) => {
   return async (dispatch: Dispatch<TodoAction>) => {
      try {
         dispatch({type: TodoActionTypes.FETCH_TODOS});
         const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {params: {_page: page, _limit: limit}});
         dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data});
      } catch (error) {
         dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'An error occurred while loading users!'})
      }
   }
}

export const setTodoPage = (page: number) :TodoAction => ({type: TodoActionTypes.SET_TODOS_PAGE, payload: page})