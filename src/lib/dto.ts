import type {PrefectureType} from '@/type/PrefectureType'

export type PopulationRes = {
  message: string
  result: {
    boundaryYear: number
    data: {
      label: string
      data: {
        year: number
        value: number
      }[]
    }[]
  }
}

export type PrefecturesRes = {
  message: string
  result: PrefectureType[]
}
