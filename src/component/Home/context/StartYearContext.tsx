import React, {createContext, useContext, useState} from 'react'

type ContextType = {
  startYear: number
  setStartYear: React.Dispatch<React.SetStateAction<number>>
}

const StartYearContext = createContext<ContextType>({
  startYear: 1960,
  setStartYear: () => {},
})
export const StartYearProvider = ({children}: {children: React.ReactNode}) => {
  const [startYear, setStartYear] = useState<number>(1960)

  return (
    <StartYearContext.Provider
      value={{
        startYear,
        setStartYear,
      }}
    >
      {children}
    </StartYearContext.Provider>
  )
}

export const useStartYear = () => useContext(StartYearContext)
