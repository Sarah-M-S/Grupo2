import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const registerUser = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const user = await response.json();
      dispatch({ type: 'LOGIN', payload: user})

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading, error };
};

export default useRegister;