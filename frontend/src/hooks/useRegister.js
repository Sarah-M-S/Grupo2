import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import useAddress from "../components/useAddress";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const { backend } = useAddress();


  const registerUser = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(backend + '/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      .then(response => response.json())

      // console.log(response)
      dispatch({ type: 'LOGIN', payload: response})

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading, error };
};

export default useRegister;