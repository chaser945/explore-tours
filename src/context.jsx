import { createContext, useContext } from "react"
import { useState } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [showAside, setShowAside] = useState(false)
  const displayAside = () => {
    setShowAside(true)
  }
  const hideAside = () => {
    setShowAside(false)
  }
  return (
    <AppContext.Provider value={{ showAside, displayAside, hideAside }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)

export default AppProvider
