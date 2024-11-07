import React, { useContext } from 'react'
import { AuthContext } from '../context.js/AuthContext'

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw Error('useAuthContext must be inside an AuthContextProvider')
    }

    return context

}

