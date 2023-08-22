import type {Dispatch, ReactNode} from 'react'
import {createContext, useContext, useEffect, useReducer} from 'react'

import {getPopulation} from '@/lib/api'

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
  | {
      type: 'fetched'
      payload: SelectedPrefDataType
    }

const SelectedPrefDataContext = createContext<SelectedPrefDataType[]>([])

const SelectedPrefDataDispatchContext = createContext<Dispatch<Action> | null>(null)

export const SelectedPrefDataProvider = ({children}: {children: ReactNode}) => {
  const [selectedPrefData, dispatch] = useReducer(prefReducer, [])

  useEffect(() => {
    const fetchData = async (prefCode: number, prefName: string) => {
      try {
        const prefData = await getPopulation(prefCode)
        const totalPopulation = prefData.result.data[0].data.map((t) => t.value)
        console.info(prefData.result.data[0].data.map((t) => t.year))
        const youthPopulation = prefData.result.data[1].data.map((t) => t.value)
        const workingAgePopulation = prefData.result.data[2].data.map((t) => t.value)
        const elderlyPopulation = prefData.result.data[3].data.map((t) => t.value)

        dispatch({
          type: 'fetched',
          payload: {
            prefName,
            prefCode,
            data: {
              totalPopulation,
              youthPopulation,
              workingAgePopulation,
              elderlyPopulation,
            },
          },
        })
      } catch (error) {
        console.error(error)
      }
    }

    if (selectedPrefData.some((sp) => sp.data.totalPopulation.length === 0)) {
      selectedPrefData.forEach((sp) => {
        if (sp.data.totalPopulation.length === 0) {
          fetchData(sp.prefCode, sp.prefName)
        }
      })
    }
  }, [selectedPrefData])

  return (
    <SelectedPrefDataContext.Provider value={selectedPrefData}>
      <SelectedPrefDataDispatchContext.Provider value={dispatch}>
        {children}
      </SelectedPrefDataDispatchContext.Provider>
    </SelectedPrefDataContext.Provider>
  )
}

export const useSelectedPref = () => {
  return useContext(SelectedPrefDataContext)
}

export const useSelectedPrefDispatch = () => {
  return useContext(SelectedPrefDataDispatchContext)
}

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
