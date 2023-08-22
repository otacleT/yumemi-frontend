import type {Dispatch, ReactNode} from 'react'
import {createContext, useContext, useEffect, useReducer} from 'react'

import type {PopulationRes} from '@/lib/dto'

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

type Action =
  | {type: 'added'; prefCode: number; prefName: string}
  | {type: 'deleted'; prefCode: number}
  | {type: 'fetched'; payload: SelectedPrefDataType}

const SelectedPrefDataContext = createContext<SelectedPrefDataType[]>([])
const SelectedPrefDataDispatchContext = createContext<Dispatch<Action> | null>(null)

const mapPopulationData = (prefData: PopulationRes) => ({
  totalPopulation: prefData.result.data[0].data.map((t) => t.value),
  youthPopulation: prefData.result.data[1].data.map((t) => t.value),
  workingAgePopulation: prefData.result.data[2].data.map((t) => t.value),
  elderlyPopulation: prefData.result.data[3].data.map((t) => t.value),
})

const fetchDataForPref = async (prefCode: number, prefName: string, dispatch: Dispatch<Action>) => {
  try {
    const res = await fetch(`/api/population?prefCode=${prefCode}`)
    if (!res.ok) {
      throw new Error(`Failed to fetch with status ${res.status}`)
    }
    const prefData = (await res.json()) as PopulationRes
    const mappedData = mapPopulationData(prefData)
    dispatch({
      type: 'fetched',
      payload: {prefName, prefCode, data: mappedData},
    })
  } catch (error) {
    console.error(error)
  }
}

export const SelectedPrefDataProvider = ({children}: {children: ReactNode}) => {
  const [selectedPrefData, dispatch] = useReducer(prefReducer, [])

  useEffect(() => {
    const dataToFetch = selectedPrefData.filter((sp) => sp.data.totalPopulation.length === 0)
    dataToFetch.forEach((sp) => fetchDataForPref(sp.prefCode, sp.prefName, dispatch))
  }, [selectedPrefData])

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
          prefName: action.prefName,
          prefCode: action.prefCode,
          data: {
            totalPopulation: [],
            youthPopulation: [],
            workingAgePopulation: [],
            elderlyPopulation: [],
          },
        },
      ]
    case 'fetched':
      return selectedPrefData.map((sp) =>
        sp.prefCode === action.payload.prefCode ? action.payload : sp
      )
    case 'deleted':
      return selectedPrefData.filter((t) => t.prefCode !== action.prefCode)
    default:
      throw Error('Unknown action: ' + JSON.stringify(action))
  }
}
