import { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypedSelector';

const TodoList: FC = () => {
   const {page, error, loading, todos, limit} = useTypeSelector(state => state.todo);
   const {fetchTodos, setTodoPage} = useActions();
   const pages = [1, 2, 3, 4, 5];

   useEffect(() => {
      fetchTodos(page, limit)
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [page])

   if (loading) {
      return <h1>Loading...</h1>
   }

   if (error) {
      return <h1>Error!</h1>
   }

   return (
      <div>
         {
            todos.map(todo => (
               <div key={todo.id}>{todo.id} - {todo.title}</div>
            ))
         }
         <div style={{display: 'flex'}}>
            {
               pages.map(p => (
                  <div
                     onClick={() => setTodoPage(p)}
                     key={p}
                     style={{border: p === page ? '2px solid green' : '2px solid darktred', padding: 10}}
                  >
                     {p}
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export default TodoList;