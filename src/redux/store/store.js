const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const EDIT_TODO = "EDIT_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const editTodo = (payload) => {
  return { type: EDIT_TODO, payload };
};

const initialState = {
  todos: [
    { id: 1, title: "물먹기", content: "물먹기2", done: false },
    { id: 2, title: "밥먹기", content: "밥먹기2", done: true },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("액션", action);
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              done: !todo.done,
            };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
};
export default todos;
