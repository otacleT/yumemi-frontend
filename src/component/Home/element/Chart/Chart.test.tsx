import {render, screen} from '@testing-library/react'

import {Chart} from '@/component/Home/element/Chart'

describe('Chart', () => {
  test('renders correctly', () => {
    // Arrange
    render(<Chart />)

    // Assert
    expect(screen.getByText('都道府県を選択してください')).toBeInTheDocument()
  })
})
