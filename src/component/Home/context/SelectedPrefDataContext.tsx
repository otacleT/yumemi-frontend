import type {Dispatch, ReactNode} from 'react'
import {createContext, useContext, useReducer} from 'react'

type SelectedPrefDataType = {
  prefName: string
  prefCode: number
  data: {
    totalPopulation: number[]
    youthPopulation: number[]
    workingAgePopulation: number[]
    elderlyPopulation: number[]
  }
}

type Action = {type: 'added'; data: SelectedPrefDataType} | {type: 'deleted'; prefCode: number}

const SelectedPrefDataContext = createContext<SelectedPrefDataType[]>([])
const SelectedPrefDataDispatchContext = createContext<Dispatch<Action> | null>(null)

export const SelectedPrefDataProvider = ({children}: {children: ReactNode}) => {
  const [selectedPrefData, dispatch] = useReducer(prefReducer, [])

  return (
    <SelectedPrefDataContext.Provider value={selectedPrefData}>
      <SelectedPrefDataDispatchContext.Provider value={dispatch}>
        {children}
      </SelectedPrefDataDispatchContext.Provider>
    </SelectedPrefDataContext.Provider>
  )
}

export const useSelectedPref = () => useContext(SelectedPrefDataContext)
export const useSelectedPrefDispatch = () => useContext(SelectedPrefDataDispatchContext)

const prefReducer = (
  selectedPrefData: SelectedPrefDataType[],
  action: Action
): SelectedPrefDataType[] => {
  switch (action.type) {
    case 'added':
      return [
        ...selectedPrefData,
        {
          prefName: action.data.prefName,
          prefCode: action.data.prefCode,
          data: action.data.data,
        },
      ]
    case 'deleted':
      return selectedPrefData.filter((t) => t.prefCode !== action.prefCode)
    default:
      throw Error('Unknown action: ' + JSON.stringify(action))
  }
}
