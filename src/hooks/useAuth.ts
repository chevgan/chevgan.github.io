import { useContext } from 'react';
import AuthContext from '~contexts/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('контекст не найден');

  return context;
};

export default useAuth;
