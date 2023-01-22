import type {NextApiRequest as Req, NextApiResponse as Res} from 'next'

export default async function resasApi(req: Req, res: Res) {
  const prefCode = req.headers['text'] as string
  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.append('X-API-KEY', process.env.RESAS_API_KEY ?? '')
  const response = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}&cityCode=-`,
    {
      method: 'GET',
      headers: requestHeaders,
    }
  )
  const data = await response.json()

  res.status(200).json(data)
}
