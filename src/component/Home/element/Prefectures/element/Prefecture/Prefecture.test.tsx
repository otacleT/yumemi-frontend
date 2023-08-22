import {render, screen} from '@testing-library/react'

import {Prefecture} from '@/component/Home/element/Prefectures/element/Prefecture'

describe('Prefecture', () => {
  // Arrange
  const prefecture = {
    prefCode: 1,
    prefName: '北海道',
  }
  test('renders correctly', () => {
    // Act
    render(<Prefecture {...prefecture} />)

    // Assert
    expect(screen.getByRole('button', {name: prefecture.prefName})).toBeInTheDocument()
  })
})
