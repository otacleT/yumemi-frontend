import {renderHook} from '@testing-library/react'

import {useColor} from '@/component/Home/element/Prefectures/element/Prefecture/hook/useColor'
import {prefColors} from '@/lib/prefColors'

type PrefName = keyof typeof prefColors

describe('useColor', () => {
  Object.keys(prefColors).forEach((prefName) => {
    test(`should return correct color for ${prefName}`, () => {
      const {result} = renderHook(() => useColor(prefName))
      expect(result.current).toBe(
        `text-[${prefColors[prefName as PrefName]}] border-[${prefColors[prefName as PrefName]}]`
      )
    })
  })
})
