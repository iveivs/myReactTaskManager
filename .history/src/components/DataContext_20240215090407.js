import { createContext } from "react"
const initialState = {
    tasks: [],
    loading: false,
    setHistory: () => {
    }
}

export const DataContext = createContext(initialState)