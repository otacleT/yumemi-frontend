/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import type {GetStaticProps, NextPage} from 'next'

import {Button} from '@/component/Button'
import type {Prefecture} from '@/type/Prefecture'
import type {Prefectures} from '@/type/Prefectures'

export const getStaticProps: GetStaticProps = async () => {
  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.append('X-API-KEY', process.env.RESAS_API_KEY ?? '')
  const res = await fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
    method: 'GET',
    headers: requestHeaders,
  })
  const data = await res.json()
  const prefectures = data.result.map((prefecture: Prefecture) => {
    return {
      prefCode: prefecture.prefCode,
      prefName: prefecture.prefName,
    }
  })
  return {
    props: {
      prefectures,
    },
  }
}

const Home: NextPage<Prefectures> = (props) => {
  const {prefectures} = props
  return (
    <div css={[container, wrapper]}>
      <div>
        <h2 css={title}>都道府県一覧</h2>
        <div css={leftWrapper}>
          {prefectures.map(({prefCode, prefName}: Prefecture) => {
            return <Button key={prefCode} name={prefName} />
          })}
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Home

const container = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`
const wrapper = css`
  display: grid;
  gap: 10px;
  grid-template-columns: minmax(340px, 2fr) 3fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const title = css`
  font-size: 20px;
  font-weight: bold;
`
const leftWrapper = css`
  width: 100%;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  place-items: center;
  padding-top: 20px;
`
