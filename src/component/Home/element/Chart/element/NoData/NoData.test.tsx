import {render, screen} from '@testing-library/react'

import {NoData} from '@/component/Home/element/Chart/element/NoData'

describe('NoData', () => {
  test('renders correctly', () => {
    // Arrange
    render(<NoData />)

    // Assert
    expect(screen.getByText('都道府県を選択してください')).toBeInTheDocument()
  })
})
