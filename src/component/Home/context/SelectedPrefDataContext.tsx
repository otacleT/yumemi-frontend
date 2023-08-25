import React, {createContext, useContext, useReducer} from 'react'

import type {PrefectureType} from '@/type/PrefectureType'

type SelectedPrefDataType = PrefectureType & {
  data: {
    totalPopulation: number[]
    youthPopulation: number[]
    workingAgePopulation: number[]
    elderlyPopulation: number[]
  }
}

type Action = {type: 'added'; data: SelectedPrefDataType} | {type: 'deleted'; prefCode: number}

export const SelectedPrefDataContext = createContext<SelectedPrefDataType[]>([])
export const SelectedPrefDataDispatchContext = createContext<React.Dispatch<Action> | null>(null)

export const SelectedPrefDataProvider = ({children}: {children: React.ReactNode}) => {
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
