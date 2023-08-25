import {act, renderHook, waitFor} from '@testing-library/react'
import {rest} from 'msw'

import {usePrefecture} from '@/component/Home/element/Prefectures/element/Prefecture/hook/usePrefecture'
import {server} from '@/mocks/server'

const mockDispatch = jest.fn()
const mockSetStartYear = jest.fn()
global.alert = jest.fn()
jest.mock('src/component/Home/context/SelectedPrefDataContext', () => ({
  useSelectedPrefDispatch: () => mockDispatch,
}))
jest.mock('src/component/Home/context/StartYearContext', () => ({
  useStartYear: () => ({setStartYear: mockSetStartYear}),
}))

describe('usePrefecture', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders correctly', () => {
    // Act
    const {result} = renderHook(() => usePrefecture())

    // Assert
    expect(result.current.isChecked).toBe(false)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.handleSelect).toBeDefined()
  })

  test('success to fetch', async () => {
    // Arrange
    const {result} = renderHook(() => usePrefecture())

    // Act
    act(() => {
      result.current.handleSelect({prefCode: 1, prefName: '北海道'})
    })

    // Assert
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })
    expect(result.current.isChecked).toBe(true)
  })

  test('failed to fetch', async () => {
    // Arrange
    server.use(
      rest.get('/api/population', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    const {result} = renderHook(() => usePrefecture())
    expect(result.current.isChecked).toBe(false)

    // Act
    act(() => {
      result.current.handleSelect({prefCode: 1, prefName: '北海道'})
    })

    // Assert
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })
    expect(result.current.isChecked).toBe(false)
  })
})
