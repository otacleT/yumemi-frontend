/* eslint-disable testing-library/no-await-sync-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import {expect, test} from '@playwright/test'

test('titleタグは設定されているか', async ({page}) => {
  await page.goto('http://127.0.0.1:3000/')
  await page.waitForLoadState('load')

  await expect(page).toHaveTitle('株式会社ゆめみのフロントエンド技術課題')
})

test('都道府県を選択して総人口推移グラフを表示', async ({page}) => {
  await page.goto('http://127.0.0.1:3000/')
  await page.waitForLoadState('load')

  const prefButton = page.getByRole('button', {name: '北海道'})
  await prefButton.click()

  await expect(page.getByText('出典：RESAS（地域経済分析システム）')).toBeVisible()
})
