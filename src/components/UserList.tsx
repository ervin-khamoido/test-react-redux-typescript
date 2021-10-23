import { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypedSelector';

const UserList: FC = () => {
   const {users, loading, error} = useTypeSelector(state => state.user);
   const {fetchUsers} = useActions();

   useEffect(() => {
      fetchUsers()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   if (loading) {
      return <h1>Loading...</h1>
   }

   if (error) {
      return <h1>Error!</h1>
   }

   return (
      <div>
         {
            users.map(user => <div key={user.name}>{user.name}</div>)
         }
      </div>
   );
};

export default UserList;