import {css} from '@emotion/react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React from 'react'

import {NoData} from '@/component/Home/element/Chart/element/NoData'
import {Select} from '@/component/Home/element/Chart/element/Select'
import {useChart} from '@/component/Home/element/Chart/hook/useChart'

/**
 * @package
 */

export const Chart: React.FC = () => {
  const {dataType, options, selectedPrefData, setDataType} = useChart()

  return (
    <div css={chart}>
      {selectedPrefData.length === 0 ? (
        <NoData />
      ) : (
        <>
          <Select dataType={dataType} setDataType={setDataType} />
          <HighchartsReact highcharts={Highcharts} options={options} />
        </>
      )}
    </div>
  )
}

const chart = css`
  width: calc(65% - 10px);
  @media (max-width: 1024px) {
    width: 100%;
  }
`
