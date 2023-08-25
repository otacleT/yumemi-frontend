import {rest} from 'msw'

import type {PopulationRes} from '@/lib/dto'

export const handlers = [
  rest.get('/api/population', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<PopulationRes>({
        message: 'this is a mock response',
        result: {
          boundaryYear: 2020,
          data: [
            {
              label: '総人口',
              data: [
                {
                  year: 1980,
                  value: 12817,
                },
              ],
            },
            {
              label: '年少人口',
              data: [
                {
                  year: 1980,
                  value: 2906,
                },
              ],
            },
            {
              label: '生産年齢人口',
              data: [
                {
                  year: 1980,
                  value: 8360,
                },
              ],
            },
            {
              label: '老年人口',
              data: [
                {
                  year: 1980,
                  value: 1550,
                },
              ],
            },
          ],
        },
      })
    )
  }),
]
