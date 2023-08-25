import {render, screen} from '@testing-library/react'

import {Home} from '@/component/Home'
import type {PrefectureType} from '@/type/PrefectureType'

describe('Home', () => {
  // Arrange
  const prefectures: PrefectureType[] = [
    {
      prefCode: 1,
      prefName: '北海道',
    },
    {
      prefCode: 2,
      prefName: '青森県',
    },
  ]
  test('renders correctly', () => {
    // Act
    render(<Home prefectures={prefectures} />)

    // Assert
    expect(screen.getByRole('heading', {name: '都道府県一覧'})).toBeInTheDocument()
  })
})
