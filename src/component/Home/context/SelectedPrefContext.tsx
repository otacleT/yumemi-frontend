import type {Dispatch, ReactNode} from 'react'
import {createContext, useContext, useEffect, useReducer} from 'react'

type Prefecture = {
  prefCode: number
  prefName: string
}

type Action =
  | {type: 'added'; prefCode: number; prefName: string}
  | {type: 'deleted'; prefCode: number}

const SelectedPrefContext = createContext<Prefecture[]>([])

const SelectedPrefDispatchContext = createContext<Dispatch<Action> | null>(null)

export const SelectedPrefProvider = ({children}: {children: ReactNode}) => {
  const [selectedPref, dispatch] = useReducer(prefReducer, [])

  useEffect(() => {
    console.info(selectedPref)
  }, [selectedPref])

  return (
    <SelectedPrefContext.Provider value={selectedPref}>
      <SelectedPrefDispatchContext.Provider value={dispatch}>
        {children}
      </SelectedPrefDispatchContext.Provider>
    </SelectedPrefContext.Provider>
  )
}

export const useSelectedPref = () => {
  return useContext(SelectedPrefContext)
}

export const useSelectedPrefDispatch = () => {
  return useContext(SelectedPrefDispatchContext)
}

const prefReducer = (selectedPref: Prefecture[], action: Action): Prefecture[] => {
  switch (action.type) {
    case 'added': {
      return [
        ...selectedPref,
        {
          prefCode: action.prefCode,
          prefName: action.prefName,
        },
      ]
    }
    case 'deleted': {
      return selectedPref.filter((t) => t.prefCode !== action.prefCode)
    }
    default: {
      throw Error('Unknown action: ' + JSON.stringify(action))
    }
  }
}
