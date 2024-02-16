import { createContext } from "react"
const initialState = {
    tasks: [],
    loading: false,
    setTasks: () => {
    }
}

export const DataContext = createContext(initialState)