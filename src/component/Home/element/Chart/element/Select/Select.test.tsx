import {render, screen} from '@testing-library/react'

import {Select} from '@/component/Home/element/Chart/element/Select'

describe('Select', () => {
  test('renders correctly', () => {
    // Arrange
    const dataType = 'totalPopulation'
    const setDataType = jest.fn()
    render(<Select dataType={dataType} setDataType={setDataType} />)

    // Assert
    expect(screen.getByRole('option', {name: '総人口'})).toBeInTheDocument()
  })
})
