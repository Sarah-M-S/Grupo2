import { createContext, useEffect, useReducer } from "react";
import { useTokenCheck } from "../hooks/useTokenCheck";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("accessToken", action.payload.accessToken);
      return { ...state, payload: action.payload };

    case "LOGOUT":
        localStorage.setItem("accessToken", null)
      return { ...state, payload: null };

    case "AUTH_IS_READY":
        return {...state, payload: action.payload, authIsReady: true}

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    payload: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        dispatch({ type: "AUTH_IS_READY", payload: null });
        return;
      }

      try {
        const res = await fetch("http://localhost:8083/admin", {
          method: "GET",
          headers: {
            "access-token": token,
          },
        }).then((res) => res.json());

        if (!res || res.message === "Unauthorized!") {
            dispatch({ type: "AUTH_IS_READY", payload: null });
            return
        }

        dispatch({ type: "AUTH_IS_READY", payload: res });
      } catch (err) {
        console.log(err.message);
      }
    };
    unsub();
  }, []);

  console.log("Auth State", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
