import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {rest} from 'msw'

import {SelectedPrefDataDispatchContext} from '@/component/Home/context/SelectedPrefDataContext'
import {StartYearContext} from '@/component/Home/context/StartYearContext'
import {Prefecture} from '@/component/Home/element/Prefectures/element/Prefecture'
import {server} from '@/mocks/server'
import type {PrefectureType} from '@/type/PrefectureType'

const mockDispatch = jest.fn()
const mockStartYearFn = jest.fn()
global.alert = jest.fn()

describe('Prefecture', () => {
  // Arrange
  const mockData: PrefectureType = {
    prefCode: 1,
    prefName: '北海道',
  }

  test('renders correctly', () => {
    // Act
    render(
      <SelectedPrefDataDispatchContext.Provider value={mockDispatch}>
        <StartYearContext.Provider value={{startYear: 1960, setStartYear: mockStartYearFn}}>
          <Prefecture {...mockData} />
        </StartYearContext.Provider>
      </SelectedPrefDataDispatchContext.Provider>
    )

    // Assert
    expect(screen.getByRole('button', {name: mockData.prefName})).toBeInTheDocument()
  })

  test('check button', async () => {
    // Arrange
    render(
      <SelectedPrefDataDispatchContext.Provider value={mockDispatch}>
        <StartYearContext.Provider value={{startYear: 1960, setStartYear: mockStartYearFn}}>
          <Prefecture {...mockData} />
        </StartYearContext.Provider>
      </SelectedPrefDataDispatchContext.Provider>
    )

    // Act
    const button = screen.getByRole('button', {name: mockData.prefName})
    await userEvent.click(button)

    // Assert
    expect(
      (await screen.findByText(mockData.prefName)).classList.contains('before:content-["✓"]')
    ).toBe(true)
  })

  test('uncheck button', async () => {
    // Arrange
    render(
      <SelectedPrefDataDispatchContext.Provider value={mockDispatch}>
        <StartYearContext.Provider value={{startYear: 1960, setStartYear: mockStartYearFn}}>
          <Prefecture {...mockData} />
        </StartYearContext.Provider>
      </SelectedPrefDataDispatchContext.Provider>
    )

    // Act
    const button = screen.getByRole('button', {name: mockData.prefName})
    await userEvent.click(button)
    await userEvent.click(button)

    // Assert
    expect(
      (await screen.findByText(mockData.prefName)).classList.contains('before:content-["＋"]')
    ).toBe(true)
  })

  test('fetch error', async () => {
    // Arrange
    server.use(
      rest.get('/api/population', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    render(
      <SelectedPrefDataDispatchContext.Provider value={mockDispatch}>
        <StartYearContext.Provider value={{startYear: 1960, setStartYear: mockStartYearFn}}>
          <Prefecture {...mockData} />
        </StartYearContext.Provider>
      </SelectedPrefDataDispatchContext.Provider>
    )

    // Act
    const button = screen.getByRole('button', {name: mockData.prefName})
    await userEvent.click(button)

    // Assert
    expect(global.alert).toHaveBeenCalledTimes(1)
  })
})
