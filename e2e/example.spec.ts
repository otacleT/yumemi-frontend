import {expect, test} from '@playwright/test'

test('has title', async ({page}) => {
  await page.goto('http://127.0.0.1:3000/')

  await expect(page).toHaveTitle('株式会社ゆめみのフロントエンド技術課題')
})
