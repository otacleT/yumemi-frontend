import type {NextApiRequest as Req, NextApiResponse as Res} from 'next'

export default async function resasApi(req: Req, res: Res) {
  const {prefCode} = req.query

  if (!prefCode) {
    return res.status(400).json({message: 'prefCode query parameter is required'})
  }

  try {
    const response = await fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}&cityCode=-`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.RESAS_API_KEY ?? '',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`RESAS API responded with ${response.status}`)
    }

    const data = await response.json()
    return res.status(200).json(data)
  } catch (err: any) {
    return res.status(500).json({message: err.message})
  }
}
